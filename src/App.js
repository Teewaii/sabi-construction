import React, { useState } from 'react';
import About from './components/About';
import Clients from './components/Clients';
import Contact_Form from './components/Contact_Form';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Locations from './components/Locations';
import MiniInfo from './components/MiniInfo';
import Modal from './components/Modal';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Services from './components/Services';
import To_top from './components/To_top';

// import { useRef } from "react";

function App() {
  const [toggle, setToggle] = useState(true)

  function changeToggle() {
    setToggle(prev => !prev)
  }



  return (

    <div className="App min-h-full " >
      {/* <div className={toggle ? "App min-h-full fixed" : "min-h-full relative"}> */}
      {/* <MiniInfo /> */}
      <Nav
        toggle={toggle}
        setToggle={setToggle}
        changeToggle={changeToggle}
      />
      <Hero />
      <Clients />
      <About />
      <Services />
      <Projects />
      <Contact_Form />
      <Locations />
      <Footer />
      <Modal
        toggle={toggle}
        changeToggle={changeToggle} />
      {/* <Services /> */}

      <To_top />


    </div>
  );
}

export default App;
