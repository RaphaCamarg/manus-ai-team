# iGreen Energy - Website

Site de apresentação e captação de leads para a iGreen Energy, plataforma de energia solar por assinatura.

## 🚀 Tecnologias

- **React 19** - Framework de UI
- **Tailwind CSS 4** - Estilização
- **Vite** - Build tool
- **TypeScript** - Tipagem estática
- **shadcn/ui** - Componentes de UI

## 📋 Funcionalidades

- ✅ Página inicial com hero section
- ✅ Calculadora de economia solar
- ✅ Seletor de estados com dados de economia
- ✅ Depoimentos de clientes
- ✅ Cases de sucesso com vídeos
- ✅ Programa de licenciados
- ✅ FAQ interativa
- ✅ Pop-up inteligente de captura de leads
- ✅ Links de WhatsApp integrados
- ✅ Design responsivo

## 🛠️ Instalação Local

```bash
# Clonar o repositório
git clone https://github.com/RaphaCamarg/manus-ai-team.git
cd manus-ai-team

# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview do build
pnpm preview
```

## 🚀 Deploy no Vercel

Este projeto está configurado para fazer deploy automático no Vercel.

### Opção 1: Deploy Automático (Recomendado)

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Selecione o repositório `manus-ai-team`
4. Clique em "Deploy"

O Vercel detectará automaticamente que é um projeto Vite e fará o build correto.

### Opção 2: Deploy Manual via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer deploy
vercel

# Deploy em produção
vercel --prod
```

## 📁 Estrutura do Projeto

```
├── client/
│   ├── public/           # Arquivos estáticos (imagens, vídeos)
│   ├── src/
│   │   ├── components/   # Componentes React reutilizáveis
│   │   ├── pages/        # Páginas da aplicação
│   │   ├── App.tsx       # Componente raiz
│   │   └── main.tsx      # Ponto de entrada
│   └── index.html        # HTML principal
├── vercel.json           # Configuração do Vercel
├── vite.config.ts        # Configuração do Vite
├── tsconfig.json         # Configuração do TypeScript
└── package.json          # Dependências do projeto
```

## 🔧 Configuração

### Variáveis de Ambiente

Nenhuma variável de ambiente é necessária para o funcionamento básico do site.

### Customização

- **Logo**: Editar `client/src/const.ts` - constante `APP_LOGO`
- **Título**: Editar `client/src/const.ts` - constante `APP_TITLE`
- **Cores**: Editar `client/src/index.css` - variáveis CSS
- **Conteúdo**: Editar `client/src/pages/Home.tsx`

## 📞 Links de Contato

- WhatsApp Clientes: `https://wa.me/5592981697878?text=Olá%2C%20quero%20economizar%20na%20minha%20conta%20de%20energia!`
- WhatsApp Licenciados: `https://wa.me/5592981697878?text=Olá%2C%20quero%20ser%20um%20licenciado%20da%20IGreen%20Energy!`

## 📝 Licença

Todos os direitos reservados © 2025 iGreen Energy

## 👨‍💻 Desenvolvido com Manus

Este projeto foi desenvolvido com a plataforma Manus AI.
