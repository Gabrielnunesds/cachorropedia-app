import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Busca from './pages/Busca';
import { AppProvider } from './context/AppContext';
import './App.css'; 

const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="App">
        <header>
          <h1>Enciclopédia de Cães</h1>
          
        </header>
        <main>
          <Router>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/busca" element={<Busca />} />
            </Routes>
          </Router>
        </main>
      </div>
    </AppProvider>
  );
};

export default App;

