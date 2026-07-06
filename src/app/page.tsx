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
      <NavBar />
      
      <About />
      <Skill />
      <Projects />
      <Contact />

      <Footer />
    </div>
  );
}
