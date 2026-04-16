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
  const hasSearch = search && search.length > 0;
  const hasResults = projectsSummary.length > 0;

  return (
    <div className="p-6">
      <h1 className="font-primary-black text-2xl">PROJECTS</h1>
      <div className="mt-8 flex items-center gap-4">
        <Link to="new" className="flex w-fit">
          <Button color="neutral" variant="subtlest" className="py-3 pl-3 pr-4">
            <span>
              <AiOutlinePlus size={22} />
            </span>
            <span className="leading-4">Add Project</span>
          </Button>
        </Link>
        <ProjectSearch initialValue={search} />
      </div>
      {/* Show empty state only when user has searched but no results found */}
      {hasResults ? (
        <div className="mt-4 grid grid-cols-[repeat(auto-fit,_400px)] gap-8">
          {projectsSummary.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        hasSearch && <NoResultsMessage searchQuery={search} />
      )}
      <Outlet />
    </div>
  );
};

const NoResultsMessage = ({
  searchQuery,
}: {
  searchQuery: string;
}): JSX.Element => (
  <div className="mt-12 text-center">
    <p className="text-font-subtle">
      No projects found matching &quot;{searchQuery}&quot;
    </p>
  </div>
);

interface ProjectsViewProps {
  projectsSummary: ProjectSummary[];
  search?: string;
}
