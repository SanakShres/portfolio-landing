import { useRef } from "react";

// packages
import { motion, useScroll, useTransform } from "framer-motion";

// components
import RoundedButton from "@/components/common/rounded-button.component";
import Magnetic from "@/components/common/magnetic.component";

export default function Contact() {
	const container = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end end"],
	});

	const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
	const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
	const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

	return (
		<motion.div
			ref={container}
			style={{ y }}
			className="relative flex flex-col items-center justify-center w-full min-h-screen bg-[#141516] text-white"
		>
			<div className="pt-52 w-full max-w-350">
				{/* Title Section */}
				<div className="relative border-b border-gray-500 pb-24 mx-16 md:mx-32">
					<span className="flex items-center mb-6">
						<h2 className="ml-1 text-4xl md:text-6xl font-light">
							Let&apos;s
						</h2>
					</span>

					<h2 className="text-6xl md:text-8xl font-light m-0">
						connect
					</h2>

					<motion.div
						style={{ x }}
						className="absolute top-[calc(100%-75px)] left-[calc(100%-400px)]"
					>
						<RoundedButton
							backgroundColor="#334BD3"
							className="w-44 h-44 bg-[#0b1944] flex items-center justify-center rounded-full relative cursor-pointer"
						>
							<p className="m-0 text-base font-light z-10 relative">
								Get in touch
							</p>
						</RoundedButton>
					</motion.div>

					<motion.svg
						style={{ rotate, scale: 2 }}
						width="9"
						height="9"
						viewBox="0 0 9 9"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="absolute top-[30%] left-full"
					>
						<path
							d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
							fill="white"
						/>
					</motion.svg>
				</div>

				{/* Contact Buttons */}
				<div className="flex flex-wrap gap-5 mt-32 mx-16 md:mx-32">
					<RoundedButton>
						<p className="m-0">info@dennissnellenberg.com</p>
					</RoundedButton>
					<RoundedButton>
						<p className="m-0">+31 6 27 84 74 30</p>
					</RoundedButton>
				</div>

				{/* Info Section */}
				<div className="flex justify-between mt-52 p-5 mx-16 md:mx-32">
					<div className="flex gap-2.5 items-end">
						<span className="flex flex-col gap-4">
							<h3 className="text-gray-400 font-light text-base cursor-default m-0">
								Version
							</h3>
							<p className="m-0 relative cursor-pointer hover:after:w-full after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:h-px after:bg-white after:w-0 after:transition-all after:duration-200">
								2022 © Edition
							</p>
						</span>
						<span className="flex flex-col gap-4">
							<h3 className="text-gray-400 font-light text-base cursor-default m-0">
								Time
							</h3>
							<p className="m-0 relative cursor-pointer hover:after:w-full after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:h-px after:bg-white after:w-0 after:transition-all after:duration-200">
								11:49 PM GMT+2
							</p>
						</span>
					</div>

					<div className="flex gap-4 items-end">
						<span className="flex flex-col gap-4">
							<h3 className="text-gray-400 font-light text-base cursor-default m-0">
								Socials
							</h3>
							<Magnetic>
								<p className="m-0 cursor-pointer hover:underline">
									Awwwards
								</p>
							</Magnetic>
						</span>
						<Magnetic>
							<p className="m-0 cursor-pointer hover:underline">
								Instagram
							</p>
						</Magnetic>
						<Magnetic>
							<p className="m-0 cursor-pointer hover:underline">
								Dribbble
							</p>
						</Magnetic>
						<Magnetic>
							<p className="m-0 cursor-pointer hover:underline">
								LinkedIn
							</p>
						</Magnetic>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
