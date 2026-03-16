"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// ─── Entrance variants ────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

const fadeUp = (delay = 0) => ({
	initial: { opacity: 0, y: 40 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.9, ease: EASE, delay },
});

export default function HeroSection() {
	const sectionRef = useRef<HTMLElement>(null);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end start"],
	});

	// Parallax transforms
	const nameY = useTransform(scrollYProgress, [0, 1], [0, -160]);
	const badgeY = useTransform(scrollYProgress, [0, 1], [0, -80]);
	const marqueeX = useTransform(scrollYProgress, [0, 1], [0, -600]);
	const stripeY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
	const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

	return (
		<section
			id="home"
			ref={sectionRef}
			className="relative h-screen bg-[#fafafa] overflow-hidden"
		>
			{/* ── Left vertical exclusion-blend stripe ───────────────── */}
			{/* This creates the signature inverted-color effect over text */}
			<motion.div
				style={{ y: stripeY }}
				className="absolute left-16 top-0 w-[75px] h-[120%] -mt-[10%] pointer-events-none z-20"
				initial={{ scaleY: 0, originY: 0 }}
				animate={{ scaleY: 1 }}
				transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
				aria-hidden
			>
				<div
					className="w-full h-full bg-[#ff442b]"
					style={{ mixBlendMode: "exclusion" }}
				/>
			</motion.div>

			{/* ── 4200px-wide parallax watermark strip ────────────────── */}
			<motion.div
				style={{ x: marqueeX, opacity: contentOpacity }}
				className="absolute top-1/2 -translate-y-1/2 left-0 pointer-events-none z-0 select-none"
				aria-hidden
			>
				<p
					className="whitespace-nowrap text-[clamp(6rem,14vw,14rem)] font-black tracking-[-0.04em] uppercase text-[#ebeaea] leading-none"
					style={{ fontFamily: "var(--font-inter-tight), sans-serif" }}
				>
					DESIGNER&nbsp;·&nbsp;DEVELOPER&nbsp;·&nbsp;CREATIVE&nbsp;·&nbsp;DESIGNER&nbsp;·&nbsp;DEVELOPER&nbsp;·&nbsp;CREATIVE&nbsp;·
				</p>
			</motion.div>

			{/* ── Top row ─────────────────────────────────────────────── */}
			<motion.div
				style={{ y: badgeY, opacity: contentOpacity }}
				className="relative z-30 flex items-center justify-between px-8 md:px-32 pt-[110px]"
			>
				{/* Role labels */}
				<motion.div {...fadeUp(0.4)} className="flex items-center gap-3">
					<span
						className="text-[#4f4a4a] text-xs tracking-[0.22em] uppercase"
						style={{ fontFamily: "var(--font-dm-mono), monospace" }}
					>
						Web & App Designer
					</span>
					<span className="text-[#ff442b] text-xs">/</span>
					<span
						className="text-[#4f4a4a] text-xs tracking-[0.22em] uppercase"
						style={{ fontFamily: "var(--font-dm-mono), monospace" }}
					>
						Developer
					</span>
				</motion.div>

				{/* Available badge */}
				<motion.div
					{...fadeUp(0.55)}
					className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#c4bfbf] bg-white/80 backdrop-blur-sm"
				>
					<span className="relative flex h-2 w-2">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff442b] opacity-60" />
						<span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff442b]" />
					</span>
					<span
						className="text-[#4f4a4a] text-xs tracking-wider"
						style={{ fontFamily: "var(--font-dm-mono), monospace" }}
					>
						Available for work
					</span>
				</motion.div>
			</motion.div>

			{/* ── Thin horizontal rule ────────────────────────────────── */}
			<motion.div
				initial={{ scaleX: 0 }}
				animate={{ scaleX: 1 }}
				transition={{ duration: 1, delay: 0.5, ease: EASE }}
				style={{ originX: 0 }}
				className="relative z-30 mx-8 md:mx-32 mt-6 h-px bg-[#c4bfbf]"
			/>

			{/* ── Middle: bio text ────────────────────────────────────── */}
			<motion.div
				{...fadeUp(0.65)}
				style={{ opacity: contentOpacity }}
				className="relative z-30 flex justify-end px-8 md:px-32 mt-8"
			>
				<p
					className="max-w-[320px] text-sm font-light text-[#4f4a4a] leading-[1.7]"
					style={{ fontFamily: "var(--font-inter), sans-serif" }}
				>
					I merge strategy, design, and development to create products that are
					both visually compelling and technically robust.
				</p>
			</motion.div>

			{/* ── Bottom: name + sub-line ─────────────────────────────── */}
			<motion.div
				style={{ y: nameY, opacity: contentOpacity }}
				className="absolute bottom-0 left-0 right-0 z-30 px-6 md:px-28 pb-10 md:pb-14"
			>
				{/* Decorative red rule + label */}
				<motion.div
					{...fadeUp(0.7)}
					className="flex items-center gap-3 mb-3"
				>
					<div className="h-px w-10 bg-[#ff442b]" />
					<span
						className="text-[#ff442b] text-[10px] tracking-[0.3em] uppercase"
						style={{ fontFamily: "var(--font-dm-mono), monospace" }}
					>
						Portfolio 2024
					</span>
				</motion.div>

				{/* Big name — character-masked slide-up */}
				<div className="overflow-hidden mb-3">
					<motion.h1
						initial={{ y: "102%" }}
						animate={{ y: 0 }}
						transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
						className="text-[clamp(5rem,14vw,15rem)] font-black leading-[0.85] tracking-[-0.04em] text-[#121111] uppercase"
						style={{ fontFamily: "var(--font-inter-tight), sans-serif" }}
					>
						SANAK
					</motion.h1>
				</div>

				{/* Bottom rule + tagline */}
				<motion.div
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 0.9, delay: 0.8, ease: EASE }}
					style={{ originX: 0 }}
					className="h-px bg-[#c4bfbf] mb-5"
				/>

				<div className="flex items-end justify-between">
					<motion.p
						{...fadeUp(1.0)}
						className="text-sm md:text-base font-light text-[#4f4a4a] tracking-wide"
						style={{ fontFamily: "var(--font-inter), sans-serif" }}
					>
						I Design.&nbsp;&nbsp;I Code.&nbsp;&nbsp;
						<span className="text-[#ff442b]">I Create Experiences.</span>
					</motion.p>

					{/* Scroll cue */}
					<motion.div
						{...fadeUp(1.1)}
						className="hidden md:flex items-center gap-2"
					>
						<div className="flex flex-col gap-1 items-center">
							<motion.div
								animate={{ y: [0, 6, 0] }}
								transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
								className="w-px h-5 bg-[#ff442b]"
							/>
						</div>
						<span
							className="text-[#c4bfbf] text-[10px] tracking-[0.25em] uppercase"
							style={{ fontFamily: "var(--font-dm-mono), monospace" }}
						>
							Scroll
						</span>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
}
