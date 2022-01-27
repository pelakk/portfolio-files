import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects'
import Technologies from './components/technologies/Technologies';
import Footer from './components/footer/Footer';
// import About from './components/about/About';

function App() {

  return (
    <div className='main'>
      
      <Navbar  />
      <Hero />
      <Projects />
      <Technologies />
      <Footer />
      {/* <About /> */}

    </div>
  );
}

export default App;
