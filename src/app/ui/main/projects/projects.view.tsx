import { useState } from "react";
import { Link, Outlet } from "@remix-run/react";
import { AiOutlinePlus } from "react-icons/ai";
import { ProjectSearchData } from "@domain/project";
import { Button } from "@app/components/button";
import { ProjectCard } from "./project-card";
import { ProjectSearch } from "./project-search";

export const ProjectsView = ({
  projectsSummary,
}: ProjectsViewProps): JSX.Element => {
  const [search, setSearch] = useState("");

  const filteredProjects = projectsSummary.filter((project) => {
    const q = search.toLowerCase();
    if (q === "") return true;
    if (project.name.toLowerCase().includes(q)) return true;
    if (project.description?.toLowerCase().includes(q)) return true;
    if (project.issues.some(issue => 
      issue.id.toLowerCase().includes(q) || 
      issue.name.toLowerCase().includes(q)
    )) return true;
    return false;
  });

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
        <ProjectSearch search={search} setSearch={setSearch} />
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
