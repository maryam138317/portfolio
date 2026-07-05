import Hero from "@/component/hero";
import NavBar from "@/component/nav-bar";
import About from "@/sections/about";

export default function Home() {
  return (
    <div>
      <Hero />
      <NavBar />
      
      <About />
    </div>
  );
}
