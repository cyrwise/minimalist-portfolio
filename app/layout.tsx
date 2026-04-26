import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cyrus Wise | Software Engineer & Founder",
  description: "Portfolio, projects, and work.",
  icons: {
    icon: "/images/face.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}