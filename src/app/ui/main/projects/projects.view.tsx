import { Link, Outlet } from "@remix-run/react";
import { AiOutlinePlus } from "react-icons/ai";
import { ProjectSummary } from "@domain/project";
import { Button } from "@app/components/button";
import { ProjectCard } from "./project-card";
import { ProjectSearch } from "./project-search";

export const ProjectsView = ({
  projectsSummary,
  searchQuery,
}: ProjectsViewProps): JSX.Element => {
  const hasProjects = projectsSummary.length > 0;
  // Only show "no matches" message when actively searching with no results
  // (don't show it when user has zero projects and isn't searching)
  const showEmptyState = !hasProjects && searchQuery;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <h1 className="font-primary-black text-2xl">PROJECTS</h1>
        <ProjectSearch />
      </div>
      <div className="mt-8">
        <Link to="new" className="flex w-fit">
          <Button color="neutral" variant="subtlest" className="py-3 pl-3 pr-4">
            <span>
              <AiOutlinePlus size={22} />
            </span>
            <span className="leading-4">Add Project</span>
          </Button>
        </Link>
      </div>
      {showEmptyState ? (
        <div className="mt-8 text-center text-font-subtlest">
          <p>No projects match your search</p>
        </div>
      ) : (
        <div className="mt-4 grid grid-cols-[repeat(auto-fit,_400px)] gap-8">
          {projectsSummary.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
      <Outlet />
    </div>
  );
};

interface ProjectsViewProps {
  projectsSummary: ProjectSummary[];
  searchQuery: string | null;
}
