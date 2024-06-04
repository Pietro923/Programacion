// src/componentes/Work.js
import React from 'react';
import '../estilos/Work.css'; // Asegúrate de crear este archivo para estilos
import { FaHeart, FaLink } from 'react-icons/fa';
import img1 from '../imagenes/1.jpg';
import img2 from '../imagenes/2.jpg';
import img3 from '../imagenes/3.jpg';

const projects = [
    { imgSrc: img1, alt: 'Project 1' },
    { imgSrc: img2, alt: 'Project 2' },
    { imgSrc: img3, alt: 'Project 3' },
  ];

const Work = () => {
  return (
    <div className="work-section">
      <h1 className="work-title">NUESTRO TRABAJO</h1>
      <div className="work-categories">
        <span>ALL</span>
        <span> - </span>
        <span>UI/UX DESIGN</span>
        <span> - </span>
        <span>PROGRAMMING</span>
        <span> - </span>
        <span>PHOTOGRAPHY</span>
        <span> - </span>
        <span>ECOMMERCE</span>
      </div>
      <div className="work-gallery">
        {projects.map((project, index) => (
          <div className="work-item" key={index}>
            <img src={project.imgSrc} alt={project.alt} className="work-image" />
            <div className="work-overlay">
              <FaHeart className="work-icon" />
              <FaLink className="work-icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;

