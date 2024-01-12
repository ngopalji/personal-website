import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/react";


interface Experience {
    name: string;
    title: string;
    location: string;
    duration: string;
    image: string;
    description: string;
}

export default function ExperienceCard({ name, title, location, duration, image, description }: Experience) {
    return (
        <Card className="max-w-2xl border border-slate-600">
            <CardHeader className="flex flex-row justify-center gap-4">
                <Image
                    isBlurred
                    src={image}
                    alt={name}
                    height={60}
                    width={60}
                    radius="sm"
                />
                <div className="flex flex-row justify-between w-full items-center">
                    <div className="text-1xl">
                        <p className="font-bold">{name}</p>
                        <p className="">{title}</p>
                    </div>
                    <div className="text-right text-slate-400">
                        <p className="text-slate-400">{duration}</p>
                        <p className="">{location}</p>
                    </div>
                </div>
                
            </CardHeader>
            <Divider/>
            <CardBody>{description}</CardBody>   
        </Card>

    );
}
