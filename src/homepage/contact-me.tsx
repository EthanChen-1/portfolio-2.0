import React from "react";
import { Contact, Linkedin, Mail } from "lucide-react";

export default function ContactMe() {
  return (
    <div
      id="contact-me"
      className="flex flex-col gap-2 border-b-2 border-zinc-100 py-4"
    >
      <div className="flex items-center space-x-2">
        <Contact size={40} />
        <h2 className="font-bold text-2xl">Interested in working with me?</h2>
      </div>
      <p>Find me on these platforms</p>
      <ul className="list-disc list-inside ml-4 flex space-x-6">
        <li>
          <a href="https://www.linkedin.com/in/ethanchen4/" target="_blank">
            <Linkedin size={40} className="inline" />
          </a>
        </li>
        <li>
          <a href="mailto:ethanchen4@gmail.com">
            <Mail size={40} className="inline" />
          </a>
        </li>
      </ul>
    </div>
  );
}
