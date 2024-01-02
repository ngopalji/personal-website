import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { DownArrowIcon, EmailIcon, GithubIcon, LinkedInIcon, ResumeIcon } from "@/components/icons";

export default function Home() {
	return (
		<section className="flex flex-col justify-center lg:flex-row  lg:justify-between gap-4 py-0 lg:py-20">
			<div className="flex flex-col justify-center">
				<h1 className="text-center lg:text-left text-3xl md:text-2xl lg:text-3xl">&nbsp;</h1>
				<h1 className='text-center lg:text-left text-5xl md:text-4xl lg:text-4xl md:mb-5 lg:pl-7'>Hello! I'm</h1>
				<h1 className='text-center lg:text-left text-8xl md:text-9xl font-bold lg:pl-7 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600'>Nihaar<br/>Gopalji</h1>

			</div>
			<div className="justify-center lg:pr-20">
				<h2 className="text-center mt-10 lg:mt-24 text-2xl lg:max-w-md animate-fadeIn">I'm a junior at the University of Michigan double majoring in computer science and mechanical engineering.</h2>
				<div className="justify-center flex flex-nowrap gap-2 mt-16 lg:mt-27 animate-fadeIn">
					<Link
						isExternal
						href={siteConfig.links.docs}
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
						href={siteConfig.links.docs}
						className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
					>
						<EmailIcon />
						Email
					</Link>
					<Link
						isExternal
						href={siteConfig.links.docs}
						className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
					>
						<LinkedInIcon />
						LinkedIn
					</Link>

				</div>
			</div>


			<div className="w-full mt-20 absolute bottom-2 md:bottom-12 flex justify-center">
				<span className="text-center">
					Scroll to learn a bit about me and my experience!
					<br />
					<br />
					<DownArrowIcon className="mx-auto animate-oscillate" />
				</span>
			</div>

		</section>
	);
}
