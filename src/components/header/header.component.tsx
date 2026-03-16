"use client";

import { JSX, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Magnetic from "@/components/common/magnetic.component";

const navLinks = ["Work", "About", "Contact"];

export default function Header(): JSX.Element {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<>
			{/* ── Main Header ── */}
			<header
				className={`
					fixed top-0 left-0 right-0 z-50
					flex items-center justify-between
					px-8 md:px-12
					h-[92px]
					transition-colors duration-300 ease-[cubic-bezier(0.76,0,0.24,1)]
					${scrolled ? "bg-[#121111]/90 backdrop-blur-sm border-b border-white/5" : "bg-transparent"}
				`}
			>
				{/* Logo */}
				<a
					href="/"
					className="flex items-center gap-1.5 group cursor-pointer select-none"
					style={{ fontFamily: "var(--font-dm-mono), monospace" }}
				>
					<span className="text-[#ff442b] font-medium text-sm tracking-wider uppercase transition-transform duration-500 group-hover:rotate-360 inline-block">
						©
					</span>
					<span className="text-[#fafafa] text-sm font-light tracking-widest uppercase overflow-hidden">
						<span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
							Code by&nbsp;
						</span>
						<span className="text-[#ff442b] font-medium transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
							SANAK
						</span>
					</span>
				</a>

				{/* Desktop Nav */}
				<nav className="hidden md:flex items-center gap-1">
					{navLinks.map((item) => (
						<Magnetic key={item}>
							<a
								href={`#${item.toLowerCase()}`}
								className="relative px-5 py-2 text-sm font-light text-[#c4bfbf] tracking-wide cursor-pointer group transition-colors duration-200 hover:text-[#fafafa]"
							>
								{item}
								<span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-[#ff442b] w-0 transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:w-4/5" />
							</a>
						</Magnetic>
					))}

					<a
						href="#contact"
						className="ml-4 px-5 py-2 text-sm font-light text-[#fafafa] border border-[#ff442b] rounded-full tracking-wide cursor-pointer transition-all duration-300 hover:bg-[#ff442b] hover:text-white"
					>
						Hire me
					</a>
				</nav>

				{/* Mobile Hamburger */}
				<button
					className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2"
					onClick={() => setMenuOpen((prev: boolean) => !prev)}
					aria-label="Toggle menu"
				>
					<span
						className={`block h-px w-6 bg-[#fafafa] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
					/>
					<span
						className={`block h-px w-6 bg-[#fafafa] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
					/>
					<span
						className={`block h-px w-6 bg-[#fafafa] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
					/>
				</button>
			</header>

			{/* ── Mobile Menu ── */}
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
						className="fixed inset-0 z-40 bg-[#121111] flex flex-col items-center justify-center gap-10 md:hidden"
					>
						{navLinks.map((item, i) => (
							<motion.a
								key={item}
								href={`#${item.toLowerCase()}`}
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: i * 0.08 }}
								className="text-5xl font-light text-[#fafafa] tracking-tight hover:text-[#ff442b] transition-colors duration-200"
								onClick={() => setMenuOpen(false)}
							>
								{item}
							</motion.a>
						))}
						<motion.a
							href="#contact"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.3 }}
							className="mt-4 px-8 py-3 border border-[#ff442b] text-[#fafafa] text-lg rounded-full hover:bg-[#ff442b] transition-colors duration-200"
							onClick={() => setMenuOpen(false)}
						>
							Hire me
						</motion.a>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
