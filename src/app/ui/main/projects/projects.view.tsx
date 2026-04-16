import { useState } from "react";
import { Link, Outlet } from "@remix-run/react";
import { AiOutlinePlus } from "react-icons/ai";
import { RxValueNone } from "react-icons/rx";
import { ProjectSearchData } from "@domain/project";
import { Button } from "@app/components/button";
import { ProjectCard } from "./project-card";
import { ProjectSearch } from "./project-search";

export const ProjectsView = ({
  projectsSummary,
}: ProjectsViewProps): JSX.Element => {
  const [search, setSearch] = useState("");

  const filteredProjects = projectsSummary.filter((project) => {
    if (search === "") return true;

    const query = search.toLowerCase();

    // Match against project name
    if (project.name.toLowerCase().includes(query)) return true;

    // Match against project description
    if (project.description?.toLowerCase().includes(query)) return true;

    // Match against any issue ID or name
    if (
      project.issues.some(
        (issue) =>
          issue.id.toLowerCase().includes(query) ||
          issue.name.toLowerCase().includes(query)
      )
    ) {
      return true;
    }

    return false;
  });

  const showEmptyState = search !== "" && filteredProjects.length === 0;

  return (
    <div className="p-6">
      <h1 className="font-primary-black text-2xl">PROJECTS</h1>
      <div className="mt-8 flex items-center gap-4">
        <ProjectSearch search={search} setSearch={setSearch} />
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
        <div className="mt-16 flex flex-col items-center text-font-subtlest">
          <RxValueNone size={48} />
          <p className="mt-4 font-primary-light text-sm uppercase">No projects found</p>
        </div>
      ) : (
        <div className="mt-4 grid grid-cols-[repeat(auto-fit,_400px)] gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
      <Outlet />
    </div>
  );
};

interface ProjectsViewProps {
  projectsSummary: ProjectSearchData[];
}
