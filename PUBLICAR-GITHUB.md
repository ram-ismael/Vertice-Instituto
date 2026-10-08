# Publicar o Vértice com GitHub Actions

O projecto é um site estático. Não precisa de `npm install`. O workflow em `.github/workflows/deploy.yml` copia `index.html`, `assets/` e `src/` para `dist/` e publica essa pasta no GitHub Pages sempre que houver um `push` para `main`. Também pode ser executado manualmente em **Actions → Publish site to GitHub Pages → Run workflow**.

## 1. Rever os dados antes de partilhar

Esta é uma proposta demonstrativa. As fotografias foram criadas para o projecto; nomes, testemunhos, cursos, métricas e notícias em `src/data.js` são ilustrativos. Antes de apresentar o site como página oficial, substitua tudo por informação confirmada pela instituição.

Actualize também:

- Os links do Portal e da candidatura em `index.html`, quando existirem destinos oficiais. Actualmente levam às secções informativas da página.
- Os canais de contacto e redes sociais no footer. Não foram inventados endereços, números ou perfis.
- O título, descrição e imagem Open Graph em `index.html`.
- O endereço canónico: depois de conhecer a URL final, adicione `<link rel="canonical" href="https://URL-FINAL/">` ao `<head>` de `index.html` e use uma URL absoluta em `og:image`.
- A nota de projecto demonstrativo no footer, apenas quando o conteúdo for realmente oficial e autorizado.

## 2. Criar o repositório e enviar os ficheiros

Crie um repositório no GitHub. Pode chamar-se, por exemplo, `vertice`. Na pasta `vertice-design`, execute:

```bash
git init
git branch -M main
git add .
git commit -m "Criar landing page Vértice"
git remote add origin https://github.com/SEU-UTILIZADOR/vertice.git
git push -u origin main
```

Se já existir um repositório Git nesta pasta, salte `git init` e configure ou confirme o `origin` antes do `push`. Substitua `SEU-UTILIZADOR` pelo utilizador ou organização real.

## 3. Activar o GitHub Pages

No repositório, abra **Settings → Pages → Build and deployment** e seleccione **GitHub Actions** como origem. Em **Actions**, abra a execução **Publicar site no GitHub Pages**. Espere até o job `deploy` ficar verde. A execução mostra a URL publicada no ambiente `github-pages`.

Em geral, a URL de um repositório de projecto tem esta forma:

```text
https://SEU-UTILIZADOR.github.io/vertice/
```

Use a URL apresentada pelo GitHub como referência, especialmente se mudar o nome do repositório ou configurar um domínio próprio.

## 4. Partilhar com terceiros

Abra a URL numa janela privada e confirme que imagens, filtros, menu móvel e FAQ funcionam. Depois copie o endereço da barra do navegador e envie-o por email, mensagem ou redes sociais. Para facilitar a pré-visualização em mensagens, configure `canonical` e `og:image` com a URL pública absoluta e faça novo `push`.

Para obter uma alteração publicada, edite os ficheiros, faça `git add`, `git commit` e `git push` na branch `main`. O workflow republica a página automaticamente.

## Verificação local

Na pasta do projecto:

```bash
python3 -m http.server 4173
```

Abra `http://localhost:4173/`. Para interromper, pressione `Ctrl+C`.

## Nota sobre privacidade

O repositório público permite que qualquer pessoa veja o código, as imagens e o conteúdo. Não coloque credenciais, dados privados de estudantes ou documentos internos nesta pasta.
