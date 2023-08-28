import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BiHelpCircle, BiMailSend } from 'react-icons/bi';
import { BsHeartFill, BsPersonFill } from 'react-icons/bs';
import { FaCartShopping } from 'react-icons/fa6';
import { FcSportsMode } from 'react-icons/fc';
import { ImWhatsapp } from 'react-icons/im';
import '../styles/Navbar.css';

function AppNavbar() {
  return (
    <Navbar expand="lg">

      <Container className='nav-text-container nav-container'>
        <Nav.Link>Compre pelo Whatsapp
          {' '}
          <ImWhatsapp size={12} />
        </Nav.Link>
        <Nav.Link>Frete grátis para compras acima de R$ 150,00
          {' '}
          <BiMailSend size={17} />
        </Nav.Link>
        <Nav.Link>Ajuda
          {' '}
          <BiHelpCircle size={15} />
        </Nav.Link>
      </Container>

      <Container className='nav-container nav-logo'>
        <FcSportsMode size={60} />
        <Navbar.Brand href="#home">Bazar do Esporte</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="mr-auto">
            <BsPersonFill className='me-2' size={22} />
            <BsHeartFill className='me-2' size={22} />
            <FaCartShopping size={22} />
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
}

export default AppNavbar;
