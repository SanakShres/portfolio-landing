"use client";

import React, { useRef } from "react";

// ui components
import ScrollTitle from "@/components/ui/ScrollTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutMe() {
	const phrase =
		"Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";

	const container = useRef<HTMLElement | null>(null);

	return (
		<section
			ref={container}
			className="relative flex justify-center items-center h-dvh overflow-hidden bg-black text-white"
		>
			<div className="max-w-350 flex flex-col gap-12.5 text-center">
				<ScrollTitle title="About Me" scrollContainerRef={container} />

				<ScrollReveal text={phrase} scrollContainerRef={container} />
			</div>
		</section>
	);
}
