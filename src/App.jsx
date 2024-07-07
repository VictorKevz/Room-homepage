import React from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
function App() {


  return (
    <main className="outer-container">
      <div className="inner-container">
        <Hero/>
        <About/>
      </div>
      
    </main>
  );
}

export default App;