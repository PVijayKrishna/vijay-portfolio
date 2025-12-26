import React from 'react';
import './index.css';
// Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Certificate from './components/Certificate';
import Project from './components/Project';
import Xtra from './components/Xtra';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white w-full overflow-x-hidden">
      
      <Header />

      {/* The ID="Hero" matches href="#Hero" in Header */}
      <section id="Hero">
        <Hero />
      </section>

      <section id="About">
        <About />
      </section>

      <section id="Resume">
        <Resume />
      </section>

      {/* Note: Your Header calls this "Project" (Singular) */}
      <section id="Projects">
        <Project />
      </section>

      {/* Note: Your Header calls this "Certificates" (Plural) */}
      <section id="Certificates">
        <Certificate />
      </section>

      <section id="Xtra">
         <Xtra />
      </section>

      <section id="Contact">
        <Footer />
      </section>

    </div>
  );
}

export default App;