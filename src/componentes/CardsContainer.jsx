// Este es el contenedor de las cards, aqui se usa el modelo que esta hecho en el otro archivo


import React from 'react';
import Card from '../componentes/Card.jsx';
import { FaPencilAlt, FaShapes, FaFont, FaLayerGroup, FaThLarge } from 'react-icons/fa';
import '../estilos/CardsContainer.css';

const cardData = [
  {
    icon: <FaPencilAlt />,
    title: "DESARROLLO A MEDIDA",
    description: "Creamos soluciones de software personalizadas que responden a las necesidades específicas de cada cliente."
  },
  {
    icon: <FaShapes />,
    title: "AUTOMATIZACIÓN",
    description: "Automatizamos procesos para aumentar la eficiencia y reducir errores humanos."
  },
  {
    icon: <FaFont />,
    title: "INTELIGENCIA ARTIFICIAL",
    description: "Implementamos tecnologías de IA para ofrecer soluciones innovadoras y avanzadas."
  },
  {
    icon: <FaLayerGroup />,
    title: "GESTIÓN DE PROYECTOS",
    description: "Gestionamos proyectos de principio a fin, asegurando una entrega puntual y de alta calidad."
  },
  {
    icon: <FaThLarge />,
    title: "DESARROLLO MÓVIL",
    description: "Desarrollamos aplicaciones móviles que ofrecen una excelente experiencia de usuario en todos los dispositivos."
  }
];

const CardsContainer = () => {
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <h1>¿Qué hacemos?</h1>
        <h2></h2>
        <p>Nosotros construimos soluciones digitales.</p>
      </div>
      <div className="cards-container">
        {cardData.map((card, index) => (
          <Card 
            key={index}
            icon={card.icon} 
            title={card.title} 
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
