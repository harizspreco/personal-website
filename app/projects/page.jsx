import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/public/data/projects";

const Page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-screen overflow-y-auto">
        {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  )
}

export default Page