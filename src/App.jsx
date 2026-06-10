import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Services from "./components/Services";
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import LenisScroll from "./components/LenisScroll";
import Work from "./components/Work";

export default function App() {
  return (
    <>
      <LenisScroll />
      <Navbar />
      <Header />
      <About />
      {/* <Services /> */}
      <Projects />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
