import React from "react";
import { motion, Variants } from "framer-motion";

// ui components
import RippleGrid from "@/components/ui/RippleGrid";
import PixelSnow from "@/components/ui/PixelSnow";

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
			className="relative flex h-dvh overflow-hidden bg-black"
		>
			<div className="absolute inset-0">
				<PixelSnow
					color="#ffffff"
					flakeSize={0.01}
					minFlakeSize={1.25}
					pixelResolution={300}
					speed={1.25}
					density={0.1}
					direction={125}
					brightness={0.5}
					depthFade={4}
					farPlane={20}
					gamma={0.4545}
					variant="square"
				/>
			</div>
			<div className="absolute inset-0 flex items-center justify-center">
				<div className="w-1/2 h-1/2">
					<RippleGrid
						enableRainbow={false}
						gridColor="#ffffff"
						rippleIntensity={0.05}
						gridSize={10}
						gridThickness={15}
						mouseInteraction={true}
						mouseInteractionRadius={1.2}
						opacity={0.4}
					/>
				</div>
			</div>
			<div className="absolute inset-0 flex flex-col items-center justify-center text-center">
				<h1 className="text-8xl max-[420px]:text-4xl text-white font-light font-glitch">
					Hi, I&apos;m Sanak
				</h1>
				<p className="text-2xl max-[420px]:text-lg text-white mt-4">
					A passionate Frontend Developer
				</p>
				<div className="mt-6"></div>
			</div>
		</motion.section>
	);
}
