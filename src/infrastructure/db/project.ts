import { Prisma } from "@prisma/client";

import { UserId } from "@domain/user";
import { Project, ProjectSummary, ProjectId } from "@domain/project";
import { Category, CategoryType } from "@domain/category";
import { Priority } from "@domain/priority";
import { Sort } from "@domain/filter";
import { db } from "./db.server";
import { dnull } from "src/utils/dnull";

export const getProject = async (
  projectId: ProjectId,
  options?: GetProjectOptions
): Promise<Project | null> => {
  type PrismaSortType = Prisma.Enumerable<Prisma.IssueOrderByWithRelationInput>;

  const sortIssuesBy = options?.sortIssuesBy;
  const sortByDate: PrismaSortType = {
    createdAt: "desc",
  };
  const sortByPriority: PrismaSortType = {
    priority: {
      order: "desc",
    },
  };

  // prettier-ignore
  const orderBy: PrismaSortType = sortIssuesBy === "date" 
    ? [sortByDate, sortByPriority] 
    : [sortByPriority, sortByDate];

  const projectDb = await db.project.findUnique({
    where: {
      id: projectId,
    },
    include: {
      users: {
        orderBy: {
          name: "asc",
        },
      },
      categories: {
        include: {
          issues: {
            select: {
              id: true,
              name: true,
              priority: true,
              createdAt: true,
              reporter: true,
              asignee: true,
            },
            orderBy: orderBy,
          },
        },
      },
    },
  });

  if (!projectDb) {
    return null;
  }

  const project: Project = {
    id: projectDb.id,
    users: projectDb.users.map(dnull),
    name: projectDb.name,
    description: projectDb.description || "",
    image: projectDb.image,
    categories: projectDb.categories.map((category) => ({
      id: category.id,
      name: category.name,
      type: category.type as CategoryType,
      order: category.order,
      issues: category.issues.map((issue) => ({
        id: issue.id,
        name: issue.name,
        priority: issue.priority as Priority,
        reporter: dnull(issue.reporter),
        asignee: dnull(issue.asignee),
        comments: [],
        createdAt: issue.createdAt.getDate(),
        updatedAt: issue.createdAt.getDate(),
      })),
    })),
    createdAt: projectDb.createdAt.getDate(),
    updatedAt: projectDb.updatedAt.getDate(),
  };

  return project;
};

interface GetProjectOptions {
  sortIssuesBy: Sort;
}

export const getProjectSummary = async (projectId: ProjectId): Promise<ProjectSummary | null> => {
  const projectSummaryDb = await db.project.findUnique({
    where: { id: projectId },
    select: {
      id: true,
      name: true,
      description: true,
      image: true,
      createdAt: true,
    },
  });

  if (!projectSummaryDb) {
    return null;
  }

  const projectSummary: ProjectSummary = {
    id: projectSummaryDb.id,
    name: projectSummaryDb.name,
    description: projectSummaryDb.description || "",
    image: projectSummaryDb.image,
    createdAt: projectSummaryDb.createdAt.getDate(),
  };

  return projectSummary;
};

// Shared mapping logic to convert DB records to domain model
const mapToProjectSummaries = (
  projectsDb: Array<{
    id: string;
    name: string;
    description: string | null;
    image: string;
    createdAt: Date;
  }>
): ProjectSummary[] => {
  return projectsDb.map((projectDb) => ({
    id: projectDb.id,
    name: projectDb.name,
    image: projectDb.image,
    description: projectDb.description || "",
    createdAt: projectDb.createdAt.getDate(),
  }));
};

export const getProjectsSummary = async (userId: UserId): Promise<ProjectSummary[]> => {
  const projectsSummaryDb = await db.project.findMany({
    where: {
      users: {
        some: {
          id: userId,
        },
      },
    },
    select: {
      id: true,
      name: true,
      description: true,
      image: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return mapToProjectSummaries(projectsSummaryDb);
};

/**
 * Search for projects matching the query string.
 * Searches across project name, description, and nested issue IDs/names.
 * Case-insensitive partial matching.
 */
export const searchProjects = async (userId: UserId, query: string): Promise<ProjectSummary[]> => {
  const projectsSummaryDb = await db.project.findMany({
    where: {
      users: {
        some: {
          id: userId,
        },
      },
      // Match projects where query appears in name, description, or nested issue
      OR: [
        {
          name: {
            contains: query,
          },
        },
        {
          description: {
            contains: query,
          },
        },
        {
          categories: {
            some: {
              issues: {
                some: {
                  OR: [
                    {
                      id: {
                        contains: query,
                      },
                    },
                    {
                      name: {
                        contains: query,
                      },
                    },
                  ],
                },
              },
            },
          },
        },
      ],
    },
    select: {
      id: true,
      name: true,
      description: true,
      image: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return mapToProjectSummaries(projectsSummaryDb);
};

type CreateProjectInput = {
  name: string;
  description: string;
  image: string;
  userIds: UserId[];
  categories: Omit<Category, "id">[];
};
export const createProject = async (project: CreateProjectInput): Promise<void> => {
  await db.project.create({
    data: {
      name: project.name,
      description: project.description,
      image: project.image,
      categories: {
        create: project.categories.map((category) => ({
          name: category.name,
          type: category.type,
          order: category.order,
        })),
      },
      users: {
        connect: project.userIds.map((userId) => ({ id: userId })),
      },
    },
    include: {
      categories: true,
      users: true,
    },
  });
};

export const deleteProject = async (projectId: ProjectId): Promise<void> => {
  await db.project.delete({
    where: {
      id: projectId,
    },
  });
};
