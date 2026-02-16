"use client";

import { JSX, useLayoutEffect, useRef, useState } from "react";

// packages
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// components
import Sidebar from "@/components/header/sidebar/sidebar.component";
import RoundedButton from "@/components/common/rounded-button.component";
import Magnetic from "@/components/common/magnetic.component";

export default function Header(): JSX.Element {
	const headerRef = useRef<HTMLDivElement | null>(null);
	const buttonRef = useRef<HTMLDivElement | null>(null);
	const [isActive, setIsActive] = useState(false);

	// Scroll-triggered button animation
	useLayoutEffect(() => {
		if (!buttonRef.current) return;

		gsap.registerPlugin(ScrollTrigger);

		const btn = buttonRef.current;

		ScrollTrigger.create({
			trigger: document.documentElement,
			start: 0,
			end: window.innerHeight,
			onLeave: () => {
				gsap.to(btn, {
					scale: 1,
					duration: 0.25,
					ease: "power1.out",
				});
			},
			onEnterBack: () => {
				gsap.to(btn, {
					scale: 0,
					duration: 0.25,
					ease: "power1.out",
				});
				setIsActive(false);
			},
		});
	}, []);

	return (
		<>
			{/* Header */}
			<div
				ref={headerRef}
				className="
          absolute top-0 w-full z-10
          flex justify-between items-center
          px-8 py-8
          font-light text-white
        "
			>
				{/* Logo */}
				<div className="flex items-center cursor-pointer">
					<p
						className="
              transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]
              hover:rotate-360
            "
					>
						©
					</p>
					<div className="flex relative overflow-hidden whitespace-nowrap ml-1 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
						<p className="relative transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] pr-1">
							Code by
						</p>
						<p className="relative transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] pl-1">
							SS
						</p>
						<p className="absolute left-30 pl-1 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
							Snellenberg
						</p>
					</div>
				</div>

				{/* Navigation */}
				<div className="flex items-center">
					{["Work", "About", "Contact"].map((item) => (
						<Magnetic key={item}>
							<div className="relative flex flex-col items-center px-4 cursor-pointer group">
								<a className="z-10">{item}</a>
								<div className="absolute w-1.5 h-1.5 top-11.25 left-1/2 -translate-x-1/2 bg-white rounded-full scale-0 transition-transform duration-200 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-100"></div>
							</div>
						</Magnetic>
					))}
				</div>
			</div>

			{/* Hamburger Button */}
			<div
				ref={buttonRef}
				className="fixed right-0 z-4 transform scale-0"
			>
				<RoundedButton
					onClick={() => setIsActive((prev) => !prev)}
					className="relative m-5 w-20 h-20 rounded-full bg-[#0b1944] flex items-center justify-center"
				>
					<div
						className={`
              relative flex-1
			  z-1
              before:content-['']
              after:content-['']
              before:block after:block
              before:h-px after:h-px
              before:w-2/5 after:w-2/5
              before:bg-white after:bg-white
              before:mx-auto after:mx-auto
              before:relative after:relative
              before:top-1.25 after:-top-1.25
              transition-transform duration-300
              ${isActive ? "before:-rotate-45 before:top-px after:rotate-45 after:-top-px" : ""}
            `}
					/>
				</RoundedButton>
			</div>

			{/* Mobile Nav Overlay */}
			<AnimatePresence mode="wait">
				{isActive && <Sidebar />}
			</AnimatePresence>
		</>
	);
}
