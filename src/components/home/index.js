import React from "react";
import Header from "./header";
import About from "../About";
import Intro from "./intro";
import Skills from "../Skills";
import Portfolio from "../Portfolio";
import Footer from "../Footer";
import Loader from "../Loader";

export default function Home() {
  const [isLoading, setIsLoading] = React.useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <div>
      {isLoading && <Loader />}
      <Header />
      <Intro />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}
