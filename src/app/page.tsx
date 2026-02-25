"use client";
import { useEffect, useState } from "react";

// packages
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";

// components
import Preloader from "@/components/preloader.component";
import HeroSection from "@/components/landing/hero-section";

export default function Home() {
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		(async () => {
			const lenis = new Lenis();

			function raf(time: number) {
				lenis.raf(time);
				requestAnimationFrame(raf);
			}

			requestAnimationFrame(raf);

			setIsLoading(true);
			setTimeout(() => {
				setIsLoading(false);
				document.body.style.cursor = "default";
				window.scrollTo(0, 0);
			}, 2000);
		})();
	}, []);
	return (
		<main className="relative">
			<AnimatePresence mode="wait">
				{isLoading && <Preloader />}
			</AnimatePresence>
			<HeroSection />
		</main>
	);
}
