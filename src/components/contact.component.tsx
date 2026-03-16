"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

const socials = [
	{ label: "GitHub", href: "#" },
	{ label: "LinkedIn", href: "#" },
	{ label: "Dribbble", href: "#" },
	{ label: "Twitter", href: "#" },
];

export default function Contact() {
	const sectionRef = useRef<HTMLElement>(null);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end end"],
	});

	// Section slides up from below as it enters the viewport
	const y = useTransform(scrollYProgress, [0, 0.6], [100, 0]);
	const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

	// Parallax on the big heading
	const { scrollYProgress: innerProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});
	const headingY = useTransform(innerProgress, [0, 1], [60, -60]);

	// Watermark scrolls opposite direction
	const watermarkX = useTransform(innerProgress, [0, 1], [80, -80]);

	return (
		<motion.section
			id="contact"
			ref={sectionRef}
			style={{ y, opacity }}
			className="relative bg-[#121111] min-h-screen flex flex-col overflow-hidden"
		>
			{/* ── Red left stripe (echoes hero) ─────────────── */}
			<div
				className="absolute left-6 top-0 w-[4px] h-full pointer-events-none opacity-30"
				style={{ backgroundColor: "#ff442b" }}
				aria-hidden
			/>

			{/* ── Red glow bottom-left ───────────────────────── */}
			<div
				className="absolute bottom-0 left-0 w-125 h-125 rounded-full pointer-events-none opacity-[0.08]"
				style={{
					background: "radial-gradient(circle, #ff442b 0%, transparent 70%)",
				}}
				aria-hidden
			/>

			<div className="relative z-10 max-w-360 mx-auto px-8 md:px-20 w-full flex-1 flex flex-col pt-24 md:pt-36 pb-12">

				{/* ── Section label ──────────────────────────── */}
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, ease: EASE }}
					className="flex items-center gap-3 mb-8"
				>
					<div className="h-px w-8 bg-[#ff442b]" />
					<span
						className="text-[#ff442b] text-xs tracking-[0.25em] uppercase"
						style={{ fontFamily: "var(--font-dm-mono), monospace" }}
					>
						Get in Touch
					</span>
				</motion.div>

				{/* ── Main heading ───────────────────────────── */}
				<div className="flex-1 flex flex-col justify-center">
					<div className="border-b border-[#2a2929] pb-14 md:pb-20 relative">
						<motion.h2
							style={{ y: headingY, fontFamily: "var(--font-inter-tight), sans-serif" }}
							className="text-[clamp(3.5rem,10vw,10rem)] font-black tracking-[-0.04em] text-[#fafafa] uppercase leading-[0.88]"
						>
							Let&apos;s<br />
							<span className="text-[#ff442b]">Connect</span>
						</motion.h2>

						{/* Floating CTA circle — positioned bottom-right of heading */}
						<motion.a
							href="mailto:hello@sanak.dev"
							initial={{ opacity: 0, scale: 0 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
							whileHover={{ scale: 1.08 }}
							whileTap={{ scale: 0.95 }}
							className="absolute bottom-8 right-0 md:right-8 w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#ff442b] flex items-center justify-center text-white text-xs tracking-widest uppercase text-center cursor-pointer"
							style={{ fontFamily: "var(--font-dm-mono), monospace" }}
						>
							Get<br />in touch
						</motion.a>
					</div>

					{/* ── CTAs ───────────────────────────────── */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
						className="flex flex-wrap gap-4 mt-12"
					>
						<a
							href="mailto:hello@sanak.dev"
							className="inline-flex items-center gap-2 px-6 py-3 border border-[#2a2929] text-[#c4bfbf] text-sm rounded-full hover:border-[#ff442b] hover:text-[#ff442b] transition-colors duration-200"
							style={{ fontFamily: "var(--font-dm-mono), monospace" }}
						>
							hello@sanak.dev
						</a>
						<a
							href="tel:+1234567890"
							className="inline-flex items-center gap-2 px-6 py-3 border border-[#2a2929] text-[#c4bfbf] text-sm rounded-full hover:border-[#ff442b] hover:text-[#ff442b] transition-colors duration-200"
							style={{ fontFamily: "var(--font-dm-mono), monospace" }}
						>
							+1 (234) 567-890
						</a>
					</motion.div>

					{/* ── Footer meta row ────────────────────── */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mt-16 md:mt-24"
					>
						<div className="flex gap-8">
							{[
								{ label: "Version", value: "2024 © Edition" },
								{ label: "Based in", value: "Available Worldwide" },
							].map(({ label, value }) => (
								<div key={label}>
									<p
										className="text-[#4f4a4a] text-[10px] tracking-[0.28em] uppercase mb-1.5"
										style={{ fontFamily: "var(--font-dm-mono), monospace" }}
									>
										{label}
									</p>
									<p
										className="text-[#c4bfbf] text-sm"
										style={{ fontFamily: "var(--font-dm-mono), monospace" }}
									>
										{value}
									</p>
								</div>
							))}
						</div>

						<div>
							<p
								className="text-[#4f4a4a] text-[10px] tracking-[0.28em] uppercase mb-2"
								style={{ fontFamily: "var(--font-dm-mono), monospace" }}
							>
								Socials
							</p>
							<div className="flex gap-5">
								{socials.map(({ label, href }) => (
									<a
										key={label}
										href={href}
										className="text-[#c4bfbf] text-sm relative group hover:text-[#ff442b] transition-colors duration-200"
										style={{ fontFamily: "var(--font-inter), sans-serif" }}
									>
										{label}
										<span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#ff442b] transition-all duration-300 group-hover:w-full" />
									</a>
								))}
							</div>
						</div>
					</motion.div>
				</div>

				{/* ── Watermark name ─────────────────────────── */}
				<div className="overflow-hidden -mx-8 md:-mx-20 mt-8">
					<motion.p
						style={{ x: watermarkX, fontFamily: "var(--font-inter-tight), sans-serif" }}
						className="whitespace-nowrap text-[clamp(5rem,16vw,18rem)] font-black tracking-[-0.05em] text-[#1a1919] uppercase leading-none select-none pointer-events-none"
					>
						SANAK
					</motion.p>
				</div>
			</div>
		</motion.section>
	);
}
