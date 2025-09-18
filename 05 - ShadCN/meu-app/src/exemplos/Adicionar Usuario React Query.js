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
  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      // Invalida a query para refazer a busca de usuários
      queryClient.invalidateQueries(['users']);
    },
    onError: (error) => {
      console.error("Erro ao adicionar usuário:", error);
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
