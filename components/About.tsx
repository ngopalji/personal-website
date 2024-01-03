import { Card, CardBody } from "@nextui-org/card";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { DownArrowIcon, EmailIcon, GithubIcon, LinkedInIcon, ResumeIcon } from "@/components/icons";


export default function About() {
    return (
        <section id="about" className="flex flex-col justify-center h-screen md:pl-7 ">
            <h1 className="text-center md:text-left text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-7">About Me</h1>
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
                <p className="text-center md:text-left md:text-xl lg:text-2xl pr-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <img className="h-auto max-w-xs lg:max-w-sm rounded-2xl size-sm shadow-xl md:mr-20" src="headshot.png" alt="Nihaar Gopalji Headshot" />
            </div>
        </section>
    );
};
