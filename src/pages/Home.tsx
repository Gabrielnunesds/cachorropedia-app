import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h2>Página Inicial</h2>
      <p>Conteúdo da página inicial.</p>
      <Link to="/sobre">Ir para Sobre</Link>
      <Footer />
    </div>
  );
};

export default Home;


