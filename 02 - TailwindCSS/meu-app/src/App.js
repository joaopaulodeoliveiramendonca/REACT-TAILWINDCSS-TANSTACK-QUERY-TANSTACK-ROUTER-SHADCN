/*
Explicação:

flex justify-center items-center h-screen: Centra o conteúdo da tela.

bg-gray-100: Fundo cinza claro.

text-4xl font-bold text-gray-700: Define o estilo do título.

px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600: Estilo do botão, com hover e bordas arredondadas.
*/

import React, { useState } from 'react';

function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-700 mb-4">Contador: {contador}</h1>
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
