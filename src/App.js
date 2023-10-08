import './App.css';
import Navbar from './components/nav-bar/nav-bar';
import Hero from './components/hero/hero';
import Portfolio from './components/portfolio/portfolio';
import Services from './components/sevices/services';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

import './components/nav-bar/nav-bar.css';
import './components/hero/hero.css';
import './components/portfolio/portfolio.css'
import './components/sevices/services.css'
import './components/about/about.css'
import './components/contact/contact.css'
import './components/footer/footer.css'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Portfolio/>
      <Services/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
