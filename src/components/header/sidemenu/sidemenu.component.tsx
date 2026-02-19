import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";

// components
import MenuLink from "./menu-link.component";
import MenuCurve from "./menu-curve.component";

const menuSlide: Variants = {
	initial: { x: "calc(100% + 100px)" },
	enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
	exit: {
		x: "calc(100% + 100px)",
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
	},
};

interface NavItem {
	title: string;
	href: string;
}

const navItems: NavItem[] = [
	{ title: "Home", href: "/" },
	{ title: "Work", href: "/work" },
	{ title: "About", href: "/about" },
	{ title: "Contact", href: "/contact" },
];

export default function SideMenu() {
	const pathname = usePathname();
	const [selectedIndicator, setSelectedIndicator] =
		useState<string>(pathname);

	return (
		<motion.div
			variants={menuSlide}
			initial="initial"
			animate="enter"
			exit="exit"
			className="fixed top-0 right-0 h-screen bg-gray-900 text-white z-10"
		>
			<div className="flex flex-col justify-between h-full p-24 box-border">
				<div
					onMouseLeave={() => setSelectedIndicator(pathname)}
					className="flex flex-col mt-20 space-y-3 text-5xl"
				>
					<div className="border-b border-gray-400 text-gray-400 uppercase text-xs mb-10">
						Navigation
					</div>

					{navItems.map((item, index) => (
						<MenuLink
							key={index}
							data={{ ...item, index }}
							isActive={selectedIndicator === item.href}
							setSelectedIndicator={setSelectedIndicator}
						/>
					))}
				</div>
			</div>

			<MenuCurve />
		</motion.div>
	);
}
