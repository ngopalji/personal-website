import React from "react";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { DownArrowIcon, EmailIcon, GithubIcon, LinkedInIcon, ResumeIcon } from "@/components/icons";
import AnimatedText from "./AnimateText";

export default function Hero() {
    return (
        <section className="flex flex-col justify-start h-screen items-center">
            <div className="flex flex-col justify-start w-11/12 lg:flex-row lg:justify-between items-center gap-14 lg:gap-4 lg:mt-10 lg:py-20">
                <div className="items-center bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                    <AnimatedText text="Nihaar\nGopalji"/>
                </div>
                <div className="flex flex-col justify-center gap-14">
                    <p className="hidden text-center text-2xl lg:max-w-md animate-fadeIn">Hi,</p>
                    <p className="text-center text-xl md:text-2xl lg:max-w-md animate-fadeInDelay1">I'm a junior at the University of Michigan double majoring in computer science and mechanical engineering.</p>
                    <div className="flex flex-nowrap justify-center gap-2 animate-fadeInDelay2">
                        <Link
                            isExternal
                            href={siteConfig.links.resume}
                            className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
                        >
                            <ResumeIcon />
                            Resume
                        </Link>
                        <Link
                            isExternal
                            className={buttonStyles({ color: "primary", variant: "shadow", radius: "full" })}
                            href={siteConfig.links.github}
                        >
                            <GithubIcon size={20} />
                            GitHub
                        </Link>
                        <Link
                            isExternal
                            href={siteConfig.links.email}
                            className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
                        >
                            <EmailIcon />
                            Email
                        </Link>
                        <Link
                            isExternal
                            href={siteConfig.links.linkedin}
                            className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
                        >
                            <LinkedInIcon />
                            LinkedIn
                        </Link>
                    </div>
                </div>
            </div> 
            <div className="flex flex-col gap-6 absolute bottom-6 animate-fadeInDelay2">
                <p>Welcome to my portfolio website!</p>
                <DownArrowIcon className="mx-auto animate-oscillate" />
            </div>
        </section>
    );
};
