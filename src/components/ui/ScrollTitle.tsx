import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollTitleProps {
	title: string;
	scrollContainerRef: React.RefObject<HTMLElement | null>;
	className?: string;
}

const ScrollTitle: React.FC<ScrollTitleProps> = ({
	title,
	scrollContainerRef,
	className = "",
}) => {
	const root = useRef<HTMLDivElement | null>(null);
	const titleIsoRef = useRef<HTMLHeadingElement | null>(null);
	const titleGlitchRef = useRef<HTMLHeadingElement | null>(null);

	useEffect(() => {
		if (
			!scrollContainerRef.current ||
			!titleIsoRef.current ||
			!titleGlitchRef.current
		)
			return;

		const ctx = gsap.context(() => {
			const fontTl = gsap.timeline({
				scrollTrigger: {
					trigger: scrollContainerRef.current,
					start: "top center",
					end: "bottom center",
					scrub: 1,
				},
			});

			// Iso fades out
			fontTl.to(titleIsoRef.current, {
				opacity: 0,
				ease: "power2.inOut",
			});

			// Glitch fades in + subtle movement
			fontTl.to(
				titleGlitchRef.current,
				{
					opacity: 1,
					x: 2,
					y: -1,
					ease: "power2.inOut",
				},
				"<",
			);
		}, root);

		return () => ctx.revert();
	}, [scrollContainerRef]);

	return (
		<div ref={root} className={`relative h-24 ${className}`}>
			<h1
				ref={titleIsoRef}
				className="absolute inset-0 text-8xl max-[420px]:text-4xl font-light font-iso"
			>
				{title}
			</h1>

			<h1
				ref={titleGlitchRef}
				className="absolute inset-0 text-8xl max-[420px]:text-4xl font-light font-glitch opacity-0"
			>
				{title}
			</h1>
		</div>
	);
};

export default ScrollTitle;
