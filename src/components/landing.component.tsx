import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const slideUp: Variants = {
	initial: {
		y: 300,
	},
	enter: {
		y: 0,
		transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 2.5 },
	},
};

export default function PortfolioLanding() {
	return (
		<motion.section
			variants={slideUp}
			initial="initial"
			animate="enter"
			className="relative flex h-dvh overflow-hidden"
		>
			<Image
				src="/images/landing-background.jpg"
				fill={true}
				alt="background"
			/>
			<div className="absolute inset-0 flex flex-col items-center justify-center text-center">
				<h1 className="text-6xl max-[420px]:text-4xl text-white font-light">
					Hi, I am Dennis
				</h1>
				<p className="text-2xl max-[420px]:text-lg text-white mt-4">
					A passionate Frontend Developer
				</p>
				<p className="text-lg max-[420px]:text-sm text-white mt-2">
					Welcome to my portfolio
				</p>
				<div className="mt-6"></div>
			</div>
		</motion.section>
	);
}
