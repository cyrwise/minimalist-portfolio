import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cyrus Wise | Software Engineer & Founder",
  description: "Portfolio, projects, and work.",
icons: {
  icon: "/favicon.png?v=2",
  shortcut: "/favicon.png?v=2",
  apple: "/favicon.png?v=2",
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <Nav />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}