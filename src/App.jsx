// Make sure to import your CSS file where you added the @tailwind directives
import Header from './components/Header';
import React from 'react';
import './index.css';
import Hero from './components/Hero';
import './index.css';
import About from './components/About';
import Resume from './components/Resume'
import Certificate from './components/Certificate';


function App() {
  return (
    <>
   
    <Header />
    <Hero />
    <About />
    <Resume />
    <Certificate />

    
    </>
  );
}

export default App;



          