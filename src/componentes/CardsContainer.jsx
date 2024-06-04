// Este es el contenedor de las cards, aqui se usa el modelo que esta hecho en el otro archivo


import React from 'react';
import Card from '../componentes/Card.jsx';
import { FaPencilAlt, FaShapes, FaFont, FaLayerGroup, FaThLarge } from 'react-icons/fa';
import '../estilos/CardsContainer.css';

const cardData = [
  {
    icon: <FaPencilAlt />,
    title: "PIXEL PERFECT",
    description: "A user-friendly experience starts with pixel-perfect design."
  },
  {
    icon: <FaShapes />,
    title: "VECTOR SHAPES",
    description: "Our designs scale to any size, giving you flexibility and control."
  },
  {
    icon: <FaFont />,
    title: "GOOGLE FONTS",
    description: "We use the latest in font technology to ensure readability."
  },
  {
    icon: <FaLayerGroup />,
    title: "EASY LAYERS",
    description: "Our layered design approach simplifies complex problems."
  },
  {
    icon: <FaThLarge />,
    title: "BOOTSTRAP GRID",
    description: "We build with Bootstrap to create responsive, mobile-first projects."
  }
];

const CardsContainer = () => {
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <h1>WHAT WE DO</h1>
        <h2>EXPERTS</h2>
        <p>We build digital solutions.</p>
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
