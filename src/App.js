import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import './App.css';

function App() {
  return (
    <div className="container">
        <header>
            <Navbar />
            <Hero />
        </header>
        <main>
            <About />
            <Contact />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  );
}

export default App;
