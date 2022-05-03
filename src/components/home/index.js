import React from "react";
import Header from "./header";
import About from "../About";
import Intro from "./intro";
import Skills from "../Skills";
import Portfolio from "../Portfolio";
import Footer from "../Footer";


export default function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}
