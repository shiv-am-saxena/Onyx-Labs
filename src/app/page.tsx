import FeaturedCourses from "@/components/Home/FeaturedCourses";
import HeroSection from "@/components/Home/HeroSection";
import React from "react";
import Testimonials from "@/components/Home/Testimonials";
import { Contact } from "@/components/Home/Contact";
function page() {
	return (
		<main className="min-h-screen bg-black antialiased">
			<div>
				<HeroSection />
				<FeaturedCourses />
				<Testimonials />
				<Contact />
			</div>
		</main>
	);
}

export default page;
