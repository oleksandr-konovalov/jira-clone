import { useState } from "react";
import { Link, Outlet } from "@remix-run/react";
import { AiOutlinePlus } from "react-icons/ai";
import { ProjectSearchData } from "@domain/project";
import { Button } from "@app/components/button";
import { ProjectCard } from "./project-card";
import { ProjectSearch } from "./search";

export const ProjectsView = ({
  projectsSummary,
}: ProjectsViewProps): JSX.Element => {
  const [search, setSearch] = useState("");

  const filteredProjects = projectsSummary.filter((project) => {
    if (search === "") return true;

    const searchLower = search.toLowerCase();

    // Check project name
    if (project.name.toLowerCase().includes(searchLower)) return true;

    // Check project description
    if (project.description?.toLowerCase().includes(searchLower)) return true;

    // Check any issue id or name
    const hasMatchingIssue = project.issues.some(
      (issue) =>
        issue.id.toLowerCase().includes(searchLower) ||
        issue.name.toLowerCase().includes(searchLower)
    );

    return hasMatchingIssue;
  });

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <h1 className="font-primary-black text-2xl">PROJECTS</h1>
        <ProjectSearch search={search} setSearch={setSearch} />
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
  projectsSummary: ProjectSearchData[];
}
