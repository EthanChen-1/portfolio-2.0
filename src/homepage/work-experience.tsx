import React from "react";
import { BriefcaseBusiness } from "lucide-react";

export default function WorkExperience() {
  return (
    <div
      id="work-experience"
      className="flex flex-col gap-2 border-b-2 border-zinc-100 py-4"
    >
      <div className="flex items-center space-x-2">
        <BriefcaseBusiness size={40} />
        <h2 className="font-bold text-2xl">Work Experience</h2>
      </div>
      <ul className="list-disc list-outside ml-6 space-y-4">
        <li>
          <div className="inline space-y-2">
            August 2024 - Current
            <p className="font-bold text-lg">Technical Consultant</p>
            <p className="max-w-xl">
              Self-employed working on the development and maintenance of
              websites for local businesses, building computers and servers, and
              doing hardware and network troubleshooting and repairs
            </p>
          </div>
        </li>
        <li>
          <div className="inline space-y-2">
            February 2023 - July 2024
            <p className="font-bold text-lg">
              Consultant Graduate Software Developer
            </p>
            <p className="max-w-xl">
              First full-time position at Thoughtworks. Joined an Agile team on
              the development, testing, and maintenance of the leave management
              system utilized by the company. Worked on the development of a
              RESTful API for an email notification system and multiple UI
              components
            </p>
          </div>
        </li>
        <li>
          <div className="inline space-y-2">
            May 2022 - August 2022
            <p className="font-bold text-lg">
              Consultant Intern Software Developer
            </p>
            <p className="max-w-xl">
              A Summer internship at Thoughtworks where I learned the
              fundamentals of technical consulting and Agile software
              development. Worked with a team of 11 other interns on the
              development &amp; testing of a full-stack web application designed
              to aid users in identifying and changing their negative and
              unhelpful thought patterns and behaviors
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
