import React from 'react';
import Head from './components/Head';
import Navs from './components/Navs';
import About from './components/About';
import Languages from './components/Languages';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Journey from './components/Journey';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div>
      <Head />
      <Navs />
      <About />
      <Languages />
      <Skills />
      <Projects />
      <Journey />
      <Footer />
    </div>
  );
}

export default App;
