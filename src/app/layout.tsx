import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { twMerge } from "tailwind-merge";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dual Lista",
  description: "Example of a Dual Listbox",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        src="https://code.iconify.design/2/2.1.0/iconify.min.js"
        strategy="afterInteractive"
      />
      <body
        className={twMerge(
          geistSans.variable,
          geistMono.variable,
          "h-dvh min-h-fit w-screen antialiased",
        )}
      >
        {children}
      </body>
    </html>
  );
}
