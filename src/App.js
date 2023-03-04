
import About from './components/About';
import Clients from './components/Clients';
import Contact_Form from './components/Contact_Form';
import Hero from './components/Hero';
import MiniInfo from './components/MiniInfo';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Services from './components/Services';


function App() {
  return (
    <div className="App min-h-full">
      <MiniInfo />
      <Nav />
      <Hero />
      <Clients />
      <About />
      <Services />
      <Projects />
      <Contact_Form />

      {/* <Services /> */}


    </div>
  );
}

export default App;
