import React from "react";
import { Toaster } from 'react-hot-toast';
import AOS from "aos";
import Home from "./components/home";
function App() {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Home />
      <Toaster />
    </div>
  );
}

export default App;
