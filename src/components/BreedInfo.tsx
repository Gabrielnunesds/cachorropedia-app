import React from 'react';
import './BreedInfo.css';

type BreedInfoProps = {
  raça: string;
  imagens: string[];
};

const BreedInfo: React.FC<BreedInfoProps> = ({ raça, imagens }) => {
  return (
    <div className="breed-info">
      <h2>{raça}</h2>
      <div className="breed-images">
        {imagens.map((imagem, index) => (
          <img key={index} src={imagem} alt={raça} className="breed-image" />
        ))}
      </div>
    </div>
  );
};

export default BreedInfo;
