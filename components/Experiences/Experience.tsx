import { Card, CardBody } from "@nextui-org/card";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { GithubIcon} from "@/components/icons";
import { experiences } from "@/config/experiences";
import ExperienceCard from "./ExperienceCard";



export default function Experience() {
    return (
        <section id="experience" className="flex flex-col justify-start h-screen md:pl-7 gap-4 lg:flex-row lg:items-center">
            <h1 className="text-center lg:text-left text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-7">Experience</h1>
            <div className="flex flex-col w-full gap-4 justify-center items-center">
                {experiences.map((Experience) => (
                    <ExperienceCard
                        key={Experience.name}
                        name={Experience.name}
                        title={Experience.title}
                        location={Experience.location}
                        duration={Experience.duration}
                        image={Experience.image}
                        description={Experience.description}
                    />
                ))}
            </div>
            
        </section>
    );
};
