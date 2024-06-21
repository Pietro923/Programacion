import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './componentes/componentes principales/navbar.jsx';
import Fondo from './componentes/componentes principales/fondo';
import CardsContainer from './componentes/componentes principales/CardsContainer';
import Work from './componentes/componentes principales/Work';
import Team from './componentes/componentes principales/team';
import Footer from './componentes/componentes principales/footer';
import Contacto from './componentes/componentes principales/contacto';
import Programa from './componentes/componentes del programa/programa';
import PaginaEjemplo from './componentes/componentes del ejemplo/pagejemplo.jsx';
import { ModalProvider } from './componentes/componentes del programa/ModalContext.jsx';

function App() {
  return (
    <Router>
      <ModalProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ingresar" element={<Programa />} />
            <Route path="/Tech Innovate" element={<PaginaEjemplo />} /> {/* Añade la nueva ruta */}
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