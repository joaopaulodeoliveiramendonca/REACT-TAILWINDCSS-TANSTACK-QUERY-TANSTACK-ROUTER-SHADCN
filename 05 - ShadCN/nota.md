O TanStack Query (anteriormente conhecido como React Query) é uma biblioteca de busca de dados que facilita o gerenciamento de dados assíncronos (ou "estado do servidor") em aplicações web. Ele oferece funcionalidades como busca inteligente de dados, cache de consultas, atualizações em segundo plano, tratamento de erros e ferramentas para depuração, permitindo que os desenvolvedores mantenham os dados da interface do usuário sincronizados com os dados do servidor com menos esforço.

# Fase 3: TanStack Query

## 1. Introdução ao TanStack Query

### Instalar o TanStack Query
```bash
npm install @tanstack/react-query
```

Agora, configure o `QueryClient` e o `QueryClientProvider` no seu projeto:

#### src/index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Adicione a importação
import './index.css';
import App from './App';

// Criando a instância do QueryClient
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root')); 

root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>
);
```

Com isso, o TanStack Query já está configurado para ser usado em seu projeto.

## 2. Usando o useQuery para Buscar Dados

Vamos criar um exemplo onde o React faz uma requisição a uma API (por exemplo, uma lista de usuários) usando o `useQuery` do TanStack Query.

#### src/App.js
```javascript
import React from 'react';
import { useQuery } from '@tanstack/react-query';

function App() {
  // Função para buscar os dados
  const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
  };

  // Usando o useQuery para buscar dados
  const { data, error, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers
  });

  if (isLoading) return <h1>Carregando...</h1>;
  if (error) return <h1>Erro ao carregar os dados!</h1>;

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

#### Explicação:
- `useQuery(['users'], fetchUsers)`: Utiliza o `useQuery` para buscar os dados da API, passando um identificador único para a query e a função de busca (`fetchUsers`).
- `isLoading`: Estado para mostrar um carregamento enquanto os dados estão sendo buscados.
- `error`: Caso ocorra um erro durante a requisição.

## 3. Usando o useMutation para Operações de Escrita

Agora vamos usar o `useMutation` para fazer uma operação de escrita, como adicionar um novo usuário:

#### src/App.js
```javascript
import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const queryClient = useQueryClient();

  // Função para adicionar um novo usuário
  const addUser = async (newUser) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  };

  // Usando o useMutation para adicionar um usuário
  const mutation = useMutation(addUser, {
    onSuccess: () => {
      // Invalida a query para refazer a busca de usuários
      queryClient.invalidateQueries(['users']);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ name, email });
  };

  return (
    <div>
      <h1>Adicionar Novo Usuário</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Adicionar</button>
      </form>

      {mutation.isLoading ? (
        <p>Adicionando usuário...</p>
      ) : mutation.isError ? (
        <p>Erro ao adicionar usuário</p>
      ) : mutation.isSuccess ? (
        <p>Usuário adicionado com sucesso!</p>
      ) : null}
    </div>
  );
}

export default App;
```

#### Explicação:
- `useMutation(addUser)`: Usado para realizar operações de escrita (como um `POST`), neste caso para adicionar um novo usuário.
- `onSuccess`: Após a mutação ser bem-sucedida, invalidamos a query `['users']` para forçar uma nova busca e atualização dos dados.

## 4. Gerenciamento de Estado e Cache

O TanStack Query gerencia o cache de dados automaticamente. Podemos controlar o comportamento do cache e como ele deve ser invalidado ou refazido.

#### src/App.js
```javascript
import React from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

function App() {
  const queryClient = useQueryClient();

  // Função para buscar os dados
  const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
  };

  const { data, error, isLoading } = useQuery(['users'], fetchUsers, {
    cacheTime: 1000 * 60 * 5, // Mantém os dados no cache por 5 minutos
    staleTime: 1000 * 60 * 2, // Dados são considerados frescos por 2 minutos
  });

  if (isLoading) return <h1>Carregando...</h1>;
  if (error) return <h1>Erro ao carregar os dados!</h1>;

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

#### Explicação:
- `cacheTime`: O tempo que os dados permanecerão no cache, mesmo após não serem mais utilizados.
- `staleTime`: O tempo em que os dados serão considerados frescos antes de uma nova requisição ser feita.

Agora você já tem uma base de como usar o TanStack Query para realizar requisições, manipular dados e gerenciar cache no seu projeto React.
