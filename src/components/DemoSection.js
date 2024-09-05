import React from 'react';
import './DemoSection.css';

function DemoSection() {
  return (
    <section id="demo" className="demo-section">
      <h1 className="demo-title">Suscripciones</h1>
      <div className="subscription-cards">
        <div className="subscription-card">
          <h2>Basica</h2>
          <ul style={{ marginTop: '55px' }}>
            <li><strong style={{ color: '#ff7e5f' }}>- Configuración Inicial:</strong> Integración del chatbot en una plataforma (sitio web o Instagram).</li>
            <li><strong style={{ color: '#ff7e5f' }}>- Funciones Básicas:</strong> Respuestas automáticas a preguntas frecuentes, soporte en horarios no laborales.</li>
            <li><strong style={{ color: '#ff7e5f' }}>- Personalización Limitada:</strong> Personalización del chatbot con el logo y los colores de la marca.</li>
            <li><strong style={{ color: '#ff7e5f' }}>- Actualizaciones:</strong> Acceso a actualizaciones menores del sistema.</li>
          </ul>
          <p className="price">$49.99</p>
          <button className="subscribe-btn">Empezar</button>
        </div>
        <div className="subscription-card">
        <div className="discount">Recomendado 🔥</div>
          <h2>Premium</h2>
          <ul>
            <li><strong style={{ color: '#ff7e5f' }}>Configuración Avanzada:</strong> Integración del chatbot en múltiples plataformas.</li>
            <li><strong style={{ color: '#ff7e5f' }}>Funciones Avanzadas:</strong> Respuestas inmediatas, recopilación de datos de clientes, seguimiento de pedidos, recordatorios automáticos.</li>
            <li><strong style={{ color: '#ff7e5f' }}>Personalización Completa:</strong> Chatbot completamente adaptado al estilo y tono de la marca, con respuestas personalizadas.</li>
            <li><strong style={{ color: '#ff7e5f' }}>Soporte Prioritario:</strong> Soporte 24/7 con tiempos de respuesta prioritarios.</li>
            <li><strong style={{ color: '#ff7e5f' }}>Análisis e Informes:</strong> Acceso a informes detallados sobre el rendimiento del chatbot y el comportamiento de los usuarios.</li>
            <li><strong style={{ color: '#ff7e5f' }}>Actualizaciones:</strong> Acceso a todas las actualizaciones, incluyendo nuevas funcionalidades.</li>
          </ul>
          <p className="price">$59.99</p>
          <button className="subscribe-btn">Empezar</button>
        </div>
      </div>
    </section>
  );
}

export default DemoSection;
