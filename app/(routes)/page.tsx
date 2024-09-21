import Footer from "@/components/molecules/Footer";
import About from "@/components/organisms/About";
import Blog from "@/components/organisms/Blog";
import Hero from "@/components/organisms/Hero";
import Repos from "@/components/organisms/Repos";
import Supporters from "@/components/organisms/Supporters";
import Timeline from "@/components/organisms/Timeline";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Repos />
      <Blog />
      <Supporters/>
      <Footer />
      {/* <Timeline timeline={timelines} /> */}
    </div>
  );
}
