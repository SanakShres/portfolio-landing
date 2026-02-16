"use client";

import React, { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// components
import SidebarLinks from "./sidebar-links.component";

export default function Sidebar(): JSX.Element {
	const [isActive, setIsActive] = useState<boolean>(false);

	return (
		<div>
			{/* Open Button */}
			<motion.div
				onClick={() => setIsActive(true)}
				className="
          w-12.5 h-12.5
          rounded-full
          bg-(--primary)
          cursor-pointer
          flex items-center justify-center
        "
			>
				<div className="relative w-full h-full">
					<div
						className="
              absolute inset-0
              before:content-['']
              after:content-['']
              before:block after:block
              before:h-0.5 after:h-0.5
              before:w-[40%] after:w-[40%]
              before:bg-(--background-white-100)
              after:bg-(--background-white-100)
              before:mx-auto after:mx-auto
              before:relative after:relative
              before:top-1.25 after:-top-1.25
              transition-transform duration-300
            "
					/>
				</div>
			</motion.div>

			{/* Sidebar */}
			<AnimatePresence mode="wait">
				{isActive && <SidebarLinks setSidebarActive={setIsActive} />}
			</AnimatePresence>
		</div>
	);
}
