import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import React from "react";
import Testimonials from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import ContactForm from "@/components/ContactForm";
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
