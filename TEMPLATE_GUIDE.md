# 🚀 Portfolio Template - Guia de Personalização

Este é um template de portfólio 3D interativo com estética cyberpunk/retro. Siga este guia para personalizar com as suas informações.

---

## 📝 Como Personalizar

### 1. **Informações Pessoais** (Nome, Roles, Contato)

Edite o ficheiro: `src/components/Hero.jsx`

#### 1.1 Nome e Sobrenome
**Linhas 396-423** - Altere o nome:

```javascript
<motion.h1>
    SEU NOME COMPLETO  // ← Altere aqui
</motion.h1>
```

#### 1.2 Roles/Funções
**Linhas 425-428** - Altere as suas funções:

```javascript
<p>
    {t.role1}<br />  // ← Edite role1 nas traduções (linha 47-48 e 144-145)
    {t.role2}        // ← Edite role2 nas traduções
</p>
```

**Nas traduções (linhas 47-48 para Inglês, 144-145 para Português):**
```javascript
role1: "SUA FUNÇÃO PRINCIPAL",
role2: "SUA FUNÇÃO SECUNDÁRIA",
```

#### 1.3 Perfil/Bio
**Linhas 51 e 148** - Altere a descrição do perfil:

```javascript
profileText: "Sua descrição profissional aqui...",
```

#### 1.4 Dados de Contato
**Linhas 711-825** (Footer) - Altere telefone, email, LinkedIn, GitHub:

```javascript
<div>+351 XXX XXX XXX</div>  // ← Seu telefone
<div>seuemail@example.com</div>  // ← Seu email
<a href="seu-linkedin">LINKEDIN</a>  // ← Seu LinkedIn
<a href="seu-github">GITHUB</a>  // ← Seu GitHub
```

---

### 2. **Experiências Profissionais**

Edite as experiências em `src/components/Hero.jsx`, linhas 468-520.

#### Como Adicionar/Editar uma Experiência

**Exemplo de uso do componente:**

```jsx
<ExperienceCard
    company="Nome da Empresa"           // Ou use 'title' para projetos
    period="MÊS ANO - MÊS ANO"         // Ex: "JAN 2025 - PRESENT"
    role={t.experience.suaExperiencia.role}  // Função
    descriptions={[
        t.experience.suaExperiencia.desc1,   // Descrição 1
        t.experience.suaExperiencia.desc2,   // Descrição 2
        t.experience.suaExperiencia.desc3    // Descrição 3
    ]}
    stack="React, TypeScript, Python"   // Tecnologias usadas (opcional)
    location="Localização"              // Para projetos internacionais (opcional)
    isMobile={isMobile}
/>
```

#### Adicionar Traduções (Inglês e Português)

**Inglês (linhas 52-82):**
```javascript
experience: {
    suaExperiencia: {
        title: "Título da Empresa/Projeto",
        role: "Seu Cargo",
        location: "Localização (opcional)",
        desc1: "► Primeira descrição.",
        desc2: "► Segunda descrição.",
        desc3: "► Terceira descrição."
    }
}
```

**Português (linhas 149-178):**
```javascript
experience: {
    suaExperiencia: {
        title: "Título da Empresa/Projeto",
        role: "Seu Cargo",
        location: "Localização (opcional)",
        desc1: "► Primeira descrição.",
        desc2: "► Segunda descrição.",
        desc3: "► Terceira descrição."
    }
}
```

---

### 3. **Projetos em Destaque**

Edite os projetos em `src/components/Hero.jsx`, linhas 527-558.

#### Como Adicionar/Editar um Projeto

```jsx
<ProjectCard
    title="NOME DO PROJETO"
    description={t.projects.seuProjeto.desc}
    highlights={t.projects.seuProjeto.highlights}  // Array de destaques
    stack={t.projects.seuProjeto.stack}           // Tecnologias
    status={t.projects.seuProjeto.status}         // "WORKING NOW" (opcional)
    cta={t.projects.seuProjeto.cta}              // "VIEW PROJECT ►" (opcional)
    link="https://seu-projeto.com"                // Link externo (opcional)
    isWorkingNow={true}                           // true para projeto ativo (opcional)
    isMobile={isMobile}
/>
```

#### Adicionar Traduções de Projetos

**Inglês (linhas 83-113):**
```javascript
projects: {
    seuProjeto: {
        desc: "Descrição do projeto.",
        highlights: [
            "► Primeiro destaque.",
            "► Segundo destaque.",
            "► Terceiro destaque."
        ],
        stack: "REACT • TYPESCRIPT • PYTHON • AI",
        status: "WORKING NOW",  // Opcional
        cta: "VIEW PROJECT ►"   // Opcional
    }
}
```

**Português (linhas 179-209):**
```javascript
projects: {
    seuProjeto: {
        desc: "Descrição do projeto.",
        highlights: [
            "► Primeiro destaque.",
            "► Segundo destaque.",
            "► Terceiro destaque."
        ],
        stack: "REACT • TYPESCRIPT • PYTHON • AI",
        status: "A Desenvolver",  // Opcional
        cta: "VER PROJETO ►"      // Opcional
    }
}
```

---

### 4. **Skills / Competências**

Edite em `src/components/Hero.jsx`, linhas 564-587.

#### Tech Stack

Edite o array de tecnologias (linha 568-576):
```javascript
techStack={{
    title: t.skills.tech,
    items: [
        'React / TypeScript / Next.js',  // ← Suas tecnologias
        'Python / Fast API',
        'Suas outras skills aqui...'
    ]
}}
```

#### Soft Skills

Edite as traduções (linhas 118-127 para EN, 214-223 para PT):
```javascript
softList: [
    "Agile Methodology & Scrum",
    "Critical Thinking & Problem Solving",
    "Suas soft skills aqui..."
]
```

#### Idiomas

Edite as traduções (linhas 129-132 para EN, 225-228 para PT):
```javascript
languageList: [
    "Português (Native)",
    "English (Fluent / C1)",
    "Seus idiomas aqui..."
]
```

---

### 5. **Cores e Estilo** (Opcional)

Edite o ficheiro: `src/index.css`

Altere as variáveis de cor no topo do ficheiro:

```css
:root {
    --color-bg: #050005;           /* Cor de fundo */
    --color-primary: #d100d1;      /* Cor primária (magenta) */
}
```

---

## 🎨 Customizações Avançadas

### Trocar o Modelo 3D

O modelo 3D do computador está em `src/components/ComputerModel.jsx`. Para trocar:
1. Adicione seu modelo `.glb` ou `.gltf` na pasta `public/`
2. Edite `ComputerModel.jsx` linha 8 para apontar para o novo modelo

---

## 🚀 Como Executar

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar em desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Build para produção:**
   ```bash
   npm run build
   ```

---

## 📦 Deploy

### Vercel (Recomendado)

1. Crie conta em [vercel.com](https://vercel.com)
2. Conecte seu repositório GitHub
3. Deploy automático!

### Netlify

1. Crie conta em [netlify.com](https://netlify.com)
2. Arraste a pasta `dist` após `npm run build`
3. Site publicado!

---

## ✅ Checklist de Personalização

- [ ] Nome e Sobrenome alterados
- [ ] Roles/Funções alteradas
- [ ] Descrição de perfil personalizada
- [ ] Contatos atualizados (email, telefone, LinkedIn, GitHub)
- [ ] Experiências profissionais adicionadas/editadas
- [ ] Projetos em destaque personalizados
- [ ] Tech Stack atualizada
- [ ] Soft Skills personalizadas
- [ ] Idiomas atualizados
- [ ] Links de projetos funcionando
- [ ] Traduções PT/EN completas
- [ ] Testado em mobile
- [ ] Deploy feito

---

## 🆘 Problemas Comuns

### O site não carrega
- Verifique se rodou `npm install`
- Certifique-se que está usando Node.js v16 ou superior

### Textos não mudam de idioma
- Verifique se editou AMBAS as traduções (EN e PT)

### Projeto não tem link
- O componente `ProjectCard` só cria link se passar a prop `link="..."`

---

## 📄 Licença

Este template é open-source. Sinta-se livre para usar e modificar!

---

**Criado por Diogo Teixeira** 🚀
