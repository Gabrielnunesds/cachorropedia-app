import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Sobre: React.FC = () => {
  return (
    <div>
      
      <h2>Sobre</h2>
      <p>Conteúdo da página Sobre.</p>
      <Link to="/">Voltar para Home</Link>
      <Footer />
    </div>
  );
};

export default Sobre;


