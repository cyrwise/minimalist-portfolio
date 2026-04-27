import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="pb-12 text-fg font-sans w-full transition-colors duration-300 space-y-24">
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}