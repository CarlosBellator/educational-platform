# EduLearn — Plataforma educacional (em desenvolvimento)

Este repositório contém um projeto **em desenvolvimento** de uma plataforma educacional construída com **Node.js**, **Express** e **EJS**.

> Status: **fase inicial / protótipo** (não é MVP ainda).  
> Objetivo atual: estruturar servidor, templates e layout das telas.

---

## Tecnologias

- **Node.js**
- **Express**
- **EJS** (templates)
- **HTML/CSS**
- **JavaScript**

---

## O que já existe (até agora)

- Servidor Express configurado
- Engine de views configurada com **EJS**
- Arquivos estáticos servidos via pasta `public`
- Rotas iniciais:
  - `GET /login` (renderiza template EJS)
  - `GET /cadastro` (renderiza template EJS)

---

## Estrutura do projeto (atual)

```text
.
├─ app.js
├─ package.json
├─ package-lock.json
├─ public/
│  ├─ css/
│  │  └─ styles.css
│  ├─ login.html
│  └─ cadastro.html
└─ views/
   ├─ login.ejs
   ├─ cadastro.ejs
   └─ partials/
      ├─ header.ejs
      └─ footer.ejs
```

> Observação: existem versões HTML estáticas em `public/` e versões EJS em `views/`. A intenção pode ser manter apenas EJS conforme a aplicação evoluir.

---

## Como rodar localmente

### Pré-requisitos
- Node.js (recomendado: LTS)
- npm

### Instalação
```bash
npm install
```

### Executar
No momento, rode diretamente:

```bash
node app.js
```

A aplicação sobe na porta **8000**. Acesse:
- `http://localhost:8000/login`
- `http://localhost:8000/cadastro`

---

## Próximos passos (ideias)

- [ ] Definir escopo e requisitos (para evoluir até um MVP)
- [ ] Organizar estrutura de pastas (routes/controllers/services)
- [ ] Criar rotas `POST` para login e cadastro
- [ ] Conectar banco de dados (ex.: PostgreSQL/MySQL/SQLite)
- [ ] Implementar autenticação (sessão/JWT)
- [ ] Criar área logada do aluno
- [ ] Criar gestão de cursos/aulas/módulos
- [ ] Melhorar validação e tratamento de erros

---

## Licença

Ainda não definida.
