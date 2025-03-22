import React from "react";

export default function Header() {
  return (
    <nav className="top-3 z-20 mt-8 max-w-fit">
      <ul className="flex items-center gap-3 rounded-full border border-zinc-800 px-4">
        <li>
          <a href="/">Ethan Chen</a>
        </li>
        {"❖"}
        <li>
          <a href="#about">About</a>
        </li>
        {"❖"}
        <li>
          <a href="#work-experience">Work Experience</a>
        </li>
        {"❖"}
        <li>
          <a href="#projects">Projects</a>
        </li>
        {"❖"}
        <li>
          <a href="#contact-me">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
