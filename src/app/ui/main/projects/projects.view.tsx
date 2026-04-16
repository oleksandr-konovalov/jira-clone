import { useState } from "react";
import { Link, Outlet } from "@remix-run/react";
import { AiOutlinePlus } from "react-icons/ai";
import { ProjectSearchData } from "@domain/project";
import { Button } from "@app/components/button";
import { ProjectCard } from "./project-card";
import { SearchProjects } from "./search-projects";

/**
 * Filters projects by search query.
 * Searches across project name, description, and associated issue IDs and names.
 */
const filterProjectsBySearch = (
  projects: ProjectSearchData[],
  searchQuery: string
): ProjectSearchData[] => {
  if (!searchQuery) return projects;

  const query = searchQuery.toLowerCase();

  return projects.filter((project) => {
    const matchesName = project.name.toLowerCase().includes(query);
    const matchesDescription = project.description
      ?.toLowerCase()
      .includes(query);
    const matchesIssue = project.issues.some(
      (issue) =>
        issue.id.toLowerCase().includes(query) ||
        issue.name.toLowerCase().includes(query)
    );

    return matchesName || matchesDescription || matchesIssue;
  });
};

export const ProjectsView = ({
  projectsSearchData,
}: ProjectsViewProps): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const filteredProjects = filterProjectsBySearch(projectsSearchData, search);

  return (
    <div className="p-6">
      <h1 className="font-primary-black text-2xl">PROJECTS</h1>
      <div className="mt-8 flex items-center gap-4">
        <SearchProjects search={search} setSearch={setSearch} />
        <Link to="new" className="flex w-fit">
          <Button color="neutral" variant="subtlest" className="py-3 pl-3 pr-4">
            <span>
              <AiOutlinePlus size={22} />
            </span>
            <span className="leading-4">Add Project</span>
          </Button>
        </Link>
      </div>
      <div className="mt-4 grid grid-cols-[repeat(auto-fit,_400px)] gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

interface ProjectsViewProps {
  projectsSearchData: ProjectSearchData[];
}