 import Projects from './components/Projects';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Connect from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Connect/>
      <Footer/>
    </div>
  );
}

export default App;