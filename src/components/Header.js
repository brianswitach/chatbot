import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
        <section>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">Inicio</li>
          <li className="nav-item">Demo</li>
          <li className="nav-item">Características</li>
          <li className="nav-item">Precios</li>
          <li className="nav-item">Testimonios</li>
          <li className="nav-item">Contacto</li>
          <li className="nav-item">FAQ</li>  
        </ul>
      </nav>
      <div className="divider"></div> {/* Línea divisoria negra */}
      </section>
    </header>
  );
}

export default Header;
