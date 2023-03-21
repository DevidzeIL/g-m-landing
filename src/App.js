import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Portfolio from './components/Portfolio';
import Technologies from './components/Technologies';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className='app'>
      <Header />
      <Hero />
      <Services />
      <About />
      <Team />
      <Portfolio />
      <Technologies />
      <Footer />
    </div>
  );
}
