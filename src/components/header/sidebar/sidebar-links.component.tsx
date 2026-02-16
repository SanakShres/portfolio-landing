"use client";

import React, { JSX } from "react";
import { motion, Variants } from "framer-motion";

// next js components
import Link from "next/link";

// components
import SidebarCurve from "./sidebar-curve.component";

export const menuSlideVariants: Variants = {
	initial: { x: "115%" },
	enter: {
		x: 0,
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
	},
	exit: {
		x: "115%",
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
	},
};

interface SidebarLinksProps {
	setSidebarActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const links = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "Work",
		href: "/work",
	},
	{
		title: "About",
		href: "/about",
	},
	{
		title: "Contact",
		href: "/contact",
	},
] as const;

export default function SidebarLinks({
	setSidebarActive,
}: SidebarLinksProps): JSX.Element {
	return (
		<motion.div
			variants={menuSlideVariants}
			initial="initial"
			animate="enter"
			exit="exit"
			className="
        fixed top-0 right-0
        h-screen
        w-[min(80%,450px)]
        bg-[#11232d]
        text-(--text-dark-000)
        z-50
      "
		>
			{/* Close Button */}
			<motion.div
				onClick={() => setSidebarActive(false)}
				className="
          fixed top-4 right-4 z-50
          w-12.5 h-12.5
          rounded-full
          bg-(--primary)
          cursor-pointer
          flex items-center justify-center
        "
			>
				<div
					className="
            relative w-full h-full
            before:content-['']
            after:content-['']
            before:block after:block
            before:h-0.5 after:h-0.5
            before:w-[40%] after:w-[40%]
            before:bg-(--background-white-100)
            after:bg-(--background-white-100)
            before:mx-auto after:mx-auto
            before:relative after:relative
            before:top-0 after:-top-px
            before:rotate-45 after:-rotate-45
            transition-transform duration-300
          "
				/>
			</motion.div>

			{/* Content */}
			<div
				className="
          h-full box-border
          flex flex-col justify-between
        "
			>
				<div
					className="
            flex-1
            flex flex-col
            justify-around
            mt-20
          "
				>
					{/* Header */}
					<div
						className="
              text-neutral-400
              border-b border-neutral-400
              uppercase
              text-sm
              mb-6
              px-10
            "
					>
						<p>Navigation</p>
					</div>

					{/* Links */}
					{links.map((link, index) => (
						<Link
							key={index}
							href={link.href}
							onClick={() => setSidebarActive(false)}
							className="
                flex items-center
                flex-1
                text-white
                font-light
                text-[3em]
                pl-10
                no-underline

                max-[420px]:pl-8
                max-[420px]:text-[2em]
              "
						>
							{link.title}
						</Link>
					))}
				</div>
			</div>

			{/* Curve */}
			<SidebarCurve />
		</motion.div>
	);
}
