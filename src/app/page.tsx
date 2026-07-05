import Hero from "@/component/hero";
import NavBar from "@/component/nav-bar";
import About from "@/sections/about";
import Skill from "@/sections/skill-experience";

export default function Home() {
  return (
    <div>
      <Hero />
      <NavBar />
      
      <About />
      <Skill />
    </div>
  );
}
