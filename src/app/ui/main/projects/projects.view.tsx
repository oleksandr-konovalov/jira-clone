import { useState } from "react";
import { Link, Outlet } from "@remix-run/react";
import { AiOutlinePlus } from "react-icons/ai";
import { ProjectSearchData } from "@domain/project";
import { Button } from "@app/components/button";
import { ProjectCard } from "./project-card";
import { SearchProjects } from "./search-projects";

export const ProjectsView = ({
  projectsSearchData,
}: ProjectsViewProps): JSX.Element => {
  const [search, setSearch] = useState<string>("");

  const filteredProjects = projectsSearchData.filter((project) => {
    const q = search.toLowerCase();
    return (
      project.name.toLowerCase().includes(q) ||
      (project.description?.toLowerCase().includes(q)) ||
      project.issues.some(
        (issue) =>
          issue.id.toLowerCase().includes(q) ||
          issue.name.toLowerCase().includes(q)
      )
    );
  });

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
