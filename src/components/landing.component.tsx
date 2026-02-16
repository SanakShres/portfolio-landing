import React from "react";
import { motion, Variants } from "framer-motion";

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
		></motion.section>
	);
}
