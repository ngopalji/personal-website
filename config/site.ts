export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	navItems: [
		{
			label: "About",
			href: "#about",
		},
		{
			label: "Experience",
			href: "#experience",
		},
		{
			label: "Projects",
			href: "#projects",
		}
	],
	navMenuItems: [
		{
			label: "Home",
			href: "#",
			},
		{
		label: "About",
		href: "#about",
		},
		{
		label: "Experience",
		href: "#experience",
		},
		{
		label: "Projects",
		href: "#projects",
		}
	],
	links: {
		github: "https://github.com/ngopalji",
		resume: "resume.pdf",
		email: "mailto:ngopalji@umich.edu",
		linkedin: "https://www.linkedin.com/in/nihaar-gopalji/"
	},
	metadata: {
		name: "Nihaar Gopalji",
		description: "Nihaar Gopalji - Computer Science and Mechanical Engineering student at the University of Michigan. Learn more about my projects, skills, and professional journey here."
	},
};
