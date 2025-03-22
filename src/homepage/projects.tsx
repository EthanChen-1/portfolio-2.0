import React from "react";
import { FolderCode, SquareArrowOutUpRight } from "lucide-react";

export default function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col gap-2 border-b-2 border-zinc-100 py-4"
    >
      <div className="flex items-center space-x-2">
        <FolderCode size={40} />
        <h2 className="font-bold text-2xl">Projects</h2>
      </div>
      <ul className="list-disc list-outside ml-6 space-y-4">
        <li>
          <div className="inline space-y-2">
            <div>
              <p>August 2024 - Current</p>
              <div className="flex items-center space-x-2">
                <a
                  href="https://github.com/EthanChen-1/mb-reviews-2.0"
                  className="font-bold text-lg"
                  target="_blank"
                >
                  Mausbert Reviews
                </a>
                <SquareArrowOutUpRight />
              </div>
            </div>
            <p className="max-w-xl">
              Website that showcases and ranks all of the gaming mice that I
              review over on my Youtube channel. Built using a combination of
              Next JS, React, Tailwind CSS, Zod, Prisma, PostgreSQL, and hosted
              on Vercel.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
