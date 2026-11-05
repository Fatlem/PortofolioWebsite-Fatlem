import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Certificates } from "./components/Certificates";
import { Contact } from "./components/Contact";
import { Footer, MobileNav } from "./components/Footer";
import { FloatingLogos } from "./components/FloatingLogos";

export default function App() {
  return (
    <>
      <FloatingLogos />
      <Header />
      <main>
        <Hero /><About /><Experience /><Projects /><Skills /><Certificates /><Contact />
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
