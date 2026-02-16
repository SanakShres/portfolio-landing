"use client";

import React, { JSX, useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutMe() {
	const phrase =
		"Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";

	// Stable array ref
	const refs = useRef<HTMLSpanElement[]>([]);
	const container = useRef<HTMLElement | null>(null);

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
			<span
				key={`${letter}_${i}`}
				ref={(el) => {
					if (el) refs.current.push(el);
				}}
				className="opacity-20"
			>
				{letter}
			</span>
		));
	};

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		if (!container.current || !refs.current.length) return;

		const ctx = gsap.context(() => {
			gsap.to(refs.current, {
				scrollTrigger: {
					trigger: container.current,
					scrub: true,
					start: "top center",
					end: `+=${window.innerHeight / 1.5}`,
				},
				opacity: 1,
				ease: "none",
				stagger: 0.05,
			});
		}, container);

		// Cleanup
		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={container}
			className="relative flex justify-center items-center h-dvh overflow-hidden bg-black text-white"
		>
			<div className="max-w-350 flex flex-col gap-12.5 text-center">
				<h1 className="text-8xl max-[420px]:text-4xl font-light">
					About Me
				</h1>

				<div className="flex flex-wrap max-w-[90%] mx-auto">
					{splitWords(phrase)}
				</div>
			</div>
		</section>
	);
}
