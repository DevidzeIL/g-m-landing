import Technologies from './components/Technologies';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';

export default function App() {
  return (
    <div className='app'>
      <Header />
      <Hero />
      <About />
      <Technologies />
      <Footer />
    </div>
  );
}
