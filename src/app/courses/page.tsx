import { HeroSection } from "@/components/Courses/HeroSection";
import { Spotlight } from "@/components/ui/spotlight";
import React from "react";

export default function Courses(): React.ReactNode {
	return (
		<main className="min-h-screen antialiased ">
			<Spotlight className="-top-40 left-0 md:left-80 md:-top-72" fill="white" />
			<div>
				<HeroSection />
			</div>
		</main>
	);
}
