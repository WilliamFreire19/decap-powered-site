## 🚀 Como Configurar e Usar o Decap CMS

### 1. **Acesso ao Admin:**
   - Acesse: `https://seusite.com/admin/`
   - Primeiro acesso: configurar autenticação

### 2. **Configuração no Netlify:**
   ```bash
   # 1. Deploy no Netlify
   # 2. Ir em Site Settings > Identity
   # 3. Habilitar Git Gateway
   # 4. Adicionar external providers (opcional)
   ```

### 3. **Estrutura de Conteúdo:**
   ```
   content/
   ├── pages/
   │   ├── home.json      # Página inicial
   │   └── about.json     # Página sobre
   ├── blog/              # Posts do blog
   │   ├── post1.md
   │   └── post2.md
   └── settings/
       └── site.json      # Configurações do site
   ```

### 4. **Para Usar Localmente:**
   ```bash
   # Instalar Decap CMS localmente
   npm install -g @decapcms/cli
   
   # Rodar proxy local
   decap-server
   
   # Acessar: http://localhost:8080/admin/
   ```

### 5. **Configuração de Autenticação:**
   - **Netlify Identity** (recomendado)
   - **GitHub OAuth**
   - **Git Gateway**

### 6. **Editando Conteúdo:**
   - **Páginas**: Editar home.json e about.json
   - **Blog**: Criar/editar posts em markdown
   - **Menu**: Modificar navegação
   - **Configurações**: Logo, redes sociais, etc.

### 7. **Deploy Automático:**
   - Cada mudança no CMS → commit no GitHub
   - GitHub → deploy automático no Netlify
   - Conteúdo atualizado em tempo real

O site está **100% funcional** agora! 🎉