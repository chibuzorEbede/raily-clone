import React from "react";
import "./index.css";
import Navbar from "./components/Navbar/navbar";

const App = () => {
  return (
    <div className=" font-lufga bg-black text-white relative">
      <Navbar />
      <section className="pt-32 px-4 text-center">
        <img src="/hero_image.webp" alt="hero image" />
        <h1 className="text-3xl">AI-Driven + Gamify</h1>
      </section>
    </div>
  );
};

export default App;
