import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const circular = localFont({
  src: [
    {
      path: "./fonts/lineto-circular-book.ttf",
      weight: "400",
    },
    {
      path: "./fonts/lineto-circular-medium.ttf",
      weight: "500",
    },
    {
      path: "./fonts/lineto-circular-bold.ttf",
      weight: "700",
    },
    {
      path: "./fonts/lineto-circular-black.ttf",
      weight: "900",
    },
  ],
  variable: "--font-circular",
});

export const metadata: Metadata = {
  title: "MOOD.ai | How are you feeling?",
  description: "MOOD.ai is a privacy-focused platform tackling workplace burnout and promoting psychological safety.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${circular.variable}`}>{children}</body>
    </html>
  );
}
