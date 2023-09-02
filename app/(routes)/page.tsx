import About from "@/components/organisms/About";
import Hero from "@/components/organisms/Hero";
import Repos from "@/components/organisms/Repos";
import Timeline from "@/components/organisms/Timeline";
import { timelines } from "@/data/timeline";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Repos />
      {/* <Timeline timeline={timelines} /> */}
    </div>
  );
}
