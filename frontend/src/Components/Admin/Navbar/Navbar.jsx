import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import AppkademyLogo from "../../../assets/Logo.svg";
import './Navbar.scss'

function NavScrollExample() {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {

        const scrollY = window.scrollY;

        // Altura a partir de la cual se cambia el fondo (60px)
        const offset = 60;
    
        // Cambia el estado "scrolling" basado en si el scroll supera la altura definida
        setScrolling(scrollY > offset);
      };

    return (
        <header>
            <Navbar expand="lg" className={`fixed-top navbar-white`}>
                <Container fluid>
                    <Navbar.Brand href="/administracion"><img className='navbar__logo' src={AppkademyLogo} alt="Appkademy Logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        />
                        <Nav className="d-flex navbar__links__flex">
                            <Link className='navbar__link-secondary' to="/administracion/agregar-profesor">Agregar profesor</Link>
                            <Link className='navbar__link-primary' to="/administracion/profesores">Listar profesores</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default NavScrollExample;