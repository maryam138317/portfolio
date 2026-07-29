import Footer from "@/component/footer";
import Hero from "@/component/hero";
import NavBar from "@/component/nav-bar";
import About from "@/sections/about";
import Contact from "@/sections/contact";
import Projects from "@/sections/projects";
import Skill from "@/sections/skill-experience";

export default function Home() {
  return (
    <div>
      <Hero />
      <NavBar styles="max-sm:hidden w-full flex justify-between px-8 py-4 sticky top-0 bg-ink/80 backdrop-blur z-50 shadow-olive-200 shadow-xl dark:shadow-olive-800"/>
      
      <About />
      <Skill />
      <Projects />
      <Contact />

      <Footer />
    </div>
  );
}
