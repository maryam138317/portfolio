import Hero from "@/component/hero";
import NavBar from "@/component/nav-bar";
import ProSections from "@/component/sections";
import { nav_bar } from "@/utils/data";

export default function Home() {
  return (
    <div>
      <Hero />
      <NavBar />
      {nav_bar.map(nav => (
        <ProSections id={nav.href} title={nav.title} key={nav.href}>
          {nav.title}
        </ProSections>
      ))}
    </div>
  );
}
