// src/App.js

/*
Explicação:

max-w-md w-full: O conteúdo tem uma largura máxima de md (meio), mas se adapta à largura total da tela se for menor.

sm:text-4xl: No tamanho de tela sm (pequena), o texto será maior.
*/

import React, { useState } from 'react';

function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-700 mb-4">Contador: {contador}</h1>
        <button 
          onClick={incrementar}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Incrementar
        </button>
      </div>
    </div>
  );
}

export default App;
