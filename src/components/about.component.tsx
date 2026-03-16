"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

const WORDS = `Helping brands stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.`
	.trim()
	.split(" ");

const skills = [
	"React", "Next.js", "TypeScript", "Node.js",
	"React Native", "Tailwind CSS", "PostgreSQL",
	"MongoDB", "Figma", "UI/UX Design",
];

// ─── Word-by-word scroll reveal ────────────────────────────────────────────
function RevealWord({
	word,
	index,
	total,
	progress,
}: {
	word: string;
	index: number;
	total: number;
	progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
	const start = index / total;
	const end = (index + 1) / total;

	const opacity = useTransform(progress, [start, end], [0.1, 1]);
	const y = useTransform(progress, [start, end], [12, 0]);

	return (
		<motion.span
			style={{ opacity, y }}
			className="inline-block mr-[0.3em]"
		>
			{word}
		</motion.span>
	);
}

export default function AboutMe() {
	const sectionRef = useRef<HTMLElement>(null);
	const textRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress: sectionProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});

	const { scrollYProgress: textProgress } = useScroll({
		target: textRef,
		offset: ["start 0.8", "end 0.3"],
	});

	const blobX = useTransform(sectionProgress, [0, 1], [-60, 60]);
	const titleY = useTransform(sectionProgress, [0, 1], [40, -40]);

	return (
		<section
			id="about"
			ref={sectionRef}
			className="relative bg-[#fafafa] py-28 md:py-44 overflow-hidden"
		>
			{/* ── Left vertical exclusion stripe (echoes the hero) ── */}
			<div
				className="absolute left-6 top-0 w-[4px] h-full pointer-events-none"
				style={{ backgroundColor: "#ff442b", mixBlendMode: "multiply", opacity: 0.4 }}
				aria-hidden
			/>

			{/* ── Soft red blob ─────────────────────────────── */}
			<motion.div
				style={{
					x: blobX,
					background: "radial-gradient(circle, #ff442b 0%, transparent 70%)",
				}}
				className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.07]"
				aria-hidden
			/>

			<div className="max-w-[1440px] mx-auto px-8 md:px-20">

				{/* ── Section label ──────────────────────────── */}
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, ease: EASE }}
					className="flex items-center gap-3 mb-10"
				>
					<div className="h-px w-8 bg-[#ff442b]" />
					<span
						className="text-[#ff442b] text-xs tracking-[0.25em] uppercase"
						style={{ fontFamily: "var(--font-dm-mono), monospace" }}
					>
						About Me
					</span>
				</motion.div>

				{/* ── Big heading ────────────────────────────── */}
				<div className="overflow-hidden mb-16 md:mb-24">
					<motion.h2
						style={{ y: titleY, fontFamily: "var(--font-inter-tight), sans-serif" }}
						className="text-[clamp(3rem,7vw,7rem)] font-black tracking-[-0.04em] text-[#121111] uppercase leading-[0.88]"
					>
						I design &amp; build<br />
						<span className="text-[#ff442b]">digital</span> things.
					</motion.h2>
				</div>

				{/* ── Word-reveal phrase ─────────────────────── */}
				<div ref={textRef} className="mb-20 md:mb-28">
					<p
						className="text-[clamp(1.25rem,2.5vw,2rem)] font-light text-[#121111] leading-[1.6] tracking-tight max-w-4xl"
						style={{ fontFamily: "var(--font-inter), sans-serif" }}
					>
						{WORDS.map((word, i) => (
							<RevealWord
								key={i}
								word={word}
								index={i}
								total={WORDS.length}
								progress={textProgress}
							/>
						))}
					</p>
				</div>

				{/* ── Two-column lower area ──────────────────── */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

					{/* Bio */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, ease: EASE }}
						className="flex flex-col gap-5"
					>
						<p
							className="text-base font-light text-[#4f4a4a] leading-[1.8]"
							style={{ fontFamily: "var(--font-inter), sans-serif" }}
						>
							I&apos;m a passionate Web Application Developer with a keen eye for
							UI/UX design, specializing in transforming concepts into interactive,
							user-friendly apps that perform as well as they look.
						</p>
						<p
							className="text-base font-light text-[#4f4a4a] leading-[1.8]"
							style={{ fontFamily: "var(--font-inter), sans-serif" }}
						>
							Beyond the frontend, I have a solid understanding of backend
							development with Node.js — comfortable debugging APIs, optimizing
							full-stack workflows, and owning a feature end-to-end.
						</p>
						<a
							href="#contact"
							className="mt-2 inline-flex items-center gap-2 text-sm text-[#121111] font-medium border-b border-[#ff442b] pb-0.5 w-fit hover:text-[#ff442b] transition-colors duration-200"
							style={{ fontFamily: "var(--font-dm-mono), monospace" }}
						>
							<span className="tracking-wider text-xs uppercase">Get in touch</span>
							<span>↗</span>
						</a>
					</motion.div>

					{/* Skills + stats */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, ease: EASE, delay: 0.12 }}
						className="flex flex-col gap-8"
					>
						<div>
							<p
								className="text-[#c4bfbf] text-[10px] tracking-[0.3em] uppercase mb-4"
								style={{ fontFamily: "var(--font-dm-mono), monospace" }}
							>
								Tech Stack
							</p>
							<div className="flex flex-wrap gap-2">
								{skills.map((s, i) => (
									<motion.span
										key={s}
										initial={{ opacity: 0, scale: 0.85 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true }}
										transition={{ delay: i * 0.04, duration: 0.3, ease: EASE }}
										className="text-xs px-3 py-1.5 border border-[#c4bfbf] text-[#4f4a4a] rounded-full tracking-wide cursor-default hover:border-[#ff442b] hover:text-[#ff442b] transition-colors duration-200"
										style={{ fontFamily: "var(--font-dm-mono), monospace" }}
									>
										{s}
									</motion.span>
								))}
							</div>
						</div>

						<div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#ebeaea]">
							{[
								{ v: "3+", l: "Years" },
								{ v: "20+", l: "Projects" },
								{ v: "100%", l: "Passion" },
							].map(({ v, l }) => (
								<div key={l}>
									<p
										className="text-4xl font-black text-[#121111] tracking-[-0.04em]"
										style={{ fontFamily: "var(--font-inter-tight), sans-serif" }}
									>
										{v}
									</p>
									<p
										className="text-[#c4bfbf] text-[10px] tracking-[0.25em] uppercase mt-1"
										style={{ fontFamily: "var(--font-dm-mono), monospace" }}
									>
										{l}
									</p>
								</div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
