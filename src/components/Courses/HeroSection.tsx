import React from "react";
import { Tabs } from "../ui/tabs";
import CourseList from "@/data/courses.json";
export function HeroSection() {
	const tabs = [
		{
			title: "All Courses",
			value: "all courses",
			content: (
				<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 font-bold text-white backdrop-blur-lg border border-white text-center font-mono">
					<h1 className="text-4xl font-caveat">All Courses</h1>
				</div>
			),
		},
		{
			title: "Multimedia",
			value: "multimedia",
			content: (
				<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white backdrop-blur-lg border border-white text-center font-mono">
					<h1 className="text-4xl font-caveat">Multimedia Courses</h1>
				</div>
			),
		},
		{
			title: "Design",
			value: "design",
			content: (
				<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white backdrop-blur-lg border border-white text-center font-mono">
					<h1 className="text-4xl font-caveat">Designing Courses</h1>
				</div>
			),
		},
		{
			title: "Development",
			value: "development",
			content: (
				<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white backdrop-blur-lg border border-white text-center font-mono">
					<h1 className="text-4xl font-caveat">Development Courses</h1>
				</div>
			),
		},
		{
			title: "Data Science",
			value: "data-science",
			content: (
				<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white backdrop-blur-lg border border-white text-center font-mono">
					<h1 className="text-4xl font-caveat">Data Science Courses</h1>
				</div>
			),
		},
		{
			title: "Security",
			value: "security",
			content: (
				<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white backdrop-blur-lg border border-white text-center font-mono">
					<h1 className="text-4xl font-caveat">Security Courses</h1>
				</div>
			),
		},
		{
			title: "AI",
			value: "ai",
			content: (
				<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white backdrop-blur-lg border border-white text-center font-mono">
					<h1 className="text-4xl font-caveat">Artificial Intelligence Courses</h1>
				</div>
			),
		},
		{
			title: "Cloud",
			value: "cloud",
			content: (
				<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white backdrop-blur-lg border border-white text-center font-mono">
					<h1 className="text-4xl font-caveat">Cloud Computing Courses</h1>
				</div>
			),
		},
		{
			title: "Technology",
			value: "technology",
			content: (
				<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white backdrop-blur-lg border border-white text-center font-mono">
					<h1 className="text-4xl font-caveat">Technology Courses</h1>
				</div>
			),
		},
	];
	return (
		<div className="h-screen w-full rounded-md flex items-center flex-col justify-center bg-[#18181b]/[0.96] antialiased bg-grid-white/[0.03] relative overflow-hidden">
			{/* <Spotlight className="-top-40 left-0 md:left-80 md:-top-72" fill="white" /> */}
			<div className="h-fit mt-20 w-full flex items-center justify-center">
				<h1 className="text-7xl font-pristina font-semibold leading-relaxed">Courses</h1>
			</div>
			<div className="h-full [perspective:1000px] relative flex flex-col max-w-7xl mx-auto w-full items-start justify-start mb-40">
				<Tabs tabs={tabs} />
			</div>
		</div>
	);
}
