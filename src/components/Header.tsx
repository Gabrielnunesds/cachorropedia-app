import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Importe o arquivo CSS aqui

const Header: React.FC = () => {
  return (
    <header>
      <h1>Enciclopédia de Cães</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/busca">Busca</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


