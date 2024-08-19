"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
	const [active, setActive] = useState<string | null>(null);
	return (
		<div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
			<Menu setActive={setActive}>
				<Link href={"/"}>
					<MenuItem setActive={setActive} active={active} item="Home" />
				</Link>
				<MenuItem setActive={setActive} active={active} item="Courses">
					<div className="flex backdrop-blur-md flex-col w-fit">
						<HoveredLink href={"/courses/web-dev"}>Web Development</HoveredLink>
						<HoveredLink href={"/courses/vid-edit"}>Video Editing</HoveredLink>
						<HoveredLink href={"/courses/graphic-des"}>Graphic Designing</HoveredLink>
						<HoveredLink href={"/courses/back-end"}>Back-end Development</HoveredLink>
					</div>
				</MenuItem>
				<MenuItem setActive={setActive} active={active} item="Careers">
					<div className="flex backdrop-blur-md flex-col w-fit">
						<HoveredLink href={"/affiliate"}>Join as Affiliate</HoveredLink>
						<HoveredLink href={"/jobs"}>Jobs</HoveredLink>
						<HoveredLink href={"/life-here"}>
							Life @<strong>Onyx</strong>
						</HoveredLink>
					</div>
				</MenuItem>
				<Link href={"/contact"}>
					<MenuItem setActive={setActive} active={active} item="Contact Us" />
				</Link>
			</Menu>
		</div>
	);
}

export default Navbar;
