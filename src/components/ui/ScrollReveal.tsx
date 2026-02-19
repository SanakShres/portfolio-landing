import React, { useEffect, useRef, JSX } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
	text: string;
	scrollContainerRef: React.RefObject<HTMLElement | null>;
	stagger?: number;
	start?: string;
	end?: string;
	className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
	text,
	scrollContainerRef,
	stagger = 0.05,
	start = "top center",
	end,
	className = "",
}) => {
	const root = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!scrollContainerRef.current || !root.current) return;

		const ctx = gsap.context(() => {
			const letters = root.current!.querySelectorAll("span");

			gsap.to(letters, {
				scrollTrigger: {
					trigger: scrollContainerRef.current,
					start,
					end: end ?? `+=${window.innerHeight / 1.5}`,
					scrub: true,
				},
				opacity: 1,
				ease: "none",
				stagger,
			});
		}, root);

		return () => ctx.revert();
	}, [scrollContainerRef, start, end, stagger]);

	const splitWords = (text: string): JSX.Element[] => {
		return text.split(" ").map((word, i) => (
			<p
				key={`${word}_${i}`}
				className="text-4xl mr-4 font-bold text-center"
			>
				{splitLetters(word)}
			</p>
		));
	};

	const splitLetters = (word: string): JSX.Element[] => {
		return word.split("").map((letter, i) => (
			<span key={`${letter}_${i}`} className="opacity-20">
				{letter}
			</span>
		));
	};

	return (
		<div
			ref={root}
			className={`flex flex-wrap max-w-[90%] mx-auto ${className}`}
		>
			{splitWords(text)}
		</div>
	);
};

export default ScrollReveal;
