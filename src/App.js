import '../src/styles/App.css';
import Navbar from '../src/Navbar';
import HeroSection from './HeroSection';
import SpecialMenu from './SpecialMenu';
import Testimonials from './Testimonials';
import LittleLemon from './LittleLemon';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SpecialMenu />
        <Testimonials />
        <LittleLemon />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
