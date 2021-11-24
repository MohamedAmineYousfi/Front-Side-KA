
import './App.css';
import Navbar from '../src/NavBar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../src/Pages/Home.js';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Footer/Footer';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
