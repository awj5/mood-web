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
        <path d="M84.6769 130.462C80.4922 130.462 76.882 128.656 73.8461 125.046C70.8102 121.354 69.2922 117.005 69.2922 112C69.2922 106.913 70.8102 102.564 73.8461 98.9538C76.882 95.3436 80.4922 93.5385 84.6769 93.5385C88.8615 93.5385 92.4717 95.3436 95.5076 98.9538C98.5435 102.564 100.061 106.913 100.061 112C100.061 117.005 98.5435 121.354 95.5076 125.046C92.4717 128.656 88.8615 130.462 84.6769 130.462ZM171.323 130.462C167.138 130.462 163.528 128.656 160.492 125.046C157.456 121.354 155.938 117.005 155.938 112C155.938 106.913 157.456 102.564 160.492 98.9538C163.528 95.3436 167.138 93.5385 171.323 93.5385C175.508 93.5385 179.118 95.3436 182.154 98.9538C185.19 102.564 186.708 106.913 186.708 112C186.708 117.005 185.19 121.354 182.154 125.046C179.118 128.656 175.508 130.462 171.323 130.462Z" />
      </svg>
    </div>
  );
}
