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

	// Split by paragraph first, then by words
	const splitParagraphs = (text: string): JSX.Element[] => {
		return text.split("\n").map((para, i) => {
			const trimmed = para.trim();
			if (!trimmed) return <div key={i} className="h-4" />; // empty line / spacing
			return (
				<p key={i} className="flex flex-wrap justify-center mb-4">
					{splitWords(trimmed)}
				</p>
			);
		});
	};

	const splitWords = (text: string): JSX.Element[] => {
		return text.split(" ").map((word, i) => (
			<span
				key={`${word}_${i}`}
				className="text-xl md:text-2xl mr-2 font-bold text-center"
			>
				{splitLetters(word)}
			</span>
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
			className={`flex flex-wrap max-w-[90%] max-h-[50vh] mx-auto ${className}`}
		>
			{splitParagraphs(text)}
		</div>
	);
};

export default ScrollReveal;
