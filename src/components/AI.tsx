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
        <path d="M116.359 102.678C116.359 112.465 108.428 120.397 98.6403 120.397C88.853 120.397 80.9211 112.465 80.9211 102.678C80.9211 92.8906 88.853 84.9587 98.6403 84.9587C108.428 84.9587 116.359 92.8906 116.359 102.678Z" />
        <path d="M175.078 102.678C175.078 112.465 167.146 120.397 157.359 120.397C147.572 120.397 139.64 112.465 139.64 102.678C139.64 92.8906 147.572 84.9587 157.359 84.9587C167.146 84.9587 175.078 92.8906 175.078 102.678Z" />
      </svg>
    </div>
  );
}
