import './App.css';
import Header from './components/Header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/Experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
       <Header />
       <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
