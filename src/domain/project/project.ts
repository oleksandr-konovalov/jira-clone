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
 * Minimal issue data included in project search results.
 * Contains only the fields needed for search filtering (ID and name).
 */
export interface ProjectIssueStub {
  id: string;
  name: string;
}

/**
 * Extended project summary that includes associated issues.
 * Used for the projects page search functionality to enable searching by issue ID or name.
 */
export interface ProjectSearchData extends ProjectSummary {
  issues: ProjectIssueStub[];
}

export const projectToProjectSummary = (project: Project): ProjectSummary => ({
  id: project.id,
  name: project.name,
  description: project.description,
  image: project.image,
  createdAt: project.createdAt,
});
