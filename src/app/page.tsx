"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";

import Preloader from "@/components/preloader.component";
import HeroSection from "@/components/landing/hero-section";
import Projects from "@/components/projects.component";
import SlidingContent from "@/components/sliding-content.component";
import AboutMe from "@/components/about.component";
import Contact from "@/components/contact.component";

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Smooth scroll engine
		const lenis = new Lenis();
		let rafId: number;

		function raf(time: number) {
			lenis.raf(time);
			rafId = requestAnimationFrame(raf);
		}
		rafId = requestAnimationFrame(raf);

		// Preloader timer
		const timer = setTimeout(() => {
			setIsLoading(false);
			document.body.style.cursor = "default";
			window.scrollTo(0, 0);
		}, 2000);

		return () => {
			clearTimeout(timer);
			cancelAnimationFrame(rafId);
			lenis.destroy();
		};
	}, []);

	return (
		<>
			<AnimatePresence mode="wait">
				{isLoading && <Preloader key="preloader" />}
			</AnimatePresence>

			<motion.main
				initial={{ opacity: 0 }}
				animate={{ opacity: isLoading ? 0 : 1 }}
				transition={{ duration: 0.5 }}
			>
				{/* Light sections */}
				<HeroSection />

				{/* Dark — sticky scroll project panels */}
				<Projects />

				{/* Skills marquee (dark) */}
				<SlidingContent />

				{/* Light — about with word reveal */}
				<AboutMe />

				{/* Dark — contact / footer */}
				<Contact />
			</motion.main>
		</>
	);
}
