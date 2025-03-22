import React from "react";
import AboutMe from "./about-me";
import ContactMe from "./contact-me";
import Projects from "./projects";
import WorkExperience from "./work-experience";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-y-6 w-full">
      <AboutMe />
      <WorkExperience />
      <Projects />
      <ContactMe />
    </div>
  );
}
