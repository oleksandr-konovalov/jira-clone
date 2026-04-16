import { User } from "@domain/user";
import { Category } from "@domain/category";

export type ProjectId = string;
export interface Project {
  id: ProjectId;
  name: string;
  description?: string;
  users: User[];
  categories: Category[];
  image: string;
  createdAt?: number;
  updatedAt?: number;
}

// TODO: Make createdAt and updatedAt mandatory
export type ProjectSummary = Pick<Project, "id" | "name" | "description" | "image" | "createdAt">;

/**
 * Minimal issue representation for search functionality.
 * Contains only the essential fields needed to match search queries.
 */
export interface ProjectIssueStub {
  id: string;
  name: string;
}

/**
 * Extended project summary with issue data to support search across projects and their issues.
 */
export type ProjectSearchData = ProjectSummary & {
  issues: ProjectIssueStub[];
};

export const projectToProjectSummary = (project: Project): ProjectSummary => ({
  id: project.id,
  name: project.name,
  description: project.description,
  image: project.image,
  createdAt: project.createdAt,
});
