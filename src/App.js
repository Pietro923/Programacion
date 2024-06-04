import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/navbar';
import Fondo from './componentes/fondo';
import CardsContainer from './componentes/CardsContainer';
import Work from './componentes/Work';
import Team from './componentes/team';
import Footer from './componentes/footer';
import Contacto from './componentes/contacto';
import Ingresar from './componentes/ingresar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Fondo />
      <CardsContainer />
      <Work />
      <Team />
      <Contacto />
      <Ingresar />
      <Footer />
    </div>
  );
}

export default App;