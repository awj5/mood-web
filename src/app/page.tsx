"use client";

import { useState, useEffect } from "react";
import AI from "@/components/AI";
import Form from "@/components/Form";

export default function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const text =
      ".ai is a privacy-focused platform tackling workplace burnout and promoting psychological safety. It offers daily emotion check-ins, secure chats, and AI insights to monitor and predict mental health trends. Employers receive real-time, anonymous data with actionable insights to improve employee wellbeing.";
    const words = text.split(" ");

    const timer = setTimeout(() => {
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
      <div className="m-auto box-content flex min-h-96 w-full max-w-xl gap-4 p-6 landscape:min-h-60">
        <AI typing={typing} setTyping={setTyping} index={index} />

        <div className="mt-[6px] flex flex-col gap-6">
          <p className="font-sans text-lg">
            <span className={`font-black ${!displayedText && "hidden"}`}>MOOD</span>
            {displayedText}
          </p>

          {!typing && index ? <Form /> : null}
        </div>
      </div>
    </main>
  );
}
