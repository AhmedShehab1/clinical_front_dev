import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Components/Navbar/navbar";

import "./App.css";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";
import LogIn from "./Components/LogIn/LogIn.jsx";
import Contact from "./Components/Contact/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
