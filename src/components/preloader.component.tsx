"use client";

import { JSX, useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

interface Dimension {
	width: number;
	height: number;
}

const opacity: Variants = {
	initial: {
		opacity: 0,
	},
	enter: {
		opacity: 0.75,
		transition: { duration: 1, delay: 0.2 },
	},
};

const slideUp: Variants = {
	initial: {
		top: 0,
	},
	exit: {
		top: "-100vh",
		transition: {
			duration: 0.8,
			ease: [0.76, 0, 0.24, 1],
			delay: 0.2,
		},
	},
};

const words: string[] = [
	"Hello",
	"Bonjour",
	"Ciao",
	"Olà",
	"やあ",
	"Hallå",
	"Guten tag",
	"Hallo",
];

export default function Preloader(): JSX.Element {
	const [index, setIndex] = useState<number>(0);

	const [dimension] = useState<Dimension>(() => ({
		width: typeof window !== "undefined" ? window.innerWidth : 0,
		height: typeof window !== "undefined" ? window.innerHeight : 0,
	}));

	useEffect(() => {
		if (index === words.length - 1) return;

		const timeout = setTimeout(
			() => {
				setIndex((prev) => prev + 1);
			},
			index === 0 ? 1000 : 150,
		);

		return () => clearTimeout(timeout);
	}, [index]);

	const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${
		dimension.width / 2
	} ${dimension.height + 300} 0 ${dimension.height} L0 0`;

	const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${
		dimension.width / 2
	} ${dimension.height} 0 ${dimension.height} L0 0`;

	const curve: Variants = {
		initial: {
			d: initialPath,
			transition: {
				duration: 0.7,
				ease: [0.76, 0, 0.24, 1],
			},
		},
		exit: {
			d: targetPath,
			transition: {
				duration: 0.7,
				ease: [0.76, 0, 0.24, 1],
				delay: 0.3,
			},
		},
	};

	return (
		<motion.div
			variants={slideUp}
			initial="initial"
			exit="exit"
			className="
        fixed inset-0 z-99
        flex items-center justify-center
        bg-[#141516]
        h-screen w-screen
      "
		>
			{dimension.width > 0 && (
				<>
					<motion.p
						variants={opacity}
						initial="initial"
						animate="enter"
						className="
              absolute z-10
              flex items-center
              text-white text-[42px]
            "
					>
						<span
							className="
                mr-2.5
                h-2.5 w-2.5
                rounded-full
                bg-white
                block
              "
						/>
						{words[index]}
					</motion.p>

					<svg
						className="
              absolute top-0
              w-full
              h-[calc(100%+300px)]
            "
					>
						<motion.path
							variants={curve}
							initial="initial"
							exit="exit"
							className="fill-[#141516]"
						/>
					</svg>
				</>
			)}
		</motion.div>
	);
}
