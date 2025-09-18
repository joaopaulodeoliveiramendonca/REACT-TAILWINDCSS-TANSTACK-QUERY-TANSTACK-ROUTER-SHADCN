// src/App.js
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
