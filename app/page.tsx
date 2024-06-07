// Byimaan

import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Journey from "@/components/journey";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">

      <div className="grid place-content-center h-dvh w-full">
        <Intro />
      </div>

      <SectionDivider />
      
      <About />

      <Experience />

      <Skills />
      
      <Journey />

      <Contact />

    </main>
  )
}
