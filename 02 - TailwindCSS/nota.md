Tailwind CSS é um framework CSS com abordagem "utility-first" que permite criar interfaces web aplicando classes utilitárias diretamente no HTML, em vez de escrever CSS em arquivos separados. Ele oferece um conjunto de classes pré-definidas para estilos individuais (como cor, espaçamento, fonte) e permite construir layouts responsivos e customizados de forma rápida e consistente, sem a necessidade de criar nomes de classe genéricos.

# Fase 2: TailwindCSS

## 1. Introdução ao TailwindCSS

### Instalar o TailwindCSS no projeto React
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

Depois, configure o `tailwind.config.js` para habilitar a purgação de CSS não utilizado, ajustando a configuração:

#### tailwind.config.js
```javascript
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Agora, no arquivo CSS global, adicione as diretivas do TailwindCSS para importar os estilos principais:

#### src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

No seu `index.js`, importe o arquivo `index.css`:

#### src/index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

## 2. Usando Classes Utilitárias do TailwindCSS

Agora, vamos usar algumas classes do TailwindCSS para estilizar os componentes.

#### src/App.js
```javascript
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
```

#### Explicação:
- `flex justify-center items-center h-screen`: Centra o conteúdo da tela.
- `bg-gray-100`: Fundo cinza claro.
- `text-4xl font-bold text-gray-700`: Define o estilo do título.
- `px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600`: Estilo do botão, com hover e bordas arredondadas.

## 3. Design Responsivo com TailwindCSS

Vamos agora adicionar algumas classes responsivas, usando breakpoints para ajustar o layout.

#### src/App.js
```javascript
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
```

#### Explicação:
- `max-w-md w-full`: O conteúdo tem uma largura máxima de md (meio), mas se adapta à largura total da tela se for menor.
- `sm:text-4xl`: No tamanho de tela sm (pequena), o texto será maior.

## 4. Trabalhando com Flexbox e Grid no TailwindCSS

Tailwind facilita a utilização de Flexbox e Grid para layouts mais complexos.

### Exemplo com Flexbox:

#### src/App.js
```javascript
import React from 'react';

function App() {
  return (
    <div className="flex flex-wrap justify-around items-center h-screen bg-gray-200">
      <div className="bg-blue-300 p-6 m-4 rounded-lg w-60">
        <h2 className="text-xl font-semibold text-white">Item 1</h2>
      </div>
      <div className="bg-blue-500 p-6 m-4 rounded-lg w-60">
        <h2 className="text-xl font-semibold text-white">Item 2</h2>
      </div>
      <div className="bg-blue-700 p-6 m-4 rounded-lg w-60">
        <h2 className="text-xl font-semibold text-white">Item 3</h2>
      </div>
    </div>
  );
}

export default App;
```

#### Explicação:
- `flex flex-wrap justify-around items-center`: Flexbox para distribuir os itens ao redor e centralizá-los.
- `w-60`: Largura fixa para cada item.
- `m-4`: Margem entre os itens.

### Exemplo com Grid:

#### src/App.js
```javascript
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
```

#### Explicação:
- `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`: Usa grid para exibir 1 coluna em telas pequenas, 2 colunas em telas médias, e 3 colunas em telas grandes.
- `gap-6`: Espaçamento entre os itens.
