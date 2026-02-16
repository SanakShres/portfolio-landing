"use client";
import { useEffect, useState } from "react";

// packages
import LocomotiveScroll from "locomotive-scroll";
import { AnimatePresence } from "framer-motion";

// next js components
import Image from "next/image";

// components
import Preloader from "@/components/preloader.component";
import PortfolioLanding from "@/components/landing.component";
import AboutMe from "@/components/about.component";

export default function Home() {
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		(async () => {
			const locomotiveScroll = new LocomotiveScroll();

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
			<PortfolioLanding />
			<AboutMe />
		</main>
	);
}
