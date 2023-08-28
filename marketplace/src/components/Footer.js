import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import '../styles/Footer.css';

function Footer() {

  const privacyTexts = ['Mapa do site', 'Cookies', 'Termos e Condições', 'Política de Privacidade', 'Sobre']

  return (
    <Navbar bg="light" className="justify-content-center footer-elements">
      
      
      <Container  className="text-center footer-text" style={{ padding: 10, marginBottom: 20, marginTop: 20 }}>
        <Container className='footer-media-social'>
          <a target="_blank"
            style={{ color: '#000', marginRight: 10 }}
            href='https://github.com/trkotovicz/backend-jr-tech-test'
            rel="noopener noreferrer">
            <BsGithub size={24} />
          </a>
          <a target="_blank"
            style={{ color: '#000', marginLeft: 10 }}
            href='https://www.linkedin.com/in/thaiskotovicz/'
            rel="noopener noreferrer">
            <BsLinkedin size={24} />
          </a>
        </Container>
        <Navbar.Text style={{ fontSize: 14 }}>{ privacyTexts.join(' | ') }</Navbar.Text>
        <Navbar.Text style={{ fontSize: 12 }}>© 2023 Bazar do Esporte. Todos os direitos reservados.</Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Footer;
