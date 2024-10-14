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
        <path d="M84.677 128C80.4924 128 76.8821 126.195 73.8462 122.585C70.8103 118.892 69.2924 114.544 69.2924 109.538C69.2924 104.451 70.8103 100.103 73.8462 96.4923C76.8821 92.882 80.4924 91.0769 84.677 91.0769C88.8616 91.0769 92.4718 92.882 95.5077 96.4923C98.5436 100.103 100.062 104.451 100.062 109.538C100.062 114.544 98.5436 118.892 95.5077 122.585C92.4718 126.195 88.8616 128 84.677 128ZM171.323 128C167.139 128 163.528 126.195 160.492 122.585C157.456 118.892 155.939 114.544 155.939 109.538C155.939 104.451 157.456 100.103 160.492 96.4923C163.528 92.882 167.139 91.0769 171.323 91.0769C175.508 91.0769 179.118 92.882 182.154 96.4923C185.19 100.103 186.708 104.451 186.708 109.538C186.708 114.544 185.19 118.892 182.154 122.585C179.118 126.195 175.508 128 171.323 128Z" />
      </svg>
    </div>
  );
}
