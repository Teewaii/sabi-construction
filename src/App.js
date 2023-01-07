
import Clients from './components/Clients';
import Hero from './components/Hero';
import MiniInfo from './components/MiniInfo';
import Services from './components/Services';


function App() {
  return (
    <div className="App min-h-full">
      <MiniInfo />
      <Hero />
      <Clients />
      {/* <Services /> */}

    </div>
  );
}

export default App;
