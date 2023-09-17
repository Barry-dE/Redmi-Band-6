import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import { split } from "./animations/text.js";
import { useEffect } from "react";
import ImageSlider from "./components/ImageSlide.jsx/ImageSlide.jsx";

function App() {
  useEffect(() => split());
  return (
    <>
      <Header />
      <Hero />
      <ImageSlider />
    </>
  );
}

export default App;
