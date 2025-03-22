import React from "react";
import { MapPin, GraduationCap, AlarmClock, UserRound } from "lucide-react";

export default function AboutMe() {
  return (
    <div
      id="about"
      className="flex flex-col gap-2 border-b-2 border-zinc-100 py-4"
    >
      <div className="flex space-x-2 items-center">
        <img
          className="object-fill rounded-full w-[75px] h-[75px]"
          src="./portfolio-picture.jpg"
          width={100}
          height={100}
          alt="haha"
        />
        <div>
          <p className="font-bold text-2xl">Ethan Chen</p>
          <p className="font-medium">
            Technical Consultant, Full-stack Web Developer
          </p>
        </div>
      </div>

      <div className="text-center max-w-xl mx-auto">
        <p className="font-bold text-3xl text-left">"</p>
        <p className="leading-relaxed text-sm">
          Regardless of the work I do, I value helping others and making an
          impact in peoples lives.
        </p>
        <p className="font-bold text-3xl text-right">"</p>
      </div>

      <div className="mx-auto md:mx-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="w-full max-w-sm flex flex-col items-center space-y-2">
          <MapPin size={40} />
          <p>New York, United States</p>
        </div>
        <div className="w-full max-w-sm flex flex-col items-center space-y-2">
          <GraduationCap size={40} />
          <p>Bachelor of Science, Computer Science</p>
        </div>
        <div className="w-full max-w-sm flex flex-col items-center space-y-2">
          <AlarmClock size={40} />
          <p>1.5 Years of Experience</p>
        </div>
        <div className="w-full max-w-sm flex flex-col items-center space-y-2">
          <UserRound size={40} />
          <p>24 Years Old</p>
        </div>
      </div>
    </div>
  );
}
