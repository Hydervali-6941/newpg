import "./App.css";
import React, { useState } from "react";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Mid from "./Mid.jsx";
import Testimonials from "./Testimonials.jsx";
import Footer from "./Footer.jsx";

function App() {
  const [num, setnum] = useState(0);
  const inc = () => {
    setnum(num + 1);
  };
  return (
    <>
      <Header num={num} inc={inc} />
      <Main inc={inc} num={num} />
      <Mid />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
