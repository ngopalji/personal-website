import { Card, CardBody } from "@nextui-org/card";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { GithubIcon} from "@/components/icons";
import { experiences } from "@/config/experiences";
import ExperienceCard from "./ExperienceCard";



export default function Experience() {
    return (
        <section id="experience" className="flex flex-col justify-start min-h-screen md:pl-7 gap-4 lg:flex-row lg:items-center pb-20">
            <h1 className="text-center min-h-0 md:sticky top-20 bottom-20 lg:text-left text-6xl md:text-8xl font-bold text-transparent mt-10 md:mt-0 pb-2 bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-7">Experience</h1>
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
