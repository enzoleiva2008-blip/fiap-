# Pointway 🚌🌱

> Transforme seus pontos em mobilidade sustentável — Desafio 2 | FIAP Front-End Design Engineering 2026

🔗 **Repositório:** [github.com/enzoleiva2008-blip/fiap-](https://github.com/enzoleiva2008-blip/fiap-)

---

## 📋 Descrição do Projeto

O **Pointway** é uma solução desenvolvida para o **Desafio 2** do Challenge FIAP 2026, em parceria com a empresa **Prospera/Pointway**.

A proposta resolve o problema: *Como permitir que usuários utilizem seus pontos Pointway para financiar o uso de transporte público?*

A solução apresenta:
- **Simulador interativo** de conversão de pontos em viagens
- **Sistema de voucher digital** com QR Code para uso nas catracas
- **Integração via API** com operadoras como SPTrans, ViaMobilidade e CPTM
- **Calculadora de impacto ambiental** coletivo
- **Sistema anti-fraude** multicamada

---

## 🎯 O Desafio

**Desafio 2 — Utilização de Pontos para Transporte Público**

A Pointway busca conectar o ambiente digital com benefícios reais no mundo físico. O transporte público é um dos principais meios de redução de emissão de carbono, tornando-se uma oportunidade de impacto sustentável.

**Questões respondidas pelo projeto:**
- Como converter pontos em créditos de transporte?
- Como integrar com sistemas de bilhetagem?
- Como evitar fraudes no processo?
- Como medir o impacto ambiental gerado?

---

## 🗂️ Estrutura de Pastas

```
projeto-soulup/
│
├── index.html          # Página inicial — apresentação do projeto
├── sobre.html          # Sobre o projeto, contexto e roadmap
├── solucao.html        # A plataforma Pointway e sistema de pontos
├── transporte.html     # Desafio 2 — simulador e modelos de integração
├── faq.html            # Perguntas frequentes com busca e accordion
├── contato.html        # Formulário de contato com validação
├── integrantes.html    # Equipe do projeto
├── README.md           # Este arquivo
│
├── css/
│   ├── style.css       # Variáveis, reset, tipografia e utilitários
│   ├── components.css  # Navbar, hero, cards, FAQ, formulário, equipe
│   └── responsive.css  # Media queries (mobile, tablet, desktop)
│
├── js/
│   ├── main.js         # Navbar, hamburger, scroll, animações
│   ├── faq.js          # Accordion e busca do FAQ
│   ├── contato.js      # Validação do formulário de contato
│   └── transporte.js   # Simulador de pontos e calculadora de impacto
│
└── assets/
    └── images/         # Imagens, ícones e mídias do projeto
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| **HTML5** | Estrutura semântica das páginas |
| **CSS3** | Estilização, Flexbox, Grid, variáveis CSS, animações |
| **JavaScript (ES6+)** | Interatividade, simulador, validação, accordion |
| **Google Fonts** | Tipografias Poppins e Inter |
| **Git / GitHub** | Versionamento e controle de código |

> ⚠️ **Sem frameworks externos.** Nenhuma biblioteca como Bootstrap, jQuery, React ou Tailwind foi utilizada, conforme as diretrizes da FIAP.

---

## 📄 Páginas do Projeto

| Página | Arquivo | Descrição |
|---|---|---|
| Início | `index.html` | Hero, como funciona, stats, features e CTA |
| Sobre | `sobre.html` | Contexto, problema, solução e roadmap |
| Plataforma | `solucao.html` | Como ganhar pontos, recompensas e parceiros |
| **Transporte** | `transporte.html` | **Simulador, voucher, integração e impacto** |
| FAQ | `faq.html` | Perguntas frequentes com busca e accordion |
| Contato | `contato.html` | Formulário com validação JavaScript |
| Equipe | `integrantes.html` | Integrantes com RM, GitHub e LinkedIn |

---

## ⚡ Funcionalidades JavaScript

- **Navbar responsiva** com hamburger menu e scroll suave
- **Animações de entrada** (fade-in ao rolar a página)
- **Contador animado** de estatísticas
- **Simulador de pontos** em tempo real (escolha de modal, cálculo instantâneo)
- **Calculadora de impacto ambiental** coletivo
- **Tabs interativas** (integração técnica, recompensas)
- **Accordion do FAQ** com abertura suave e busca por palavra-chave
- **Validação de formulário** com feedback visual em tempo real
- **Scroll-to-top** dinâmico

---

## 📱 Responsividade

| Breakpoint | Dispositivo | Status |
|---|---|---|
| ≤ 480px | Mobile pequeno | ✅ |
| ≤ 768px | Mobile / Tablet | ✅ |
| 768px–992px | Tablet | ✅ |
| ≥ 992px | Desktop | ✅ |
| ≥ 1300px | Desktop grande | ✅ |

---

## 👥 Equipe

<!-- ATENÇÃO: substitua pelos dados reais de cada integrante -->

| Nome | RM | Turma | GitHub |
|---|---|---|---|
| Enzo Leiva Varrichio | RM568877 | 1TDSPO | [github.com/enzoleiva2008-blip](https://github.com/enzoleiva2008-blip) |
| Pietro Ibra | RM573262 | 1TDSPO | [github.com/PietroIbra](https://github.com/PietroIbra) |
| Kauã Augusto Fiuza | RM572369 | 1TDSPO | [github.com/KauaznX](https://github.com/KauaznX) |
| Bernardo Andrade | RM571170 | 1TDSPO | [github.com/bernardopqr-cpu](https://github.com/bernardopqr-cpu) |
| Matheus Segura Anacleto de Souza | RM570878 | 1TDSPO | [github.com/MatheuSegura](https://github.com/MatheuSegura) |

---

## 🚀 Como executar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/enzoleiva2008-blip/fiap-.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd projeto-soulup
   ```

3. Abra o arquivo `index.html` no navegador.
   - No VS Code: botão direito → *Open with Live Server*
   - Ou arraste o arquivo para o navegador

---

## 📞 Contato

- **E-mail:** souluptransit@fiap.com.br
- **Instituição:** FIAP — São Paulo, SP
- **Disciplina:** Front-End Design Engineering
- **Semestre:** 1º Sprint — 2026

---

## 📜 Licença

Projeto acadêmico desenvolvido para fins educacionais como parte do Challenge FIAP 2026 em parceria com a Prospera/Pointway. Todos os direitos reservados à equipe desenvolvedora.

---

*Desenvolvido com 💚 para o Challenge FIAP 2026 — Desafio 2: Utilização de Pontos para Transporte Público*
