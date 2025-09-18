/*
*
* Explicação:
*
* useState: Hook que permite criar um estado em um componente funcional.
*
* onClick: Evento de clique no botão para incrementar o contador.
*
* useEffect: Usado para executar um efeito colateral, como atualizações no DOM ou * * chamadas de API.
*
* A dependência [contador] faz com que o efeito seja executado sempre que o contador * * mudar.
*
*/

// src/App.js
import React, { useState, useEffect } from 'react';
import Formulario from './Formulario'; // Importe o componente Formulario

function App() {
  const [contador, setContador] = useState(0);

  // Hook useEffect para realizar um efeito colateral
  useEffect(() => {
    console.log("O componente foi montado ou o contador foi atualizado!");
  }, [contador]); // Dependência no contador

  const incrementar = () => setContador(contador + 1);

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar}>Incrementar</button>

      <h2>Formulário:</h2>
      <Formulario /> {/* Aqui você está acessando e exibindo o formulário */}
    </div>
  );
}

export default App;
