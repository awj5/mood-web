"use client";

import { useState, useEffect } from "react";
import { CircleArrowRight } from "lucide-react";
import AI from "@/components/AI";

export default function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const text =
      ".ai is a privacy-focused wellbeing platform tackling workplace burnout. It offers daily emotion check-ins, secure chats, and AI insights to monitor and predict mental health trends. Employers receive real-time, anonymous data with actionable insights to improve employee wellbeing.";
    const words = text.split(" ");

    let timer = setTimeout(() => {
      if (typing && index < words.length) {
        // Type out word by word
        setDisplayedText((prev) => prev + words[index] + " ");
        setIndex(index + 1);
      } else {
        // Finished
        setTyping(false);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [index, typing]);

  return (
    <main className="flex h-full">
      <div className="m-auto box-content flex w-full max-w-xl gap-4 p-6">
        <AI typing={typing} setTyping={setTyping} index={index} />

        <div>
          <p className="mt-[6px] font-sans text-lg">
            <span className={`font-black ${!displayedText && "hidden"}`}>MOOD</span>
            {displayedText}
          </p>

          {!typing && index ? (
            <a
              href="mailto:team@mood.ai?subject=Demo Request"
              className="mt-6 inline-flex items-center gap-2 hover:opacity-50 active:opacity-25"
            >
              <span className="font-sans text-lg">Request a demo</span>
              <CircleArrowRight size={24} />
            </a>
          ) : null}
        </div>
      </div>
    </main>
  );
}
