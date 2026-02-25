"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface Skills {
	title: string;
	src: string;
}

interface Slider {
	color: string;
	title: string;
	description: string;
}

export const skills1: Skills[] = [
	{ title: "HTML5", src: "/icons/html.svg" },
	{ title: "CSS3", src: "/icons/css.svg" },
	{ title: "JavaScript", src: "/icons/javascript.svg" },
	{ title: "Git", src: "/icons/git.svg" },
	{ title: "TypeScript", src: "/icons/typescript.svg" },
	{ title: "React Native", src: "/icons/react-native.svg" },
	{ title: "Next.js", src: "/icons/nextjs.svg" },
];
export const skills2: Skills[] = [
	{ title: "Next.js", src: "/icons/nextjs.svg" },
	{ title: "React", src: "/icons/react.svg" },
	{ title: "UI/UX Design", src: "/icons/adobe.svg" },
	{ title: "GitHub", src: "/icons/github.svg" },
	{ title: "Node.js", src: "/icons/nodejs.svg" },
	{ title: "Express.js", src: "/icons/express.svg" },
	{ title: "Sass/SCSS", src: "/icons/sass.svg" },
	{ title: "Tailwind CSS", src: "/icons/tailwind.svg" },
	{ title: "Python", src: "/icons/python.svg" },
	{ title: "MongoDB", src: "/icons/mongodb.svg" },
	{ title: "PostgreSQL", src: "/icons/postgresql.svg" },
	{ title: "Firebase", src: "/icons/firebase.svg" },
];

const slider1: Slider[] = [
	{
		color: "#7f5af0",
		title: "Web Application Development",
		description:
			"Crafting performant, scalable, and responsive web apps with modern frameworks and clean code practices.",
	},
	{
		color: "#ff6b6b",
		title: "UI / UX Design Implementation",
		description:
			"Turning wireframes and designs into pixel-perfect, interactive, and user-friendly experiences.",
	},
	{
		color: "#0abfbc",
		title: "Mobile Applications",
		description:
			"Understanding, building and deploying cross-platform mobile applications.",
	},
	{
		color: "#f7b801",
		title: "Performance & Optimization",
		description:
			"Optimizing load times, reducing bundle sizes, and improving overall application performance.",
	},
	{
		color: "#ff4d6d",
		title: "Problem Solving & Debugging",
		description:
			"Quickly identifying bottlenecks and resolving both frontend and backend issues efficiently.",
	},
];

const slider2: Slider[] = [
	{
		color: "#845ec2",
		title: "Cutting-Edge Technologies",
		description:
			"Always exploring the latest tools, frameworks, and methodologies to stay ahead in the web space.",
	},
	{
		color: "#4caf50",
		title: "Creative UI Animations",
		description:
			"Adding smooth motion and engaging interactions that elevate the user experience.",
	},
	{
		color: "#ff9f1c",
		title: "Collaboration & Communication",
		description:
			"Working effectively with teams and clients to turn complex ideas into functional apps.",
	},
	{
		color: "#00c2ba",
		title: "Clean & Maintainable Code",
		description:
			"Writing code that is readable, scalable, and easy to maintain for long-term projects.",
	},
	{
		color: "#ff577f",
		title: "Continuous Learning",
		description:
			"Constantly upgrading skills and keeping up with emerging web technologies and best practices.",
	},
];

export default function SlidingContent() {
	const containerRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
	const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

	return (
		<section
			ref={containerRef}
			className="flex flex-col gap-2 relative bg-black z-1 overflow-hidden"
		>
			{/* Slider 1 */}
			<motion.div
				style={{ x: x1 }}
				className="flex relative gap-2 w-[120vw] -translate-x-[10vw]"
			>
				{skills1.map((skill, index) => (
					<div
						key={index}
						className="min-w-[20vw] py-8 flex flex-col items-center justify-center gap-4"
					>
						<div className="relative w-16 h-16">
							<Image
								fill
								src={`${skill.src}`}
								alt={skill.src}
								className="object-contain"
							/>
						</div>
						<h4 className="text-white text-sm md:text-lg font-semibold mb-2">
							{skill.title}
						</h4>
					</div>
				))}
			</motion.div>

			{/* Slider 2 */}
			{/* <motion.div
				style={{ x: x2 }}
				className="flex relative gap-2 w-[120vw] -translate-x-[10vw]"
			>
				{slider2.map((project, index) => (
					<div
						key={index}
						className="w-[25%] h-[15vw] flex items-center justify-center rounded-2xl"
						style={{ backgroundColor: project.color }}
					>
						<h4 className="text-white text-sm md:text-lg font-semibold mb-2 text-center">
							{project.title}
						</h4>
					</div>
				))}
			</motion.div> */}

			{/* Slider 3 */}
			{/* <motion.div
				style={{ x: x1 }}
				className="flex relative gap-2 w-[120vw] -translate-x-[10vw]"
			>
				{slider1.map((project, index) => (
					<div
						key={index}
						className="w-[25%] h-[15vw] flex items-center justify-center rounded-2xl"
						style={{ backgroundColor: project.color }}
					>
						<h4 className="text-white text-sm md:text-lg font-semibold mb-2 text-center">
							{project.title}
						</h4>
					</div>
				))}
			</motion.div> */}

			{/* Slider 1 */}
			<motion.div
				style={{ x: x2 }}
				className="flex relative gap-2 w-[120vw] -translate-x-[10vw]"
			>
				{skills2.map((skill, index) => (
					<div
						key={index}
						className="min-w-[20vw] py-8 flex flex-col items-center justify-center "
					>
						<div className="relative w-16 h-16">
							<Image
								fill
								src={`${skill.src}`}
								alt={skill.src}
								className="object-contain"
							/>
						</div>
						<h4 className="text-white text-sm md:text-lg font-semibold mb-2">
							{skill.title}
						</h4>
					</div>
				))}
			</motion.div>
		</section>
	);
}
