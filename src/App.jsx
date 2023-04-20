import { useState } from "react";
import Header from "./components/Header";
import HeroImage from "./components/HeroImage";
import Title from "./components/Title";
import Email from "./components/Email";

function App() {
  const [email, setEmail] = useState("");
  return (
    <>
      <Header />
      <HeroImage />
      <Title />
      <Email />
    </>
  );
}

export default App;
