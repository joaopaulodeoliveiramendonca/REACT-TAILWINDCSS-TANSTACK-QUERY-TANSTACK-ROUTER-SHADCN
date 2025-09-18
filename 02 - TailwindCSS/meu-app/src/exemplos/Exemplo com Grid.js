// src/App.js

/*
Explicação:

grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3: Usa grid para exibir 1 coluna em telas pequenas, 2 colunas em telas médias, e 3 colunas em telas grandes.

gap-6: Espaçamento entre os itens.
*/


import React from 'react';

function App() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 bg-gray-200">
      <div className="bg-blue-300 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-white">Item 1</h2>
      </div>
      <div className="bg-blue-500 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-white">Item 2</h2>
      </div>
      <div className="bg-blue-700 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-white">Item 3</h2>
      </div>
    </div>
  );
}

export default App;
