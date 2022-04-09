import React from "react";
import AOS from "aos";
import Home from "./components/home";
function App() {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
