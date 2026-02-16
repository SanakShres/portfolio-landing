"use client";

import React, { JSX, useState } from "react";
import { motion, Variants } from "framer-motion";

export default function SidebarCurve(): JSX.Element {
	const [height] = useState<number>(() =>
		typeof window !== "undefined" ? window.innerHeight : 0,
	);

	if (!height) return <></>;

	const initialPath = `M100 0 L100 ${height} Q-100 ${height / 2} 100 0`;

	const targetPath = `M100 0 L100 ${height} Q100 ${height / 2} 100 0`;

	const curveVariant: Variants = {
		initial: {
			d: initialPath,
		},
		enter: {
			d: targetPath,
			transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
		},
		exit: {
			d: initialPath,
			transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
		},
	};

	return (
		<svg
			className="
        absolute top-0
       -left-24.75
        w-25
        h-full
        fill-[#11232d]
        pointer-events-none
      "
			viewBox="0 0 100 100"
			preserveAspectRatio="none"
		>
			<motion.path
				fill="#11232d"
				variants={curveVariant}
				initial="initial"
				animate="enter"
				exit="exit"
			/>
		</svg>
	);
}
