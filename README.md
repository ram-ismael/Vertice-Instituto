# Instituto Vértice

### Uma experiência digital preparada para o próximo passo de cada estudante.

Website institucional responsivo, criado como projecto de portfólio para apresentar a identidade, a oferta formativa e a vida académica de um instituto em Maputo, Moçambique.

**[Ver demonstração online](https://ram-ismael.github.io/Vertice-Instituto/)** · **[Explorar o código](https://github.com/ram-ismael/Vertice-Instituto)**

---

## Educação com uma presença digital clara

O primeiro contacto com uma instituição deve ajudar o visitante a perceber quem ela é, o que pode estudar e como avançar. O Vértice reúne essas informações numa página organizada, com uma identidade visual própria e uma experiência pensada para computadores, tablets e telemóveis.

O projecto demonstra uma base adaptável para institutos, escolas, centros de formação e outras iniciativas educativas.

## Valor para a instituição

- **Apresentação profissional:** linguagem visual consistente, fotografias académicas e conteúdo directo.
- **Descoberta de programas:** cursos organizados em cards com filtros por categoria.
- **Admissões mais claras:** percurso em quatro passos e chamadas para acção ao longo da página.
- **Vida académica visível:** campus, docentes, testemunhos ilustrativos e novidades num só lugar.
- **Tecnologia próxima:** pré-visualização do Vértice Connect em computador e telemóvel.
- **Base simples de manter:** ficheiros estáticos e conteúdo principal separado da apresentação.

## Experiência incluída

| Área | O que apresenta |
|---|---|
| Instituição | Propósito, missão, visão, valores e motivos para escolher o Vértice |
| Cursos | Programas com imagens, duração ilustrativa e filtros interactivos |
| Portal académico | Conceito visual, benefícios e separadores por perfil de utilizador |
| Admissões | Etapas do processo e orientação para o próximo passo |
| Comunidade | Galeria do campus, testemunhos e perfis de docentes demonstrativos |
| Comunicação | Notícias e eventos ilustrativos, FAQ e secção de contactos |
| Navegação | Barra fixa, destaque da secção activa e menu móvel acessível |

## Arquitectura técnica

O website utiliza **HTML, CSS e JavaScript nativos**, sem framework de interface, backend ou dependências de build. O conteúdo repetido, como programas, indicadores, docentes e perguntas frequentes, está centralizado em `src/data.js`.

```text
Alteração em main
       ↓
GitHub Actions
       ↓
Preparação de dist/
       ↓
GitHub Pages
```

O workflow cria `dist/` durante a execução, copiando `index.html`, `assets/` e `src/`. Essa pasta não é a origem editável do projecto.

### Stack

| Tecnologia | Responsabilidade |
|---|---|
| HTML5 | Estrutura semântica, secções e metadados |
| CSS3 | Identidade visual, layout responsivo e microinteracções |
| JavaScript ES Modules | Cards, filtros, menu, separadores do portal e estado da navegação |
| WebP | Imagens locais em tamanhos adequados para a página |
| GitHub Actions | Preparação e publicação automática |
| GitHub Pages | Alojamento público do website estático |

### Decisões de implementação

- **Caminhos relativos:** os assets funcionam no subdirectório usado pelo GitHub Pages.
- **Imagens prioritárias e diferidas:** o hero é carregado com prioridade; imagens posteriores usam `loading="lazy"`.
- **Conteúdo configurável:** listas demonstrativas separadas em `src/data.js` para facilitar uma futura integração com CMS ou API.
- **Acessibilidade:** HTML semântico, textos alternativos, foco visível, FAQ nativa com `<details>` e estados dos controlos interactivos.
- **Movimento discreto:** transições de hover e respeito pela preferência `prefers-reduced-motion`.

## Estrutura do repositório

```text
Vertice-Instituto/
├── .github/workflows/deploy.yml  # Publicação no GitHub Pages
├── assets/                       # Fotografias WebP e favicon
├── src/
│   ├── data.js                   # Conteúdo demonstrativo configurável
│   ├── main.js                   # Renderização e interacções
│   └── styles.css                # Identidade visual e responsividade
├── index.html                    # Estrutura e metadados
├── PUBLICAR-GITHUB.md            # Guia de publicação e partilha
├── LICENSE
└── README.md
```

As imagens `vertice-desktop-navbar-direita.png`, `vertice-tablet.png` e `vertice-mobile.png` documentam a direcção visual usada na criação da página.

## Executar localmente

Como `src/main.js` é um módulo JavaScript, abra a página através de um servidor local:

```bash
git clone https://github.com/ram-ismael/Vertice-Instituto.git
cd Vertice-Instituto
python3 -m http.server 4173
```

Depois visite [http://localhost:4173/](http://localhost:4173/). Não é necessário instalar pacotes nem compilar o código.

## Personalização

| Necessidade | Ficheiro |
|---|---|
| Nome, secções, metadados e links principais | `index.html` |
| Cursos, indicadores, docentes, notícias e FAQ | `src/data.js` |
| Cores, tipografia, espaços e breakpoints | `src/styles.css` |
| Filtros, menu, FAQ e navegação activa | `src/main.js` |
| Fotografias e favicon | `assets/` |
| Processo de publicação | `.github/workflows/deploy.yml` |

Antes de uma utilização institucional, confirme todos os textos, programas, métricas, pessoas e requisitos de admissão. Defina os canais oficiais de contacto e os destinos reais dos botões de candidatura e do portal. A URL pública deve também ser adicionada como endereço canónico nos metadados.

## Publicação

Cada `push` para `main` inicia o workflow de publicação. Também pode executá-lo manualmente em **Actions → Publish site to GitHub Pages → Run workflow**. Consulte [PUBLICAR-GITHUB.md](PUBLICAR-GITHUB.md) para as instruções de configuração e partilha.

**[Aceder ao website publicado](https://ram-ismael.github.io/Vertice-Instituto/)**

## Possibilidades de evolução

- Candidaturas online com envio e acompanhamento.
- Catálogo de cursos alimentado por CMS ou API.
- Portal académico com autenticação e serviços reais.
- Notícias geridas por uma equipa editorial.
- Versões em outros idiomas e métricas de utilização.

Estas são possibilidades futuras; **não estão implementadas nesta versão**.

## Âmbito da demonstração

Este é um projecto conceptual de portfólio. A instituição, os programas, as pessoas, os testemunhos, os indicadores e os eventos apresentados são ilustrativos. O mockup do portal não oferece autenticação, pagamentos ou serviços académicos. Os botões de candidatura e portal conduzem às secções informativas enquanto não existirem destinos oficiais.

## Desenvolvimento

**[Ramadan Ismael](https://github.com/ram-ismael)**

Design e desenvolvimento de experiências digitais.

## Licença

Disponibilizado sob a [licença MIT](LICENSE).
