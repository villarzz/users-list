# Users List

## 🎯 Sobre o Projeto

**Este é um projeto de estudo focado no sistema de rotas do Angular.**

Users List é uma aplicação web desenvolvida em Angular 17 que consome a [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) para exibir informações de usuários e seus respectivos conteúdos. A aplicação oferece uma interface moderna e responsiva construída com Tailwind CSS, permitindo navegar entre diferentes usuários e visualizar suas tarefas (todos), posts e álbuns.

### 🛣️ Sistema de Roteamento - Nível Intermediário/Avançado

O projeto demonstra o uso de técnicas **intermediárias a avançadas** do sistema de rotas do Angular, incluindo:

- **Lazy Loading**: Carregamento sob demanda de componentes com `loadComponent` e `loadChildren` para otimização de performance
- **Rotas Aninhadas**: Estrutura de rotas pai-filho no componente user-area com múltiplos outlets
- **Parâmetros de Rota**: Uso de parâmetros dinâmicos (`user-area/:userId`) com binding automático via `withComponentInputBinding()`
- **Redirects e Navegação**: Configuração de redirecionamentos padrão e rotas vazias
- **Componentes Standalone**: Implementação moderna com lazy loading de componentes standalone do Angular 17
- **Code Splitting**: Organização modular com arquivos de rotas separados para melhor manutenibilidade

## ✨ Funcionalidades

- 📋 **Lista de Usuários**: Visualize todos os usuários cadastrados com suas informações básicas
- ✅ **Gerenciamento de Tarefas**: Acompanhe as tarefas (todos) de cada usuário
- 📝 **Posts**: Leia os posts publicados pelos usuários
- 🖼️ **Álbuns**: Navegue pelos álbuns de fotos dos usuários
- 🎨 **Interface Moderna**: Design responsivo e elegante com Tailwind CSS
- 🔄 **Navegação Fluida**: Sistema de rotas com Angular Router
- 🚀 **Componentes Standalone**: Arquitetura moderna do Angular 17

## 🛠️ Tecnologias Utilizadas

- **[Angular](https://angular.io/)** v17.3.0 - Framework principal
- **[TypeScript](https://www.typescriptlang.org/)** - Linguagem de programação
- **[Tailwind CSS](https://tailwindcss.com/)** v3.4.18 - Framework CSS
- **[RxJS](https://rxjs.dev/)** - Programação reativa
- **[Heroicons](https://heroicons.com/)** - Ícones SVG
- **[JSONPlaceholder API](https://jsonplaceholder.typicode.com/)** - API de dados fake

## 📦 Instalação

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Angular CLI

### Passos para instalação

1. Clone o repositório:
```bash
git clone https://github.com/villarzz/users-list.git
cd users-list
```

2. Instale as dependências:
```bash
npm install
```

## 🚀 Como Usar

### Servidor de Desenvolvimento

Execute o comando abaixo para iniciar o servidor de desenvolvimento:

```bash
npm start
# ou
ng serve
```

Navegue para `http://localhost:4200/`. A aplicação será recarregada automaticamente quando você modificar os arquivos.

### Build de Produção

Para compilar o projeto para produção:

```bash
npm run build
# ou
ng build
```

Os arquivos compilados serão armazenados no diretório `dist/`.

### Testes

Execute os testes unitários via [Karma](https://karma-runner.github.io):

```bash
npm test
# ou
ng test
```

### Modo Watch

Para desenvolvimento contínuo com rebuild automático:

```bash
npm run watch
# ou
ng build --watch --configuration development
```

## 📁 Estrutura do Projeto

```
users-list/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── users-list/      # Lista principal de usuários
│   │   │   └── user-area/       # Área detalhada do usuário
│   │   │       └── components/
│   │   │           ├── todos/   # Tarefas do usuário
│   │   │           ├── posts/   # Posts do usuário
│   │   │           └── albuns/  # Álbuns do usuário
│   │   ├── services/            # Serviços HTTP
│   │   ├── interfaces/          # Interfaces TypeScript
│   │   ├── types/               # Tipos customizados
│   │   └── pipes/               # Pipes personalizados
│   ├── assets/                  # Recursos estáticos
│   └── styles.css              # Estilos globais
├── angular.json                 # Configuração do Angular
├── tailwind.config.js          # Configuração do Tailwind
└── package.json                # Dependências do projeto
```

## 🎨 Recursos Visuais

A aplicação utiliza um design moderno com:
- Efeito de blur e transparência no container principal
- Sistema de cores baseado em zinc/cinza
- Layout responsivo e centralizado
- Ícones do Heroicons para melhor UX

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📄 Licença

Este projeto foi criado com [Angular CLI](https://github.com/angular/angular-cli) version 17.3.3.

## 📞 Contato

Para mais informações sobre o Angular CLI, use `ng help` ou visite a [documentação oficial do Angular CLI](https://angular.io/cli).
