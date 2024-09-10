import React from 'react';
import { motion } from 'framer-motion';

function HeroSection() {
  const gradientAnimation = {
    background: 'linear-gradient(270deg, #e0e0e0, #f5f5f5, #ffffff, #d3d3d3)',
    backgroundSize: '400% 400%',
    animation: 'gradientAnimation 15s ease infinite',
    width: '100%'  // Se añade el width de 100%
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1.5 }}
      className="hero-section"
      style={gradientAnimation}
    >
      <style>
        {`
          @keyframes gradientAnimation {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          .hero-section {
            padding: 180px 330px;
            text-align: center;
            width: 100%; /* Se asegura que el contenido tenga 100% de ancho */
          }

          .hero-title {
            font-size: 3em;
            font-weight: 700;
            margin-bottom: 20px;
          }

          .demo-text {
            font-size: 14px; /* Ajusta según el tamaño que desees */
            font-weight: 300; /* Thin */
            color: #333; /* Color igual al del texto en el header */
            margin-top: 40px;
            margin-bottom: 40px;

          }

          .btn-primary {
            background-color: #ff7e5f;
            color: white;
            border: none;
            padding: 15px 30px;
            border-radius: 25px;
            font-size: 18px;
            cursor: pointer;
            transition: background-color 0.4s ease;
            margin-top: 40px;
          }

          .btn-primary:hover {
            background-color: #feb47b;
          }
        `}
      </style>
      <h1 className="hero-title">Mejora la Interacción con tus Clientes</h1>
      <motion.p
        className="demo-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.5, delay: 1 }}
      >
        Respuestas Inmediatas
      </motion.p>
      <motion.p
        className="demo-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.5, delay: 2 }}
      >
         Reducción de Costos
      </motion.p>
      <motion.p
        className="demo-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.5, delay: 3 }}
      >
         Más Ventas
      </motion.p>

      
    </motion.div>
  );
}

export default HeroSection;
