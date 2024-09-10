import React from 'react';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import './App.css';
import Features from './components/Features';
import DemoSection from './components/DemoSection';
import Bot from './components/Bot'; // Importa el componente Bot

function App() {
  return (
    <div className="App">
      {/*<Header />*/}
      <HeroSection />
      <div className="divider2"></div> {/* Línea divisoria negra */}
      <Features />
      <div className="divider2"></div> {/* Línea divisoria negra */}
      <DemoSection />
      <div className="divider2"></div> {/* Línea divisoria negra */}
      <Bot />
      <div className="divider2"></div> {/* Línea divisoria negra */}
      <Footer />
    </div>
  );
}

export default App;
