import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import { GithubIcon } from "../icons";
import { time } from "console";



interface Project {
    name: string;
    title: string;
    skills: string[];
    duration: string;
    image: string;
    description: string;
    link?: string;
}

export default function ProjectCard({ name, title, skills, duration, image, description, link }: Project) {
    // return (
        // <Card className="w-5/6">
        //     <div className="flex flex-col justify-start items-center gap-3">
        //         <Image className=""
        //                 src={image}
        //                 alt={name}
        //                 height={60}
        //                 width={60}
        //                 radius="sm"
        //             />
        //         <Divider/>
        //         <CardHeader className="flex flex-row justify-center gap-4">
        //             <div className="flex flex-row justify-between w-full">
        //                 <div className="">
        //                     <p className="text-2xl font-bold">{title}</p>
        //                     <div className="flex flex-wrap flex-row gap-1 pt-1">
        //                             {skills.map((skill) => (
        //                                 <Chip key={skill} size="sm" radius="sm" color="primary">{skill}</Chip>
        //                             ))}
        //                         </div>
        //                 </div>
        //                 <div className="text-right text-slate-400">
        //                     <p className="text-slate-400">{duration}</p>
        //                 </div>
        //             </div>
                    
        //         </CardHeader>
        //         <CardBody>{description}</CardBody>   
        //     </div>
            
        // </Card>
        return (
            // <div className="flex flex-col md:flex-row">
            //   <div className="max-w-xl max-h-2">
            //     <Image
            //         isBlurred
            //         src={image}
            //         alt={title}
            //         width={0}
            //         height={0}
            //         radius="sm"
            //         sizes="1000vw"
            //         className="w-full object-contain"
            //     />
            //   </div>
              
        
            //   <div className="relative p-4">
            //     <h1 className="text-2xl font-semibold text-white">{title}</h1>
            //     <p className="mt-2 text-gray-300">{description}</p>
            //   </div>
            // </div>


            <div className="flex flex-col justify-center md:flex-row gap-8 ">
                  <div className="flex justify-end md:w-1/2">
                    <Link href={link}>
                      <Image
                        isBlurred
                        src={image}
                        alt=""
                        width={400}
                        height={250}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="flex flex-col gap-4 md:w-1/2">
                    <div className="flex flex-row justify-between items-center">
                        <h1 className="text-2xl font-bold">
                            {name}
                            <Link href={link} target="_blank">
                                <GithubIcon
                                size={30}
                                className="ml-4 hover:-translate-y-1 transition-transform cursor-pointer"
                                />
                          </Link>
                        </h1>
                    </div>
                    <div className="flex flex-wrap flex-row gap-1 pt-1 font-bold">
                        Skills {skills.map((skill) => (
                            <Chip key={skill} size="sm" radius="sm" color="primary">{skill}</Chip>
                        ))}
                    </div>
                    <p className="text-slate-400">{duration}</p>
                    <p className="leading-7 mb-4">
                      {description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                    </div>
                  </div>
                </div>

          );

    // );
}
