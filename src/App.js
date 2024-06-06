// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/navbar';
import Fondo from './componentes/fondo';
import CardsContainer from './componentes/CardsContainer';
import Work from './componentes/Work';
import Team from './componentes/team';
import Footer from './componentes/footer';
import Contacto from './componentes/contacto';
import Programa from './componentes/programa.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<CardsContainer />} />
          <Route path="/productos" element={<Work />} />
          <Route path="/equipo" element={<Team />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/ingresar" element={<Programa />} /> {/* Ruta para la nueva página */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => (
  <>
  <Fondo />
    <CardsContainer />
    <Work />
    <Team />
    <Contacto />
  </>
);

export default App;


