# ⚡ Quick Start - Personalização Rápida

## 5 Minutos para Personalizar

### 1️⃣ **Nome e Funções** 
Ficheiro: `src/components/Hero.jsx`

**Linhas 46-48 (Inglês / English):**
```javascript
name: "YOUR NAME",
role1: "YOUR ROLE 1",
role2: "YOUR ROLE 2",
```

**Linhas 160-162 (Português):**
```javascript
name: "SEU NOME",
role1: "SUA FUNÇÃO 1",
role2: "SUA FUNÇÃO 2",
```

---

### 2️⃣ **Contatos**
Ficheiro: `src/components/Hero.jsx` (linhas 700-730)

```javascript
+351 9XX XXX XXX → Seu telefone
seu.email@exemplo.com → Seu email
linkedin.com/in/seu-perfil → Seu LinkedIn
github.com/seu-user → Seu GitHub
```

---

### 3️⃣ **Experiências**
Ficheiro: `src/components/Hero.jsx` (linhas 468-520)

Edite ou copie este exemplo:

```jsx
<ExperienceCard
    company="Sua Empresa"
    period="JAN 2024 - PRESENT"
    role="Seu Cargo"
    descriptions={[
        "► O que você fez.",
        "► Suas responsabilidades.",
        "► Suas conquistas."
    ]}
    stack="React, Python, etc"
    isMobile={isMobile}
/>
```

**Inglês (Linhas 54-82):**
```javascript
experience: {
    company1: {
        company: "Current Company Name",
        period: "MON YEAR - PRESENT",
        role: "Your Job Title",
        stack: "Your Tech Stack Here",
        desc1: "► Your responsibility...",
        // ...
    }
}
```

**Português (Linhas 169-199):**
```javascript
experience: {
    company1: {
        company: "Nome da Empresa Atual",
        period: "MÊS ANO - PRESENTE",
        role: "Seu Cargo",
        stack: "Sua Stack Tecnológica",
        desc1: "► Sua responsabilidade...",
        // ...
    }
}
```

---

### 4️⃣ **Projetos**
Ficheiro: `src/components/Hero.jsx` (linhas 527-558)

```jsx
<ProjectCard
    title="SEU PROJETO"
    description="Descrição do projeto"
    highlights={["► Destaque 1", "► Destaque 2"]}
    stack="TECH • STACK • AQUI"
    link="https://seu-projeto.com"
    isMobile={isMobile}
/>
```

**Inglês (Linhas 86-116):**
```javascript
projects: {
    project1: {
        title: "YOUR MAIN PROJECT",
        desc: "Description in English...",
        highlights: ["► Highlight 1", "► Highlight 2"]
    }
}
```

**Português (Linhas 200-230):**
```javascript
projects: {
    project1: {
        title: "SEU PROJETO PRINCIPAL",
        desc: "Descrição em Português...",
        highlights: ["► Destaque 1", "► Destaque 2"]
    }
}
```

---

### 5️⃣ **Skills**
Ficheiro: `src/components/Hero.jsx`

**Inglês (Linhas 118-134):**
```javascript
techList: [ "Technology 1", "Technology 2" ],
softList: [ "Skill 1", "Skill 2" ],
languageList: [ "Language 1" ]
```

**Português (Linhas 215-230):**
```javascript
techList: [ "Tecnologia 1", "Tecnologia 2" ],
softList: [ "Competência 1", "Competência 2" ],
languageList: [ "Idioma 1" ]
```

---

## 🚀 Executar

```bash
npm install
npm run dev
```

Abra: `http://localhost:5173`

---

## 📖 Guia Completo

Para mais detalhes, veja: [TEMPLATE_GUIDE.md](./TEMPLATE_GUIDE.md)
