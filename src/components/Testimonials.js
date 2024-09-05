import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">Lo que nuestros clientes felices dicen de nosotros</h2>
      <div className="testimonials-cards">
        <div className="testimonial-card">
          <div className="testimonial-stars">
            <span>★★★★★</span>
          </div>
          <p className="testimonial-text">"El chatbot ha sido un cambio increíble en nuestro negocio. Las respuestas automáticas ayudan a nuestros clientes a obtener información rápida, mientras que nosotros nos enfocamos en las ventas. ¡Totalmente recomendable!"</p>
          <div className="testimonial-author">
            <img src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png" alt="Leslie Alexander" className="testimonial-avatar" />
            <div>
              <p className="testimonial-name">Carlos R.</p>
              <p className="testimonial-role">Propietario de tienda en línea</p>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-stars">
            <span>★★★★★</span>
          </div>
          <p className="testimonial-text">"Desde que implementamos el chatbot, la interacción con los clientes ha mejorado enormemente. ¡Nos ha ahorrado mucho tiempo en soporte!"</p>
          <div className="testimonial-author">
            <img src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png" alt="Jacob Jones" className="testimonial-avatar" />
            <div>
              <p className="testimonial-name">Javier F.</p>
              <p className="testimonial-role">Gerente de atención al cliente</p>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-stars">
            <span>★★★★★</span>
          </div>
          <p className="testimonial-text">"El chatbot nos permitió automatizar consultas repetitivas, y el equipo ahora se dedica a tareas más estratégicas. ¡Increíble herramienta!"</p>
          <div className="testimonial-author">
            <img src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png" alt="Jenny Wilson" className="testimonial-avatar" />
            <div>
              <p className="testimonial-name">Ana M.</p>
              <p className="testimonial-role">CEO de agencia de marketing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
