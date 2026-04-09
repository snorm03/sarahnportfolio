import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DustBuddiesCaseStudy from "./components/DustBuddiesCaseStudy";

export default function App() {
  const [page, setPage] = useState(null);

  if (page === "dustbuddies") {
    return <DustBuddiesCaseStudy onBack={() => setPage(null)} />;
  }

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects onNavigate={setPage} />
      <Contact />
      <Footer />
    </div>
  );
}
