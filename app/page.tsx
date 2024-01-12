import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { DownArrowIcon, EmailIcon, GithubIcon, LinkedInIcon, ResumeIcon } from "@/components/icons";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experiences/Experience";
import Projects from "@/components/Projects/Projects";



export default function Home() {
	return (
		<div className="">
			<Hero />
			<About />
			<Experience />
			<Projects />
		</div>
	);
}
