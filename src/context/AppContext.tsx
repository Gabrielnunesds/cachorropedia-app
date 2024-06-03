import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type AppContextType = {
  raças: string[];
  raçaSelecionada: string;
  setRaçaSelecionada: React.Dispatch<React.SetStateAction<string>>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [raças, setRaças] = useState<string[]>([]);
  const [raçaSelecionada, setRaçaSelecionada] = useState<string>('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => setRaças(Object.keys(data.message)));
  }, []);

  return (
    <AppContext.Provider value={{ raças, raçaSelecionada, setRaçaSelecionada }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext deve ser usado dentro de um AppProvider');
  }
  return context;
};
