import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './componentes/navbar';
import Fondo from './componentes/fondo';
import CardsContainer from './componentes/CardsContainer';
import Work from './componentes/Work';
import Team from './componentes/team';
import Footer from './componentes/footer';
import Contacto from './componentes/contacto';
import Programa from './componentes/programa';
import PaginaEjemplo from './componentes/pagejemplo.jsx';
import { ModalProvider } from './componentes/ModalContext.jsx';

function App() {
  return (
    <Router>
      <ModalProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ingresar" element={<Programa />} />
            <Route path="/nueva-pagina" element={<PaginaEjemplo />} /> {/* Añade la nueva ruta */}
          </Routes>
        </div>
      </ModalProvider>
    </Router>
  );
}

const Home = () => (
  <>
    <NavigationBar />
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
    <Footer />
  </>
);

export default App;
