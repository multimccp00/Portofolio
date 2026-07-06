import { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import SectionWrapper from "./components/SectionWrapper";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/resume";
import Portfolio from "./components/portofolio";

const sections = {
  about: <About />,
  resume: <Resume />,
  projects: <Projects />,
  portfolio: <Portfolio />, 
};

export default function App() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const titles = {
      about: "About — Miguel Campos",
      resume: "Resume — Miguel Campos",
      projects: "Projects — Miguel Campos",
      portfolio: "Photography — Miguel Campos",
    };
    document.title = titles[active] || "Miguel Campos";
  }, [active]);

  return (
    <div className="grid-container">
      <Sidebar />
      <main className="main-column">
        <Navbar active={active} onChange={setActive} />
        <SectionWrapper key={active}>{sections[active]}</SectionWrapper>
      </main>
    </div>
  );
}
