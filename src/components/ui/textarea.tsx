// Input component extends from shadcnui - https://ui.shadcn.com/docs/components/input
"use client";
import * as React from "react";
import { cn } from "@/utils/cn";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

export interface InputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, InputProps>(({ className, ...props }, ref) => {
	const radius = 300;
	const [visible, setVisible] = React.useState(false);

	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);

	function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		let { left, top } = event.currentTarget.getBoundingClientRect();

		mouseX.set(event.clientX - left);
		mouseY.set(event.clientY - top);
	}

	return (
		<motion.div
			style={{
				background: useMotionTemplate`
					radial-gradient(
						${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
						var(--blue-500),
						transparent 80%
					)
				`,
			}}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setVisible(true)}
			onMouseLeave={() => setVisible(false)}
			className="p-[2px] rounded-lg transition duration-300 group/input"
		>
			<textarea
				name="message"
				id="message"
				ref={ref}
				className={cn(
					`flex h-40 resize-none items-top justify-start w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent 
					file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
					focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
					disabled:cursor-not-allowed disabled:opacity-50
					dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
					group-hover/input:shadow-none transition duration-400`,
					className
				)}
				{...props}
			/>
		</motion.div>
	);
});
Textarea.displayName = "Textarea";

export { Textarea };
