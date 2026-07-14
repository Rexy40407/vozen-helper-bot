# Vozen Helper — Site

Landing e páginas legais do **Vozen Helper**, um bot privado de moderação e comunidade
para Discord. Site estático (HTML + CSS, zero JS), publicado no **GitHub Pages**.

> Este repositório contém **apenas o site**. O código do bot é privado e vive noutro sítio.

## Estrutura

```
site/
  index.html          landing (hero + moderação + comunidade + setup)
  privacy.html        política de privacidade
  terms.html          termos de serviço
  favicon.svg
  css/styles.css      tokens da marca + layout
tools/minify-site.mjs site/ -> site-dist/ (minifica index+css; legais ficam legíveis)
.github/workflows/pages.yml  build + deploy para o Pages
```

## Desenvolvimento

```bash
# ver localmente: abre site/index.html no browser (não precisa de servidor)
npm install
npm run build:site   # gera site-dist/ minificado (o que vai para produção)
```

## Publicação

Cada `push` a `main` que altere `site/**` corre o workflow `pages.yml`, que faz
`build:site` e publica `site-dist/`. Na 1ª corrida o `configure-pages` liga o Pages
sozinho. O URL fica em `https://<user>.github.io/vozen-helper-bot/`.

## Domínio próprio (mais tarde)

Quando houver domínio: criar `site/CNAME` com o domínio (uma linha), configurar o DNS
no registrar e confirmar o HTTPS automático do Pages. Até lá, o URL `github.io` chega.

---

Sem afiliação com a Discord Inc.
