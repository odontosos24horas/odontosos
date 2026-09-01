# Configuração fora do código — Odonto SOS

O que precisa ser feito nos painéis do Google depois que o site for publicado.
O código já está pronto para todos estes passos.

---

## 1. Google Tag Manager

Não existe container GTM hoje. O site só tem o gtag do Google Ads (`AW-987120152`).

**Criar o container**

1. Em [tagmanager.google.com](https://tagmanager.google.com), criar container do tipo **Web** para `odontosos.com.br`.
2. Copiar o ID (`GTM-XXXXXXX`).
3. Na Vercel → Settings → Environment Variables, adicionar:

```bash
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

4. Fazer redeploy. O container e o `<noscript>` só são injetados quando essa variável existe — sem ela, nada quebra.

**Criar os acionadores** (Triggers → Novo → Evento personalizado)

| Nome do acionador | Nome do evento |
|---|---|
| Clique — Ligar | `click_ligar` |
| Clique — WhatsApp | `click_whatsapp` |
| Clique — Como chegar | `click_como_chegar` |
| Clique — Currículo | `click_curriculo` |

O site já empurra esses eventos no `dataLayer` a cada clique, junto com uma variável `origem`
(`hero`, `header`, `barra_fixa`, `rodape`, `urgencias`, `como_chegar`) — dá para saber qual
botão gerou o contato.

Para usar a origem: Variáveis → Nova → Variável da camada de dados → nome `origem`.

---

## 2. Google Analytics 4

Também não existe hoje.

1. Criar propriedade GA4 e pegar o ID de medição (`G-XXXXXXXXXX`).
2. No GTM, criar tag **Google Tag** com esse ID, acionada em *Initialization — All Pages*.
3. Criar 4 tags **Evento do GA4**, uma por acionador da tabela acima, com o mesmo nome do evento.
4. Em GA4 → Admin → Eventos, marcar como **evento principal (conversão)**:
   - `click_ligar`
   - `click_whatsapp`
   - `click_como_chegar`

**Não marcar `click_curriculo`.** É candidato a vaga, não paciente — misturar os dois
inutiliza a taxa de conversão.

---

## 3. Google Ads

**Primeiro: conferir a conversão antiga.**

O site tinha um disparo de conversão em toda visita
(`AW-987120152/DWtPCJSSicgDEJiE2dYD`), o que fazia todo visitante contar como paciente.
Isso já foi removido do código. No painel:

1. Ferramentas → Conversões → localizar essa ação.
2. Verificar o histórico — os números anteriores a esta correção não são confiáveis.
3. Pausar ou arquivar a ação antiga.
4. Se alguma campanha usa Lances Inteligentes, o algoritmo vai precisar de novo período
   de aprendizado com os dados corretos.

**Depois: importar as conversões novas.**

1. Ferramentas → Conversões → Nova → Importar → Google Analytics 4.
2. Importar `click_ligar` e `click_whatsapp` como **conversões principais**.
3. Importar `click_como_chegar` como **secundária** (observação, fora do lance).
4. **Não importar `click_curriculo`.**

---

## 4. Google Search Console

1. Adicionar a propriedade de **domínio** `odontosos.com.br` (cobre www e apex).
2. Sitemaps → enviar `https://www.odontosos.com.br/sitemap.xml`
   (antes retornava 404; agora é gerado pelo Next).
3. Inspeção de URL → `https://www.odontosos.com.br/` → **Solicitar indexação**.
4. Repetir para `https://www.odontosos.com.br/politica-de-privacidade`.
5. Acompanhar por ~2 semanas: Páginas (erros de rastreamento) e Aprimoramentos
   (deve aparecer *Perguntas frequentes* e os dados do negócio).

---

## 5. Validações depois do deploy

| O que | Onde | Esperado |
|---|---|---|
| Dados estruturados | [Teste de resultados avançados](https://search.google.com/test/rich-results) | `Dentist` e `Perguntas frequentes`, sem erro |
| Velocidade | [PageSpeed Insights](https://pagespeed.web.dev/) | Mobile 90+ |
| Eventos | GTM → Visualizar | 4 eventos, um disparo por clique |
| Robots | `/robots.txt` | 200, com a linha do Sitemap |

Validado localmente antes do deploy: schema.org sem erros, Lighthouse mobile
Acessibilidade 100 / SEO 100 / Agentic Browsing 100, LCP 97 ms, CLS 0,00.

---

## 6. Perfil da Empresa no Google

O endereço no site precisa ser **idêntico** ao do perfil:

```
Rua Cláudio Manoel, 223
Funcionários, Belo Horizonte - MG
CEP 30140-100
Telefone: (31) 3657-0600
Horário: 24 horas, todos os dias
```

Conferir também se o site cadastrado no perfil é `https://www.odontosos.com.br`.

Depois, colar o link curto do perfil em `content/clinica.ts`:

```ts
export const PERFIL_GOOGLE = 'https://g.page/...'
```

Ele entra automaticamente no `sameAs` do JSON-LD, que é como o Google confirma
que o site e o perfil são a mesma empresa.

---

## Pendências com o cliente

- [ ] Foto da **fachada** (não existe no acervo; recepção e consultório já estão no site)
- [ ] Quais dos 21 convênios seguem ativos
- [ ] Tem estacionamento? Ponto de referência?
- [ ] Revisar as 8 respostas do FAQ em `content/clinica.ts`
- [ ] Revisar a Política de Privacidade (cobre só o site; não trata de prontuário)
- [ ] Confirmar o e-mail oficial — o código antigo tinha dois
      (`odontosos@odontosos.com.br` e `odontosos24horas@gmail.com`)
- [ ] Link do Perfil da Empresa no Google
- [ ] A arte da nova primeira tela (citada na conversa, nunca enviada)
