"use client";

import React, {
	useEffect,
	useRef,
	ReactNode,
	HTMLAttributes,
	JSX,
} from "react";
import gsap from "gsap";

// components
import Magnetic from "@/components/common/magnetic.component";

interface RoundedButtonProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	backgroundColor?: string;
}

export default function RoundedButton({
	children,
	backgroundColor = "#455CE9",
	...attributes
}: RoundedButtonProps): JSX.Element {
	const circleRef = useRef<HTMLDivElement | null>(null);
	const timelineRef = useRef<gsap.core.Timeline | null>(null);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (!circleRef.current) return;

		const tl = gsap.timeline({ paused: true });

		tl.to(
			circleRef.current,
			{
				top: "-25%",
				width: "150%",
				duration: 0.4,
				ease: "power3.in",
			},
			"enter",
		).to(
			circleRef.current,
			{
				top: "-150%",
				width: "125%",
				duration: 0.25,
			},
			"exit",
		);

		timelineRef.current = tl;
	}, []);

	const handleMouseEnter = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		timelineRef.current?.tweenFromTo("enter", "exit");
	};

	const handleMouseLeave = () => {
		timeoutRef.current = setTimeout(() => {
			timelineRef.current?.play();
		}, 300);
	};

	return (
		<Magnetic>
			<div
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				style={{ overflow: "hidden" }}
				{...attributes}
				className={`
          relative
          flex items-center justify-center
          cursor-pointer
          rounded-[3em]
          border border-neutral-400
          px-15 py-3.75
          group
        `}
			>
				{/* Content */}
				<div
					className="
            relative z-10
            transition-colors duration-400 linear
            group-hover:text-white
          "
				>
					{children}
				</div>

				{/* Animated Circle */}
				<div
					ref={circleRef}
					style={{ backgroundColor }}
					className="
            absolute
            top-full
            h-[150%]
            w-full
            rounded-full
          "
				/>
			</div>
		</Magnetic>
	);
}
