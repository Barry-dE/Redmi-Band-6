import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import { split } from "./animations/text.js";
import { useEffect } from "react";
import ImageSlider from "./components/ImageSlide.jsx/ImageSlide.jsx";
import Display from "./components/Display/Display.jsx";

function App() {
  useEffect(() => split());
  return (
    <>
      <Header />
      <Hero />
      <ImageSlider />
      <Display />
    </>
  );
}

export default App;
