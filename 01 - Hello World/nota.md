React é uma biblioteca JavaScript de código aberto, criada pelo Facebook, para desenvolver interfaces de usuário (UIs) interativas em aplicações web e móveis. Ela funciona através da criação de componentes reutilizáveis e encapsulados, que gerenciam o próprio estado e podem ser combinados para construir UIs complexas de forma eficiente e escalável, especialmente em aplicações de página única (SPAs). 

# https://react.dev/learn

# Fase 1: Fundamentos do React

## 1. Introdução ao React

### Criação do projeto React usando o Create React App
```bash
npx create-react-app meu-app
cd meu-app
npm start
```

#### src/App.js
```javascript
import React, { useState } from 'react';

function App() {
  // useState para criar um estado no componente
  const [contador, setContador] = useState(0);

  // Função para incrementar o contador
  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      {/* Botão para incrementar o contador */}
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default App;
```

#### Explicação:
- `useState`: Hook que permite criar um estado em um componente funcional.
- `onClick`: Evento de clique no botão para incrementar o contador.

## 2. Manipulação de Formulários e Eventos

#### src/Formulario.js
```javascript
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
```

#### Explicação:
- `handleChange`: Função para capturar e atualizar o estado do input.
- `handleSubmit`: Função que será executada ao submeter o formulário.

## 3. Ciclo de Vida e useEffect

#### src/App.js
```javascript
import React, { useState, useEffect } from 'react';

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
    </div>
  );
}

export default App;
```

#### Explicação:
- `useEffect`: Usado para executar um efeito colateral, como atualizações no DOM ou chamadas de API.
- A dependência `[contador]` faz com que o efeito seja executado sempre que o contador mudar.

## 4. Desestruturação, Spreads, e Funcionalidades Avançadas

#### src/Desestruturacao.js
```javascript
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
```

#### Explicação:
- Desestruturação de objetos diretamente nas props.
- Spread operator (`...`) para passar todas as propriedades do objeto para o componente.
