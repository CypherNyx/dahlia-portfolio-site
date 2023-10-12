import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Hero />
      <Home />
      <Experience />
      <About />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
