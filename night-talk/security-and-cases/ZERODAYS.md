# Night Talk #13 - Zero-days, vulnerabilidades e o mercado anti-ético

**24 de Fevereiro de 2026**

Hoje eu vou falar um pouco sobre **zero-days e o mercado por trás delas né?**

É um tema que eu acho _importante de se refletir_, porque, além de ser um conceito legal dentro de segurança, é algo pra se pensar sobre como a humanidade age de forma hipócrita hoje em dia e meio que manipula as próprias regras, acham brechas e enfim

Conseguindo operar de forma **100% legal**, mesmo fazendo algo **100%** errado kkkkkkkk

---
## O que são Zero-Days?

Um _ataque de dia zero_ é uma vulnerabilidade de **software/hardware** nunca antes descoberta, tanto pelos fornecedores quanto pelos usuários, que quando descoberta por um atacante ou pesquisador de segurança, geralmente é abusada ou vendida num mercado bem sujo, que vou comentar já já

Esse termo de dia zero pode parecer meio estranho né, mas ele se diz ao fato de que os **desenvolvedores tem um total GIGANTESCO de 0 dias pra resolver esse bug**, é o famoso tem que ta pronto pra ontem, esse erro é descoberto por black/grey-hats bem antes de qualquer patch existir

_As principais características de um zero-day são, então:_

- **Ausência de fix** ⭢ Como vimos, é um bug totalmente desconhecido pra **TODO MUNDO**, explorado e abusado assim que é descoberto e/ou vendido

- **Exploits rápidos** ⭢ A weaponização (já já explico) evoluí muito, então temos exploits _cada vez mais velozes em sua estrutura de ataque_

- **Ataque invisível** ⭢ Nínguem sabe que esse exploit ta sendo executado, **até certo ponto**

- **Alto custo** ⭢ Vendidos por _milhões e milhões_ de doláres

- **Inevitabilidade** ⭢ Sim, bugs assim são **impossíveis** de prevenir, principalmente em grandes sistemas, temos **milhões** de linhas de código, **uma com falha = potencial bug fatal**

Sobre a inevitabilidade, muito provavelmente nesse exato momento, há uma penca de zero-days sendo exploradas, agora mesmo

_Eu gosto de pensar assim:_

>**Software é uma muralha gigantesca, cada linha de código ⭢ um tijolo**
>
>**Se eu acho um tijolo minimamente deslocado, ou rachado, eu vou martelando ele até quebrar tudo em volta e achar uma brecha

Quantos mais tijolos, maior a possibilidade de ter tijolos mal colocados, mesmo se a muralha foi construida pelos pedreiros S-Tier ai

_O ciclo de vida de uma zero-day então fica mais ou menos assim:_

- **Descoberta** ⭢ Atacante descobre um bug

- **Weaponização** ⭢ Desenvolve um exploit pra esse bug, exploit = código malicioso

- **Venda/Abuso** ⭢ Vende o exploit e/ou abusa dele ainda por cima

- **Patch** ⭢ Fornecedor percebe depois de um tempo, e finalmente vem o patch, mas só depois do estrago

**Eu também trouxe casos reais pra gente analisar, incluindo um que foi bem crítico, aconteceu agorinha, e nínguem comenta sobre kkkkkk**

_Casos selecionados_

- **CVE-2026-2441** ⭢ Esse zero-day foi explorado agorinha em fevereiro de 2026, e ele permitia a **íncrivel RCE em páginas web, maliciosas obviamente** (RCE = Execução de comandos remotos)

- **Log4Shell** ⭢ Aconteceu lá em 2021, foi uma vulnerabilidade na biblioteca do Java, Apache Log4j, ela tava em milhões de computadores, e permitia **controle remoto**

- **Stuxnet** ⭢ O caso mais famoso, aconteceu em 2010, explorava simplesmente **QUATRO ZERO-DAYS** do Windows, além de ser um worm (Malware que se propaga na rede), só executava em dispositivos com o sistema SCADA, usada em usinas nucleares do Irã, obviamente quem orquestrou isso foi os EUA, sabotavam centrífugas, roubavam dados, e muito mais

---
## O que são black, grey e white-hats?

Essas são classificações pra hackers com base na ética, explicar rapidinho só pra esclarecer, usei esse termo lá em cima e nunca falei sobre

Black-hats são hackers mais **sujos** e **mal-intencionados**, eles vão 100% do tempo ou abusar de um erro, ou exigir resgate, vendem bastante zero-days também

Grey-hats são **meio-termo** né, invadem sem permissão e consentimento, mas quase nunca com más intenções realmente, eles geralmente vendem zero-days mais do que abusam

White-hats são os **hackers do bem** basicamente né, se você quer ser um hacker CLT ai, você vai ser esse, ele tem permissão pra invadir, e reporta tudo

E obviamente hackers vão alternando entre esses níveis, muito black já foi white, e vice-versa

---
## Mercado de zero-days

Agora sim, o tema principal de hoje

Temos comércio de zero-days pessoal, tanto na deep-web, tanto na surface, que te faz pensar né kkkkkkkk

Temos vendas legais disso, via **brokers**, que são intermediários entre o hacker/pesquisador e o comprador da vulnerabilidade, que adivinha, são governos e agências privadas

Estado, FBI, CIA, NSA, sempre compram isso

E como que é legal? Ai entra a parte da hipocrisia que eu falei

_Hoje:_

- **Achar bug** ⭢ Legal

- **Desenvolver exploit** ⭢ Legal

- **Vender esse "conhecimento"** ⭢ Legal

- **Explorar e abusar** ⭢ Ilegal

Então sim, é totalmente legal você invadir um sistema, **descobrir e desenvolver algo que pode acabar com ele, ou com milhões de usuários**, e vender isso

É tipo vender a planta detalhadíssima de uma híper-bomba, mas você não ta explodindo ela, então ta suave, legal e tudo mais

E bom, quem compra tem poder, e quem tem poder não sofre da lei

Esses brokers legais botam a cara mesmo, tem contrato bonitinho, escritório limpinho, marca feitinha, mais famosos são a **Zerodium** e a **Crowwdfense**

Se entitulam como _"hubs de pesquisa de vulnerabilidades"_, mas é só pra ficar atrás da linha da lei, e faturar milhões vendendo armas cibernéticas

Armas essas que podem fazer guerras, vocês podem muito bem ir lá ler o doc sobre o **NotPetya**, e ver como isso pode acabar com até continentes

E obviamente tem o mercado ilegal real disso, que na verdade tudo devia ser considerado ilegal, mas enfim, lá na deepweb a gente tem _brokers clandestinos_, _black-hats_, e as principais _APTs_

---
## APTs

APT é uma sigla pra **Advanced Persistent Threat** ou **Ameaça Avançada Persistente** na tradução literal né, essas APTs são grupos **MUITO** bem organizados, de hackers geniais, a nata da segurança ta ai, eles são obviamente muitas vezes financiados pelo Estado, pra roubarem dados, espionagem, derrubar indústrias e infra crítica até, como a gente pode ver em casos como o Stuxnet e NotPetya

NotPetya inclusive foi comprovado que foi produzida pela APT-28, que tem afiliação com a GRU (Russia's General Staff Main Intelligence Directorate) em conjunto com o grupo Sandworm, um grupo gigante de hackers também russos, que além do NotPetya em 2017, realizaram o **Olympic Destroyer** em 2018, que deu uma cagada geral nas olímpiadas, e nínguem fala sobre

Eu vou comentar muito mais sobre esses APTs, por que pretendo trazer mais casos reais, então tem Lazarus Group, Sandworm, APT-31, 40, e tudo mais

---
## Conclusão

Na moral, reflete nessa moralidade? O governo fala que hackear é errado e tals, será que é mesmo?

Por que ele compra tanto armamento cibernético? Nesse exato momento devem ter dezenas de APTs espionando, roubando dados, e atacando infra

Esse talk foi feito com esse objetivo, gostei bastante dele, e é isso, esse foi o Night Talk episódio 13

Abraços,
**Rian**
