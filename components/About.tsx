import { Card, CardBody } from "@nextui-org/card";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { DownArrowIcon, EmailIcon, GithubIcon, LinkedInIcon, ResumeIcon } from "@/components/icons";


export default function About() {
    return (
        <section id="about" className="flex flex-col justify-center h-screen md:pl-7 ">
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-7">
                <div className="flex flex-col gap-3 justify-center items-center">
                    <h1 className="text-center md:text-left text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">About Me</h1>
                    <Card className="max-w-3xl min-w-unit-sm bg-transparent">
                    <CardBody className="">
                        <p className="text-center">
                            Hey there, and welcome to my personal website! My journey at Michigan began studying mechanical engineering, where I pursued my interest in using mechanics and physics to devise innovative solutions. However, as I progressed through my projects, I found myself eagerly taking on software side projects and seamlessly integrating software automation into my mechanical designs.
                            <br></br><br></br>I came to the realization that I was more interested in software. Since then, I picked up a second major in computer science and have been developing the skills to build scalable software solutions to tackle the intriguing problems that surround us.
                            <br></br><br></br>When I'm not working on tech, you'll find me playing jazz and flamenco music on guitar, playing tennis, and watching F1 and UMICH Football.
                        </p>
                    </CardBody>
                </Card>
                </div>
                
                <img className="h-auto max-w-xs lg:max-w-sm rounded-2xl size-sm shadow-xl" src="headshot.png" alt="Nihaar Gopalji Headshot" />
            </div>
        </section>
    );
};
