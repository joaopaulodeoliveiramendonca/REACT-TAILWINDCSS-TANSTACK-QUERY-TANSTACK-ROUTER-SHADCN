TanStack Router é um sistema de roteamento para aplicações React e Solid, parte de uma suite de utilitários da TanStack, focado em segurança de tipos, navegação com tipos e gerenciamento eficiente de dados de rotas. Ele oferece recursos como navegação segura em termos de tipos, roteamento aninhado, carregadores de rota integrados com cache, pré-busca automática e geração de rotas baseada em arquivos, sendo uma alternativa moderna e poderosa ao React Router. 

https://tanstack.com/router/latest

# Início rápido

Se você estiver impaciente e preferir pular toda a nossa maravilhosa documentação, aqui está o mínimo necessário para começar a usar o TanStack Router usando geração de rotas baseada em arquivo e configuração de rotas baseada em código:

## Usando geração de rota baseada em arquivo

A geração de rotas baseada em arquivo (por meio do Vite e outros empacotadores suportados) é a maneira recomendada de usar o TanStack Router, pois fornece a melhor experiência, desempenho e ergonomia com o mínimo de esforço.

### Construindo seu primeiro projeto de roteador TanStack
```bash
npx create-tsrouter-app@latest my-app --template file-router
```
Veja `create-tsrouter-app` para mais opções.

### Configuração manual

Como alternativa, você pode configurar manualmente o projeto usando as seguintes etapas:

#### Instalar o TanStack Router, o Vite Plugin e o Router Devtools
```bash
npm install @tanstack/react-router @tanstack/react-router-devtools
npm install -D @tanstack/router-plugin
# or
pnpm add @tanstack/react-router @tanstack/react-router-devtools
pnpm add -D @tanstack/router-plugin
# or
yarn add @tanstack/react-router @tanstack/react-router-devtools
yarn add -D @tanstack/router-plugin
# or
bun add @tanstack/react-router @tanstack/react-router-devtools
bun add -D @tanstack/router-plugin
# or
deno add npm:@tanstack/react-router npm:@tanstack/router-plugin npm:@tanstack/react-router-devtools
```

#### Configurar o plugin Vite
```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Please make sure that '@tanstack/router-plugin' is passed before '@vitejs/plugin-react'
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    // ...,
  ],
})
```

#### Dica

Se você não estiver usando o Vite ou qualquer um dos empacotadores suportados, você pode conferir o guia TanStack Router CLI para mais informações.

### Crie os seguintes arquivos:

#### src/routes/__root.tsx (com dois caracteres ' _ ')
```typescript
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootLayout = () => (
  <>
    <div className="p-2 flex gap-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{' '}
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
    </div>
    <hr />
    <Outlet />
    <TanStackRouterDevtools />
  </>
)

export const Route = createRootRoute({ component: RootLayout })
```

#### src/rotas/index.tsx
```typescript
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  )
}
```

#### src/rotas/sobre.tsx
```typescript
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return <div className="p-2">Hello from About!</div>
}
```

#### src/main.tsx
Independentemente de você estar usando o pacote `@tanstack/router-plugin` e executando os scripts `npm run dev / npm run build` ou executando manualmente os comandos `tsr watch / tsr generate` a partir dos scripts do seu pacote, o arquivo da árvore de rotas será gerado em `src/routeTree.gen.ts`.

Importe a árvore de rotas gerada e crie uma nova instância de roteador:

```typescript
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}
```

Se você estiver trabalhando com esse padrão, deverá alterar o id da raiz `<div>` no seu arquivo `index.html` para `<div id='root'></div>`

## Usando configuração de rota baseada em código

### Importante

O exemplo a seguir mostra como configurar rotas usando código e, para simplificar, está em um único arquivo para esta demonstração. Embora a geração baseada em código permita declarar várias rotas e até mesmo a instância do roteador em um único arquivo, recomendamos dividir suas rotas em arquivos separados para melhor organização e desempenho à medida que sua aplicação cresce.

```typescript
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {
  Outlet,
  RouterProvider,
  Link,
  createRouter,
  createRoute,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const rootRoute = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: function Index() {
    return (
      <div className="p-2">
        <h3>Welcome Home!</h3>
      </div>
    )
  },
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: function About() {
    return <div className="p-2">Hello from About!</div>
  },
})

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute])

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('app')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}
```

Se você não entendeu esses exemplos ou não entendeu alguma coisa, não o culpamos, pois há muito mais a aprender para realmente aproveitar o TanStack Router! Vamos em frente.