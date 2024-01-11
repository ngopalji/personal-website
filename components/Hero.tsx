import React from "react";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { DownArrowIcon, EmailIcon, GithubIcon, LinkedInIcon, ResumeIcon } from "@/components/icons";

export default function Hero() {
    return (
        <section className="flex flex-col justify-start h-screen ">
            <div className="flex flex-col justify-start lg:flex-row lg:justify-between gap-4 lg:mt-10 lg:py-20">
                {/* <div className="flex flex-col justify-center"> */}
                    {/* <h1 className='text-center font-bold lg:text-left text-3xl lg:text-4xl lg:mb-5 lg:pl-7'>Hello! I'm</h1> */}
                    <h1 className='text-center lg:text-left text-8xl md:text-9xl font-bold lg:pl-7 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600'>Nihaar<br />Gopalji</h1>

                {/* </div> */}
                <div className="justify-center lg:pr-20">
                    <h2 className="text-center mt-10 text-2xl lg:max-w-md animate-fadeIn">Hi! I'm a junior at the University of Michigan double majoring in computer science and mechanical engineering.</h2>
                    <div className="justify-center flex flex-nowrap gap-2 mt-16 lg:mt-27 animate-fadeIn">
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
            <div className="mt-20 flex justify-center animate-fadeIn">
                <span className="text-center">
                    Scroll to learn a bit about me and my experience!
                    <br />
                    <br />
                    <DownArrowIcon className="mx-auto animate-oscillate" />
                </span>
            </div>
        </section>
    );
};
