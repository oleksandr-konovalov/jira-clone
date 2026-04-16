import { Link, Outlet } from "@remix-run/react";
import { AiOutlinePlus } from "react-icons/ai";
import { ProjectSummary } from "@domain/project";
import { Button } from "@app/components/button";
import { ProjectCard } from "./project-card";
import { ProjectSearch } from "./project-search";

export const ProjectsView = ({
  projectsSummary,
  search,
}: ProjectsViewProps): JSX.Element => {
  const hasSearch = search.trim() !== "";
  const hasNoResults = hasSearch && projectsSummary.length === 0;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <h1 className="font-primary-black text-2xl">PROJECTS</h1>
        <ProjectSearch initialSearch={search} />
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
      {hasNoResults ? (
        <div className="mt-12 text-center">
          <p className="text-font-subtle">
            No projects found matching &quot;{search}&quot;
          </p>
          <p className="mt-2 text-sm text-font-subtlest">
            Try adjusting your search or clear the filter to see all projects.
          </p>
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
  search: string;
}
