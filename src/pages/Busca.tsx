import React, { useState } from 'react';
import axios from 'axios';

interface DogBreedInfo {
  name: string;
  temperament?: string;
  lifeSpan?: string;
}

const BuscaCachorros: React.FC = () => {
  const [raçaSelecionada, setRaçaSelecionada] = useState('');
  const [dogInfo, setDogInfo] = useState<DogBreedInfo | null>(null);
  const [dogImage, setDogImage] = useState<string | null>(null);
  const [erro, setErro] = useState<string>('');

  const raças = ['labrador', 'bulldog', 'beagle', 'poodle', 'boxer', 'dachshund','germanshepherd', 'husky', 'pug', 'chihuahua'];

  const handleSelectChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const raça = event.target.value;
    setRaçaSelecionada(raça);
    try {
      const response = await axios.get(`https://dog.ceo/api/breed/${raça}/images/random`);
      setDogImage(response.data.message);
      const breedInfoResponse = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${raça}`);
      if (breedInfoResponse.data.length > 0) {
        const breedInfo = breedInfoResponse.data[0];
        setDogInfo({
          name: breedInfo.name,
          temperament: breedInfo.temperament,
          lifeSpan: breedInfo.life_span,
        });
      } else {
        setDogInfo({ name: raça.charAt(0).toUpperCase() + raça.slice(1) });
      }
      setErro('');
    } catch (error) {
      setErro('Erro ao buscar informações sobre a raça de cachorro. Verifique se a raça selecionada está correta.');
      setDogInfo(null);
      setDogImage(null);
    }
  };

  return (
    <div>
      <h2>Selecione uma Raça de Cachorro</h2>
      <select value={raçaSelecionada} onChange={handleSelectChange}>
        <option value="">Selecione uma raça</option>
        {raças.map(raça => (
          <option key={raça} value={raça}>{raça.charAt(0).toUpperCase() + raça.slice(1)}</option>
        ))}
      </select>
      {dogInfo && (
        <div>
          <h3>Informações sobre a raça:</h3>
          <p>Nome: {dogInfo.name}</p>
          {dogInfo.temperament && <p>Temperamento: {dogInfo.temperament}</p>}
          {dogInfo.lifeSpan && <p>Expectativa de vida: {dogInfo.lifeSpan}</p>}
        </div>
      )}
      {dogImage && <img src={dogImage} alt="Cachorro" style={{ width: '200px', height: 'auto', margin: '5px' }} />}
      {erro && <p>{erro}</p>}
    </div>
  );
};

export default BuscaCachorros;






