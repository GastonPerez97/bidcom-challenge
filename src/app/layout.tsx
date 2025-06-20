import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";

import Navbar from "@/components/ui/Navbar";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"]
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato"
});

export const metadata: Metadata = {
  title: "Bidcom Challenge",
  description: "Frontend Challenge for Bidcom"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
