# Sistema de Cartão de Vacinação

## Modelagem de Dados

### Tipos TypeScript

#### Person (Pessoa)
```typescript
interface Person {
  id: string;           // Identificador único
  cpf: string;          // CPF da pessoa (formato: 000.000.000-00)
  name: string;         // Nome completo da pessoa
  createdAt?: Date;     // Data de criação (opcional)
  updatedAt?: Date;     // Data de atualização (opcional)
}
```

#### Vaccine (Vacina)
```typescript
interface Vaccine {
  id: string;           // Identificador único
  name: string;         // Nome da vacina
  code: string;         // Código da vacina
  createdAt?: Date;     // Data de criação (opcional)
  updatedAt?: Date;     // Data de atualização (opcional)
}
```

#### ImmunizationRecord (Registro de Vacinação)
```typescript
interface ImmunizationRecord {
  id: string;           // Identificador único
  personId: string;     // ID da pessoa vacinada
  vaccineId: string;    // ID da vacina aplicada
  date: Date;           // Data da vacinação
  dose?: number;        // Número da dose (opcional)
  notes?: string;       // Observações (opcional)
}
```

#### ImmunizationCard (Cartão de Vacinação)
```typescript
interface ImmunizationCard {
  id: string;                    // Identificador único
  personId: string;              // ID da pessoa
  person: Person;                // Dados da pessoa
  records: ImmunizationRecord[]; // Lista de registros de vacinação
  createdAt: Date;               // Data de criação
  updatedAt: Date;               // Data de atualização
}
```

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
   - Opção de deletar cartão (com confirmação)

### Navegação

- Sidebar lateral com links para todas as páginas
- Navegação responsiva usando React Router

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
```
