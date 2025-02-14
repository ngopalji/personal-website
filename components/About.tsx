import { Card, CardBody } from "@nextui-org/card";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { DownArrowIcon, EmailIcon, GithubIcon, LinkedInIcon, ResumeIcon } from "@/components/icons";


export default function About() {
    return (
        <section id="about" className="flex flex-col justify-center min-h-screen md:pl-7 ">
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-7">
                <div className="flex flex-col gap-3 justify-center items-center">
                    <h1 className="text-center md:text-left text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">About Me</h1>
                    <Card className="max-w-3xl min-w-unit-sm bg-transparent">
                    <CardBody className="">
                        <p className="text-center">
                            Hey, welcome to my website! I started my journey at UMich studying mechanical engineering. My robotics projects and experiences building software automation into my mechanical work sparked my interest in computer science. I switched my major and have been building as much as possible over the past few years. I enjoy working with innovative software teams, aiming to create impactful and scalable software solutions to challenging problems around us.
                            <br /><br />When I&apos;m not working on tech, I love playing guitar (jazz and flamenco music) and watching F1, tennis, and UMICH football!
                        </p>
                    </CardBody>
                </Card>
                </div>
                
                <img className="h-auto max-w-xs lg:max-w-sm rounded-2xl size-sm shadow-xl" src="headshot.png" alt="Nihaar Gopalji Headshot" />
            </div>
        </section>
    );
};
