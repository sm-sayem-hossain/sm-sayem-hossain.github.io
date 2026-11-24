import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "S. M. Sayem Hossain | Full Stack Developer",
  description:
    "Full Stack Developer & CSE student at Daffodil International University, based in Narayanganj, Bangladesh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full font-sans bg-brand-black text-white antialiased flex flex-col">
        {children}
      </body>
    </html>
  );
}
