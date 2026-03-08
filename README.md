# Sistema de Cartão de Vacinação


## Arquitetura de Pastas

src/
├─ Api/               # Chamadas HTTP para backend
├─ Components/        # Componentes reutilizáveis
├─ Pages/             # Páginas do sistema
│  ├─ Home/
│  ├─ Vaccine/
│  └─ Card/
├─ types/             # Tipagens TypeScript
├─ utils/             # Funções utilitárias 
├─ App.tsx
├─ main.tsx

## Funcionalidades

### Páginas

1. **Home (/)** - Cadastro de pessoas
   - Formulário com campos CPF e Nome
   - Tabela com lista de pessoas cadastradas
   - Validação de campos obrigatórios

2. **Vacinas (/vaccine)** - Cadastro de vacinas
   - Formulário com campos Nome da Vacina e Código
   - Tabela com lista de vacinas cadastradas
   - Validação de campos obrigatórios

3. **Cartões (/card)** - Gerenciamento de cartões de vacinação
   - Tabela com lista de pessoas
   - Seleção de pessoa para visualizar detalhes
   - Opção de deletar dose

## Tecnologias Utilizadas

- React 18
- TypeScript
- Ant Design (UI Components)
- React Router DOM
- Vite (build tool)
- ESLint (linting)

## Como executar

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

## Acessar
http://localhost:5173/
```

## Integração com a API

A aplicação se comunica com o back-end através de requisições HTTP para a API.  
A base da URL da API é definida na constante:

```ts
// src/api/base.ts
export const BASE_URL = "http://localhost:5227/api";
```


## Futuras Melhorias

### 1. Docker
- Containerizar aplicação front-end e back-end
- Facilitar deploy e ambiente de desenvolvimento isolado

### 2. Paginação e Busca
- Implementar paginação nas tabelas de pessoas, vacinas e doses
- Permitir busca e filtro de registros por campos relevantes

### 3. Autenticação e Autorização
- Login e registro de usuários
- Proteção de rotas com roles/permissions
- Permitir que apenas usuários autorizados adicionem ou deletem doses

### 4. Testes
- Unitários (Jest + React Testing Library)
- End-to-end (Cypress)

### 5. Monitoramento e Logs
- Integração com serviços de monitoramento (ex: Sentry)
- Logging de erros para facilitar manutenção
