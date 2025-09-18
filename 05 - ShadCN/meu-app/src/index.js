// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Alterar a importação para 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';
import App from './App';

// Criando a instância do QueryClient
const queryClient = new QueryClient();

// Usando createRoot em vez de render
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>
);
