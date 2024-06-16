import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../estilos/estilos del ejemplo/NavbarEJ.css';

function NavbarEj() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav me-auto">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">Proyectos</a>
                        <a className="nav-link" href="#">Servicios</a>
                    </div>
                    <a className="navbar-brand mx-auto" href="#">Tech Innovate</a>
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link disabled" aria-disabled="true">Nosotros</a>
                        <a className="nav-link disabled" aria-disabled="true">Ingresar</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavbarEj;
