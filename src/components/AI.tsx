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
        <path d="M184 112C184 120.837 178.627 128 172 128C165.373 128 160 120.837 160 112C160 103.163 165.373 96 172 96C178.627 96 184 103.163 184 112Z" />
        <path d="M96 112C96 120.837 90.6274 128 84 128C77.3726 128 72 120.837 72 112C72 103.163 77.3726 96 84 96C90.6274 96 96 103.163 96 112Z" />
      </svg>
    </div>
  );
}
