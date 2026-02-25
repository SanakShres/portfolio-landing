import React from "react";

// ui components
import LightRays from "@/components/ui/LightRays";
import TextType from "@/components/ui/TextType";

export default function HeroSection() {
	return (
		<section className="h-screen py-36">
			<div className="absolute inset-0">
				<LightRays
					raysOrigin="top-center"
					raysColor="#ffffff"
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
					<div className="flex-1 flex justify-between gap-8 md:gap-12">
						<div className="w-1/3">
							<TextType
								text={[
									"Holistic and user centric product design and development",
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

						<h4 className="text-md md:text-lg font-bold text-foreground max-w-1/4">
							Holistic and user centric product design and
							development
						</h4>
					</div>
					<div>
						<h1 className="font-rubik-dirt text-4xl md:text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-linear-to-r from-foreground to-primary">
							Welcome
						</h1>
					</div>
				</div>
			</div>
		</section>
	);
}
