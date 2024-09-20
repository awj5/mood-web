import { useState } from "react";
import { CircleArrowRight } from "lucide-react";

export default function Form() {
  const [step, setStep] = useState(1);

  const getNotifiedClick = () => {
    setStep(2);
  };

  const submit = () => {
    setStep(3);
  };

  return (
    <>
      {step === 1 ? (
        <a
          onClick={getNotifiedClick}
          className="mt-6 inline-flex cursor-pointer items-center gap-2 hover:opacity-50 active:opacity-25"
        >
          <span className="font-sans text-lg">Get notified</span>
          <CircleArrowRight size={24} />
        </a>
      ) : step === 2 ? (
        <div className="mt-6 flex gap-3">
          <input
            type="email"
            className="w-40 border-b-2 bg-background font-sans outline-none"
            placeholder="Enter your email"
            required
          />

          <a
            onClick={submit}
            className="cursor-pointer rounded-full border-2 px-2 py-1 font-sans text-sm hover:opacity-50 active:opacity-25"
          >
            Submit
          </a>
        </div>
      ) : (
        <p className="mt-6 inline-block bg-gradient-to-r from-[#FF00FF] via-[#FFFF00] to-[#00FFFF] bg-clip-text font-sans text-lg text-transparent">
          Thanks! We will let you know when we launch.
        </p>
      )}
    </>
  );
}
