"use client";

import React, { useRef } from "react";

// ui components
import ScrollTitle from "@/components/ui/ScrollTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutMe() {
	const phrase = `Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.
		I am a passionate Web Application Developer with a keen eye for UI/UX design and frontend development. I specialize in transforming concepts into interactive, user-friendly web applications that are both performant and visually appealing.

With solid knowledge of frontend frameworks, responsive design, and modern JavaScript/TypeScript, I ensure that every project I work on is not only functional but also delivers an engaging user experience.

In addition to frontend expertise, I have a foundational understanding of backend development, primarily with Node.js. I am comfortable debugging backend issues, integrating APIs, and optimizing full-stack workflows.

`;

	const container = useRef<HTMLElement | null>(null);

	return (
		<section
			ref={container}
			className="relative flex justify-center items-center h-dvh overflow-hidden bg-black text-white"
		>
			<div className="flex-1 max-w-350 flex flex-col gap-12.5 text-center py-25">
				<ScrollTitle title="About Me" scrollContainerRef={container} />

				<ScrollReveal text={phrase} scrollContainerRef={container} />
			</div>
		</section>
	);
}
