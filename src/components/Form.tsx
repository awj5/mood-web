import { useState } from "react";
import { CircleArrowRight } from "lucide-react";
import { useForm } from "@formspree/react";

export default function Form() {
  const [showForm, setShowForm] = useState(false);
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM as string);

  const getNotifiedClick = () => {
    setShowForm(true);
  };

  return (
    <>
      {!showForm ? (
        <button
          onClick={getNotifiedClick}
          className="inline-flex items-center gap-2 hover:opacity-50 active:opacity-25"
        >
          <span className="font-sans text-lg">Get notified</span>
          <CircleArrowRight size={24} />
        </button>
      ) : state.succeeded ? (
        <p className="inline-block bg-gradient-to-r from-[#FF00FF] via-[#FFFF00] to-[#00FFFF] bg-clip-text font-sans text-lg text-transparent">
          Thanks! We will let you know when we launch.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="email"
            name="email"
            className="w-44 rounded-none border-b-2 border-foreground bg-background font-sans outline-none"
            placeholder="Enter your email"
            required
          />

          <button
            className="rounded-full border-2 border-foreground px-2 py-1 font-sans text-sm hover:opacity-50 active:opacity-25"
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      )}
    </>
  );
}
