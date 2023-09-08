import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import { split } from "./animations/text.js";
import { useEffect } from "react";

function App() {
  useEffect(() => split());
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}

export default App;
