import Link from "next/link";
import { motion, Variants } from "framer-motion";

const slide: Variants = {
	initial: { x: 80 },
	enter: (i) => ({
		x: 0,
		transition: {
			duration: 0.8,
			ease: [0.76, 0, 0.24, 1],
			delay: 0.05 * i,
		},
	}),
	exit: (i) => ({
		x: 80,
		transition: {
			duration: 0.8,
			ease: [0.76, 0, 0.24, 1],
			delay: 0.05 * i,
		},
	}),
};

const scale: Variants = {
	open: { scale: 1, transition: { duration: 0.3 } },
	closed: { scale: 0, transition: { duration: 0.4 } },
};

interface LinkProps {
	data: {
		title: string;
		href: string;
		index: number;
	};
	isActive: boolean;
	setSelectedIndicator: (href: string) => void;
}

const MenuLink: React.FC<LinkProps> = ({
	data,
	isActive,
	setSelectedIndicator,
}) => {
	const { title, href, index } = data;

	return (
		<motion.div
			className="relative flex items-center"
			onMouseEnter={() => setSelectedIndicator(href)}
			custom={index}
			variants={slide}
			initial="initial"
			animate="enter"
			exit="exit"
		>
			{/* Indicator */}
			<motion.div
				variants={scale}
				animate={isActive ? "open" : "closed"}
				className="w-2.5 h-2.5 bg-white rounded-full absolute -left-7"
			/>

			{/* Link */}
			<Link
				href={href}
				className="text-white font-light transition-colors duration-200 hover:text-yellow-400"
			>
				{title}
			</Link>
		</motion.div>
	);
};

export default MenuLink;
