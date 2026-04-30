import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "The Secret Society — The World's Most Exclusive Concierge",
  description: "Private access to the world's finest experiences.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#050505] text-[#F5F0E8] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
