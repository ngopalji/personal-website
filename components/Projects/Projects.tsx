import { Card, CardBody } from "@nextui-org/card";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/config/experiences";
import ProjectCard from "./ProjectCard";



export default function Project() {
    return (
        <section id="projects" className="flex flex-col justify-start h-screen gap-4 items-center">
            <h1 className="text-center lg:text-left text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-7">Projects</h1>
            <div className="flex flex-col w-full gap-14 justify-center">
                {projects.map((Project) => (
                    <ProjectCard
                        key={Project.name}
                        name={Project.name}
                        skills={Project.skills}
                        duration={Project.duration}
                        image={Project.image}
                        description={Project.description}
                        link={Project.link}
                    />
                ))}
            </div>

        </section>
    );
};
