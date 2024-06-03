import React from 'react';
import './BreedSelector.css';

type BreedSelectorProps = {
  raças: string[];
  onSelecionarRaça: (raça: string) => void;
};

const BreedSelector: React.FC<BreedSelectorProps> = ({ raças, onSelecionarRaça }) => {
  return (
    <select onChange={(e) => onSelecionarRaça(e.target.value)} className="breed-selector">
      <option value="">Selecione uma raça</option>
      {raças.map((raça) => (
        <option key={raça} value={raça}>
          {raça}
        </option>
      ))}
    </select>
  );
};

export default BreedSelector;


