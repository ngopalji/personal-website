import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";


interface Project {
    name: string;
    title: string;
    skills: string[];
    duration: string;
    image: string;
    description: string;
}

export default function ProjectCard({ name, title, skills, duration, image, description }: Project) {
    return (
        <Card className="w-5/6">
            <div className="flex flex-col justify-start items-center gap-3">
                <Image className=""
                        src={image}
                        alt={name}
                        height={60}
                        width={60}
                        radius="sm"
                    />
                <Divider/>
                <CardHeader className="flex flex-row justify-center gap-4">
                    <div className="flex flex-row justify-between w-full">
                        <div className="">
                            <p className="text-2xl font-bold">{title}</p>
                            <div className="flex flex-wrap flex-row gap-1 pt-1">
                                    {skills.map((skill) => (
                                        <Chip key={skill} size="sm" radius="sm" color="primary">{skill}</Chip>
                                    ))}
                                </div>
                        </div>
                        <div className="text-right text-slate-400">
                            <p className="text-slate-400">{duration}</p>
                        </div>
                    </div>
                    
                </CardHeader>
                <CardBody>{description}</CardBody>   
            </div>
            
        </Card>

    );
}
