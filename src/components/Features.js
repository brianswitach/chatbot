import React from 'react';
import './Features.css';
import img1 from '../img/img1.png';
import img2 from '../img/img2.png';


function Features() {
  return (
    <section id="features" className="features-section">
      <div className="features-box features-right">
      <h1>Respuestas Inmediatas</h1>
  <img src={img1} alt="Descripción de la imagen" className="features-image" />
  <div className="feature-item">
    Las <strong style={{ color: '#ff7e5f' }}>Respuestas inmediatas</strong> en un chatbot mejoran la <strong style={{ color: '#ff7e5f' }}>satisfacción</strong> del cliente al brindar la <strong style={{ color: '#ff7e5f' }}>información en tiempo real</strong>. Esto aumenta la <strong style={{ color: '#ff7e5f' }}>eficiencia</strong> y reduce la <strong style={{ color: '#ff7e5f' }}>carga de trabajo</strong>, optimizando <strong style={{ color: '#ff7e5f' }}>recursos</strong> y manteniendo a los usuarios <strong style={{ color: '#ff7e5f' }}>comprometidos</strong>.
  </div>
</div>

<div className="features-box features-left">
  <h1 style={{ marginBottom: '30px' }}>Reducción de la carga de trabajo</h1>
  <img src={img2} alt="Descripción de la imagen" className="features-image" />
  <div className="feature-item">
    La <strong style={{ color: '#ff7e5f' }}>reducción de la carga de trabajo</strong> mediante un chatbot <strong style={{ color: '#ff7e5f' }}>optimiza</strong> los <strong style={{ color: '#ff7e5f' }}>recursos humanos</strong>. Automatizar tareas comunes <strong style={{ color: '#ff7e5f' }}>libera tiempo</strong> para actividades de <strong style={{ color: '#ff7e5f' }}>mayor valor</strong>, mejorando la <strong style={{ color: '#ff7e5f' }}>eficiencia operativa</strong> y reduciendo el <strong style={{ color: '#ff7e5f' }}>estrés</strong> del equipo y <strong style={{ color: '#ff7e5f' }}>contribuyendo</strong> a un <strong style={{ color: '#ff7e5f' }}>entorno</strong> de trabajo más <strong style={{ color: '#ff7e5f' }}>productivo</strong> y equilibrado
  </div>
</div>
    </section>
  );
}

export default Features;
