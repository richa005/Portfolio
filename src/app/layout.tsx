import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Richa Kandhway | B.Com Student & Aspiring Finance Professional",
  description: "Portfolio of Richa Kandhway - A passionate 2nd year B.Com student seeking opportunities in finance and accounting.",
  keywords: ["Richa Kandhway", "B.Com", "Finance", "Portfolio", "Student"],
  authors: [{ name: "Richa Kandhway" }],
  openGraph: {
    title: "Richa Kandhway | B.Com Student",
    description: "Aspiring finance professional seeking internship opportunities",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-[#0a0a0c] text-white selection:bg-[#f4a5b8]/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
