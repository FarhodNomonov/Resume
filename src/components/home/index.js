import { useState } from "react";
import Header from "./header";
import About from "../about";
import Intro from "./intro";
import Skills from "../Skills";
import Portfolio from "../portfolio";
import Footer from "./footer";
import Loader from "../ui/loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

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
