// src/App.js
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
