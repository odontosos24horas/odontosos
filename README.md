# Odonto SOS

Site da Odonto SOS — clínica de urgência odontológica 24 horas em Belo Horizonte.

**Produção:** https://www.odontosos.com.br

## Stack

- [Next.js 16](https://nextjs.org/) — App Router
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- TypeScript
- Deploy na Vercel

## Rodando localmente

```bash
pnpm install
```

```bash
pnpm dev
```

Outros comandos:

```bash
pnpm build && pnpm start
```

```bash
pnpm typecheck
```

## Como o projeto está organizado

```
app/
  layout.tsx      metadados, JSON-LD, scripts de terceiros
  page.tsx        home
  sitemap.ts      sitemap.xml
  robots.ts       robots.txt
  politica-de-privacidade/
components/       componentes da página
content/
  clinica.ts      TODO o conteúdo do site
```

### `content/clinica.ts` é a fonte única de verdade

Telefone, WhatsApp, endereço, convênios, situações atendidas e FAQ ficam todos
nesse arquivo. **Para mudar texto do site, mexa só nele.**

Isso não é organização por gosto: o JSON-LD é gerado a partir dos mesmos arrays
que renderizam a página. O bloco `FAQPage`, por exemplo, sai do array `FAQ` —
o mesmo que desenha a seção de dúvidas. Se fossem duas listas separadas, a
primeira edição de texto quebraria o rich result do Google em silêncio, sem
erro nenhum no build.

### Zero client components

A página inteira é renderizada no servidor. O menu mobile e o acordeão do FAQ
usam `<details>` nativo em vez de `useState`, e a medição de cliques é um
listener delegado em JavaScript puro no `layout.tsx`.

Além de ser mais leve, isso mantém todo o conteúdo no HTML servido — inclusive
as respostas do FAQ com o acordeão fechado. Crawlers de IA (GPTBot, ClaudeBot,
PerplexityBot) **não executam JavaScript**: o que não está no HTML, para eles
não existe.

> Cuidado ao mexer no `<details>`: o `<summary>` precisa ser o **primeiro filho
> direto**. Envolvido por qualquer elemento, o navegador ignora e injeta o
> próprio rótulo padrão ("Saiba mais" em pt-BR).

## Medição

Cada CTA carrega `data-evento` e `data-origem`. Um listener no `layout.tsx`
empurra para o `dataLayer`:

| Evento | Onde aparece |
|---|---|
| `click_ligar` | hero, header, barra fixa, urgências, como chegar, rodapé |
| `click_whatsapp` | hero, barra fixa, rodapé |
| `click_como_chegar` | botão de rota |
| `click_curriculo` | rodapé |

**`click_curriculo` não é conversão de paciente** — é candidato a vaga.

O GTM é opcional e só é injetado se `NEXT_PUBLIC_GTM_ID` existir no ambiente.

Passo a passo de GTM, GA4, Google Ads e Search Console: [CONFIGURACAO.md](CONFIGURACAO.md).

## Imagens

Fotos reais da clínica em `public/images/clinica/`. O `next/image` entrega
AVIF/WebP automaticamente (uma foto de 1440px sai com ~21 KB em AVIF).

Ao adicionar foto nova, redimensione antes — o acervo anterior tinha um JPEG de
8,2 MB no repositório.

## Commits

[Conventional Commits](https://www.conventionalcommits.org/), validados por
commitlint no hook de `commit-msg`.

```bash
pnpm commit
```
