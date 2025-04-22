# 📁 Portfólio WSIS – Minicurso

Bem-vindo ao minicurso de desenvolvimento de portfólio da **WSIS**, na semana acadêmica do curso de Sistemas de Informação da Universidade Federal de Viçosa!  
Este projeto é uma configuração inicial para criar seu próprio portfólio usando tecnologias modernas como **React**, **TypeScript** e **Vite**.

O ambiente já vem com suporte a **HMR** (*Hot Module Replacement*) para uma experiência de desenvolvimento mais fluida.

---

## 🚀 Tecnologias Utilizadas

- **React + TypeScript + Vite** – Desenvolvimento moderno, rápido e eficiente.
- **HMR (Hot Module Replacement)** – Atualizações instantâneas no navegador.
- **ESLint** – Regras iniciais para garantir um código limpo e padronizado.
- **Plugins Oficiais do React** – Suporte a Babel ou SWC para *Fast Refresh* (você escolhe).

---

## ⚙️ Configuração Adicional

Se estiver criando uma aplicação para **produção**, considere expandir a configuração do ESLint para melhorar a qualidade do código e suporte a tipos:

```ts
parserOptions: {
  ecmaVersion: 'latest',
  sourceType: 'module',
  project: ['./tsconfig.json', './tsconfig.node.json'],
  tsconfigRootDir: __dirname,
}
```

📌 Substitua o pacote:

```
plugin:@typescript-eslint/recommended
```

Por uma das opções abaixo:

- `plugin:@typescript-eslint/recommended-type-checked`
- `plugin:@typescript-eslint/strict-type-checked`

E opcionalmente adicione:

- `plugin:@typescript-eslint/stylistic-type-checked`

---

## 🧑‍💻 Como Usar

1. Clone este repositório:
   ```bash
   git clone https://github.com/herculesoliverr/portfolio-wsis-2023.git
   ```

2. Instale as dependências:
   ```bash
   yarn install
   ```

3. Personalize o conteúdo conforme suas necessidades.

4. Inicie o servidor de desenvolvimento:
   ```bash
   yarn dev
   ```

5. Acesse [http://localhost:3000](http://localhost:3000) para visualizar o seu portfólio.

---

## 🤝 Contribuindo

Este projeto é aberto para contribuições!  
Sinta-se à vontade para enviar *pull requests*, relatar problemas ou sugerir melhorias.

Juntos podemos tornar essa ferramenta ainda mais útil para todos 🚀

---

## ✨ Aproveite o minicurso e crie um portfólio incrível!

Este é um modelo básico com as informações essenciais.  
Sinta-se livre para adaptar conforme seu estilo e adicionar novos recursos.
