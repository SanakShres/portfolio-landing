"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

export const projects = [
	{
		number: "01",
		title: "E-Commerce Platform",
		category: "Web Application",
		year: "2024",
		tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
		description:
			"A full-stack e-commerce solution with real-time inventory management, Stripe payments, and a custom admin dashboard. Built with performance and scalability in mind.",
		accent: "#ff442b",
	},
	{
		number: "02",
		title: "Design System",
		category: "UI / UX · Frontend",
		year: "2024",
		tech: ["React", "Storybook", "Tailwind CSS", "Figma"],
		description:
			"A comprehensive component library used across multiple products — over 60 components, full dark-mode support, and live Storybook documentation.",
		accent: "#c4bfbf",
	},
	{
		number: "03",
		title: "Mobile Banking App",
		category: "React Native",
		year: "2023",
		tech: ["React Native", "Node.js", "Firebase", "Expo"],
		description:
			"Cross-platform mobile banking interface with biometric auth, real-time transaction feeds, and animated onboarding flows.",
		accent: "#4f4a4a",
	},
	{
		number: "04",
		title: "Analytics Dashboard",
		category: "Data Visualization",
		year: "2023",
		tech: ["React", "D3.js", "Python", "MongoDB"],
		description:
			"Interactive dashboard turning raw event data into actionable charts and KPI cards, with live WebSocket updates.",
		accent: "#ebeaea",
	},
];

// ─── Single sticky project panel ──────────────────────────────────────────
function ProjectPanel({
	project,
	index,
	total,
	progress,
}: {
	project: (typeof projects)[number];
	index: number;
	total: number;
	progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
	// Each panel owns a slice [i/total … (i+1)/total] of the section scroll
	const start = index / total;
	const end = (index + 1) / total;

	// The panel slides up from 100% → 0% as its slice of scroll is consumed
	const y = useTransform(progress, [start, end], ["100%", "0%"]);
	// Content fades out when the NEXT card starts to cover this one
	const opacity = useTransform(
		progress,
		[start, start + 0.05, end - 0.05, end],
		[0, 1, 1, 1]
	);
	const scale = useTransform(
		progress,
		[start, start + 0.05, end],
		[0.96, 1, index === total - 1 ? 1 : 0.94]
	);

	const isLight = project.accent === "#c4bfbf" || project.accent === "#ebeaea";

	return (
		<motion.div
			style={{ y, opacity, scale }}
			className="sticky top-0 h-screen w-full flex flex-col justify-end overflow-hidden"
		>
			{/* Background */}
			<div
				className="absolute inset-0"
				style={{ backgroundColor: "#121111" }}
			/>

			{/* Accent color block — top-right corner decoration */}
			<motion.div
				initial={{ scaleX: 0 }}
				whileInView={{ scaleX: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
				style={{ originX: 1, backgroundColor: project.accent }}
				className="absolute top-0 right-0 h-1 w-1/3"
			/>

			{/* Grain texture */}
			<div
				className="absolute inset-0 pointer-events-none opacity-[0.025]"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
					backgroundSize: "200px",
				}}
			/>

			{/* Content */}
			<div className="relative z-10 px-8 md:px-20 pb-16 md:pb-20 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-20 items-end max-w-[1440px] mx-auto w-full">
				{/* Left col: number + meta */}
				<div className="flex flex-col gap-4">
					<span
						className="text-[#ff442b] text-xs tracking-[0.3em] uppercase"
						style={{ fontFamily: "var(--font-dm-mono), monospace" }}
					>
						{project.number} / {String(total).padStart(2, "0")}
					</span>

					<div className="h-px w-full bg-[#2a2929]" />

					<span
						className="text-[#4f4a4a] text-xs tracking-[0.2em] uppercase"
						style={{ fontFamily: "var(--font-dm-mono), monospace" }}
					>
						{project.category}
					</span>

					<span
						className="text-[#2a2929] text-xs"
						style={{ fontFamily: "var(--font-dm-mono), monospace" }}
					>
						{project.year}
					</span>

					{/* Tech pills */}
					<div className="flex flex-wrap gap-2 mt-2">
						{project.tech.map((t) => (
							<span
								key={t}
								className="text-[10px] px-2.5 py-1 border border-[#2a2929] text-[#4f4a4a] rounded-full"
								style={{ fontFamily: "var(--font-dm-mono), monospace" }}
							>
								{t}
							</span>
						))}
					</div>
				</div>

				{/* Right col: title + description + CTA */}
				<div className="flex flex-col gap-5">
					<h2
						className="text-[clamp(2.5rem,5vw,5rem)] font-black tracking-[-0.03em] text-[#fafafa] leading-[0.9] uppercase"
						style={{ fontFamily: "var(--font-inter-tight), sans-serif" }}
					>
						{project.title}
					</h2>

					<p
						className="text-sm font-light text-[#c4bfbf] leading-[1.75] max-w-md"
						style={{ fontFamily: "var(--font-inter), sans-serif" }}
					>
						{project.description}
					</p>

					<a
						href="#"
						className="inline-flex items-center gap-2 text-sm text-[#fafafa] hover:text-[#ff442b] transition-colors duration-200 group w-fit"
						style={{ fontFamily: "var(--font-dm-mono), monospace" }}
					>
						<span className="tracking-wider text-xs uppercase">View Project</span>
						<motion.span
							className="text-base"
							animate={{ x: 0 }}
							whileHover={{ x: 4 }}
						>
							↗
						</motion.span>
					</a>
				</div>
			</div>
		</motion.div>
	);
}

// ─── Projects section ──────────────────────────────────────────────────────
export default function Projects() {
	const sectionRef = useRef<HTMLElement>(null);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end end"],
	});

	// Parallax section-title strip
	const titleX = useTransform(scrollYProgress, [0, 1], [0, -200]);

	return (
		<section
			id="work"
			ref={sectionRef}
			// height = 100vh per panel + 100vh for the section header sticky area
			className="relative bg-[#121111]"
			style={{ height: `${(projects.length + 1) * 100}vh` }}
		>
			{/* ── Section header (sticky) ────────────────────── */}
			<div className="sticky top-0 h-screen flex flex-col justify-between overflow-hidden pointer-events-none">
				{/* Label */}
				<div className="flex items-center gap-3 px-8 md:px-20 pt-32">
					<div className="h-px w-8 bg-[#ff442b]" />
					<span
						className="text-[#ff442b] text-xs tracking-[0.25em] uppercase"
						style={{ fontFamily: "var(--font-dm-mono), monospace" }}
					>
						Featured Work
					</span>
				</div>

				{/* Marquee section title */}
				<motion.div
					style={{ x: titleX }}
					className="overflow-visible px-8 md:px-20 pb-20"
				>
					<h2
						className="whitespace-nowrap text-[clamp(4rem,9vw,10rem)] font-black tracking-[-0.04em] text-[#1a1919] uppercase leading-none select-none"
						style={{ fontFamily: "var(--font-inter-tight), sans-serif" }}
					>
						SELECTED PROJECTS
					</h2>
				</motion.div>
			</div>

			{/* ── Sticky project panels (stacked) ───────────── */}
			{/* These panels sit inside the scroll range and slide up sequentially */}
			<div className="absolute inset-0 top-[100vh]">
				{projects.map((project, i) => (
					<ProjectPanel
						key={project.number}
						project={project}
						index={i}
						total={projects.length}
						progress={scrollYProgress}
					/>
				))}
			</div>
		</section>
	);
}
