/*
* Explicação:
*
* Desestruturação de objetos diretamente nas props.
*
* Spread operator (...) para passar todas as propriedades do objeto para o componente.
*/

import React from 'react';

function Desestruturacao({ nome, idade }) {
  // Desestruturando as props
  return (
    <div>
      <h1>Nome: {nome}</h1>
      <p>Idade: {idade}</p>
    </div>
  );
}

function App() {
  const usuario = { nome: 'João', idade: 25 };

  return (
    <div>
      {/* Usando spread para passar props */}
      <Desestruturacao {...usuario} />
    </div>
  );
}

export default App;