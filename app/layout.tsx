import type { Metadata } from "next";
import "./globals.css";
import { merriweather } from "./fonts";

export const metadata: Metadata = {
  title: "SteadySocials DEMO",
  description: "Generated by AymenDev1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${merriweather.className}  antialiased min-h-screen overflow-y-scroll overflow-x-hidden w-screen`}
      >
        {children}
      </body>
    </html>
  );
}
