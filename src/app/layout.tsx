/* eslint-disable react/react-in-jsx-scope */
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google"; 
import "./globals.css";

const noto = Noto_Sans({subsets: ['latin'], weight: ['500']}); 

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto.className}>{children}</body>
    </html>
  );
}
