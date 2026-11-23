import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Seasons from "@/components/Seasons";
import Cast from "@/components/Cast";
import Themes from "@/components/Themes";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Seasons />
        <Cast />
        <Themes />
      </main>
      <Footer />
    </>
  );
}
