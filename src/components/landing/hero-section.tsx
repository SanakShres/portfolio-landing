import React from "react";

// animation
import { motion } from "motion/react";
import { useScroll, useTransform } from "framer-motion";

// ui components
import LightRays from "@/components/ui/LightRays";
import TextType from "@/components/ui/TextType";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import RoundedButton from "@/components/common/rounded-button.component";

export default function HeroSection() {
	const { scrollYProgress } = useScroll({
		offset: ["start start", "end start"], // remove this if your container is not fixed height
	});

	const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -300]);
	const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 300]);
	return (
		<section className="h-screen py-36">
			<div className="absolute inset-0">
				<LightRays
					raysOrigin="top-center"
					raysColor="#3b82f6"
					raysSpeed={1}
					lightSpread={0.5}
					rayLength={3}
					followMouse={true}
					mouseInfluence={0.1}
					noiseAmount={0}
					distortion={0}
					className="custom-rays"
					pulsating={false}
					fadeDistance={1}
					saturation={1}
				/>
			</div>
			<div className="h-full flex items-center">
				<div className="flex-1 h-2/3 flex flex-col gap-8 md:gap-12 justify-between max-w-350 mx-auto">
					<div className="h-0.5 w-1/3 self-end bg-foreground" />
					<div className="flex-1 flex justify-between gap-8 md:gap-12">
						<div className="w-1/3">
							<TextType
								text={[
									"Designing and Building Digital Experiences That Matter",
								]}
								typingSpeed={75}
								pauseDuration={1500}
								showCursor
								cursorCharacter="_"
								variableSpeed={{ min: 50, max: 150 }}
								deletingSpeed={50}
								cursorBlinkDuration={0.5}
								className="text-xl md:text-2xl font-medium text-foreground"
							/>
						</div>

						<div className="max-w-1/4 flex flex-col items-end gap-8">
							<TextGenerateEffect
								words={`Web & App Designer and Developer specializing in intuitive interfaces and scalable systems. 
								I merge strategy, design, and development to create products that are both visually compelling and technically robust.`}
								className="text-xs md:text-sm font-medium text-foreground"
							/>
							<motion.div
								style={{ y: translateFirst }} // Apply the translateY motion value here
							>
								<RoundedButton className="w-32 h-32 bg-primary flex items-center justify-center rounded-full relative cursor-pointer">
									<p className="m-0 text-base font-light z-1 relative">
										Get in touch
									</p>
								</RoundedButton>
							</motion.div>
						</div>
					</div>
					<motion.div
						style={{ y: translateSecond }} // Apply the translateY motion value here
					>
						<TextGenerateEffect
							words={"Hi, I'm SANAK 👋"}
							className="font-rubik-dirt text-4xl md:text-6xl lg:text-8xl font-bold"
							duration={1.5}
						/>
						<TextGenerateEffect
							words={"I Design. I Code. I Create Experiences."}
							className="text-lg md:text-xl font-medium text-foreground"
							duration={1.5}
						/>
					</motion.div>

					<div className="h-0.5 w-2/3 bg-foreground -ml-16" />
				</div>
			</div>
		</section>
	);
}
