import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

type AIProps = {
  typing: boolean;
  setTyping: Dispatch<SetStateAction<boolean>>;
  index: number;
};

export default function AI(props: AIProps) {
  return (
    <div className={`${!props.typing && !props.index && "invisible"} relative h-10 w-10 shrink-0`}>
      <Image
        src="/img/wheel.png"
        width={256}
        height={256}
        alt="Chatbot"
        className={`absolute ${props.typing && "animate-spin"}`}
        onLoad={() => props.setTyping(true)}
        priority
      />

      <svg
        width="256"
        height="256"
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute h-full w-full fill-black dark:fill-white"
      >
        <path d="M112 96C112 104.837 104.837 112 96 112C87.1634 112 80 104.837 80 96C80 87.1634 87.1634 80 96 80C104.837 80 112 87.1634 112 96Z" />
        <path d="M176 96C176 104.837 168.837 112 160 112C151.163 112 144 104.837 144 96C144 87.1634 151.163 80 160 80C168.837 80 176 87.1634 176 96Z" />
      </svg>
    </div>
  );
}
