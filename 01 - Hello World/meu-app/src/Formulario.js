import React, { useState } from 'react';

function Formulario() {
  const [nome, setNome] = useState("");

  const handleChange = (e) => {
    setNome(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Nome enviado: " + nome);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={nome} onChange={handleChange} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;

#Explicação:

#handleChange: Função para capturar e atualizar o estado do input.

#handleSubmit: Função que será executada ao submeter o formulário.
