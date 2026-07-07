import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Research from "./components/Research";
import Awards from "./components/Awards";
import Activities from "./components/Activities";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Research />
        <Awards />
        <Activities />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
