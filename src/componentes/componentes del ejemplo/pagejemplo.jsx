import React from 'react';
import '../../estilos/pagejemplo.css'; // Importar el archivo CSS de la nueva página
import NavbarEj from '../componentes del ejemplo/NavbarEJ';
import FondoEJ from '../componentes del ejemplo/FondoEJ'; // Importar el componente FondoEJ
import MisionEj from '../componentes del ejemplo/MisionEJ';
import CardEJ from '../componentes del ejemplo/CardEJ';
import TextoEJ from '../componentes del ejemplo/TextoEJ';
import TextoEJ2 from '../componentes del ejemplo/TextoEJ2';
import ClientesEJ from '../componentes del ejemplo/ClientesEJ';
import TestimoniosEJ from '../componentes del ejemplo/TestimoniosEJ';
import ContactanosEJ from '../componentes del ejemplo/ContactanosEJ';
import FooterEJ from '../componentes del ejemplo/FooterEJ';

function PaginaEjemplo() {
  return (
    <>
      <NavbarEj />
      <FondoEJ /> {/* Renderizar el componente FondoEJ */}
      <MisionEj />
      <TextoEJ /> 
      <CardEJ />
      <TextoEJ2 />
      <ClientesEJ/>
      <TestimoniosEJ/>
      <ContactanosEJ/>
      <FooterEJ/>
    </>
  );
}

export default PaginaEjemplo;
