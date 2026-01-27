# ⚡ Quick Start - Personalização Rápida

## 5 Minutos para Personalizar

### 1️⃣ **Nome e Funções** 
Ficheiro: `src/components/Hero.jsx`

**Linha 423:**
```javascript
DIOGO TEIXEIRA → SEU NOME COMPLETO
```

**Linhas 47-48 (Inglês) e 144-145 (Português):**
```javascript
role1: "AI ENGINEER" → "SUA FUNÇÃO 1",
role2: "FULL STACK DEVELOPER" → "SUA FUNÇÃO 2",
```

---

### 2️⃣ **Contatos**
Ficheiro: `src/components/Hero.jsx` (linhas 700-730)

```javascript
+351 931 069 434 → Seu telefone
diogoluisteixeira@gmail.com → Seu email
linkedin.com/in/diogo-teixeira-9b108423b/ → Seu LinkedIn
github.com/Dee-Tee11 → Seu GitHub
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

**Não esqueça de adicionar as traduções!** Ver linhas 52-82 (EN) e 149-178 (PT).

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

**Não esqueça de adicionar as traduções!** Ver linhas 83-113 (EN) e 179-209 (PT).

---

### 5️⃣ **Skills**
Ficheiro: `src/components/Hero.jsx`

**Tech Stack (linhas 568-576):**
```javascript
items: [
    'Technology 1 / Framework 1',
    'Technology 2 / Framework 2',
    // Replace with your technologies...
]
```

**Soft Skills (linhas 120-128 EN, 215-223 PT):**
```javascript
softList: [
    "Skill Example 1",
    "Skill Example 2",
    // Replace with your soft skills...
]
```

**Languages (linhas 131-134 EN, 226-229 PT):**
```javascript
languageList: [
    "Language 1 (Proficiency Level)",
    "Language 2 (Proficiency Level)",
    // Add your languages...
]
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
