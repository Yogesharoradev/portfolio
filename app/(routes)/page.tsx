import Footer from "@/components/molecules/Footer";
import About from "@/components/organisms/About";
import Art from "@/components/organisms/Art";
import Hero from "@/components/organisms/Hero";
import Repos from "@/components/organisms/Repos";
import Supporters from "@/components/organisms/Supporters";
import Timeline from "@/components/organisms/Timeline";
import { timelines } from "@/data/timeline";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      {/* <Art /> */}
      <Repos />
      <Supporters />
      <Footer />
      {/* <Timeline timeline={timelines} /> */}
    </div>
  );
}
