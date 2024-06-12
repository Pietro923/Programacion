import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './componentes/navbar';
import Fondo from './componentes/fondo';
import CardsContainer from './componentes/CardsContainer';
import Work from './componentes/Work';
import Team from './componentes/team';
import Footer from './componentes/footer';
import Contacto from './componentes/contacto';
import Programa from './componentes/programa';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ingresar" element={<Programa />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => (
  <>
    <section id="inicio">
      <Fondo />
    </section>
    <section id="servicios">
      <CardsContainer />
    </section>
    <section id="productos">
      <Work />
    </section>
    <section id="equipo">
      <Team />
    </section>
    <section id="contacto">
      <Contacto />
    </section>
  </>
);

export default App;
