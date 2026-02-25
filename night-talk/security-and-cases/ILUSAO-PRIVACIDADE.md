# Night Talk #15 — A Ilusão da Privacidade no Mobile

**25 de Fevereiro de 2026**

Esse é o Night Talk 15, e hoje eu vou falar um pouquinho sobre a **ilusão da privacidade** em _dispositivos mobile_, né?

Falar sobre isso é muito bom porque toca numa ferida braba aí:

> **O celular é o nosso dispositivo mais íntimo, mas também é o maior espião de bolso já inventado**

A gente pode começar com a **ilusão** né, 95% dos usuários são pessoas comuns que acham que não tem nada a esconder ou que o celular é seguro só porque tem biometria ou Face ID

Mas a privacidade no celular **NÃO** é sobre esconder um nude que tu manda, ou uma senha do email, é sobre um negócio chamado **exaustão de dados**

---
## O que é exaustão de dados?

Basicamente se refere a um volume gigante de **dados residuais**, são rastros digitais que são gerados **PASSIVAMENTE** enquanto você usa o celular. Muitas vezes esses dados são "descartados" por você, mas as empresas usam pra caramba pra te analisar

O ponto é: **mesmo com o app fechado, o sistema operacional e os sensores continuam gerando uma impressão digital única do seu comportamento**

_Sensores principais que podem fazer isso:_

- **Acelerômetro** ⭢ Mede a _aceleração, vibração e inclinação_ nos eixos **X, Y e Z**

- **Giroscópio** ⭢ Mede a _velocidade angular (rotação)_. É o que permite aqueles jogos 360 graus e estabiliza a imagem da câmera

_Esses caras juntos sabem se você tá correndo, dirigindo ou até o jeito que você balança o celular enquanto digita. É o caos pros dados né_

Inclusive uma curiosidade talvez um pouco assustadora, sabia que existem pesquisas que mostram que da pra inferir o que tu ta **digitando no teclado**, só pela vibração que o acelerômetro capta?

E o giroscópio pode funcionar como uma éspecie de _microfone_, captando vibrações sonoras

---
## Três pilares que tornam a privacidade uma grande ilusão

**1.** Permissões Abusivas

Aqui eu ligo com o Night Talk #6 sobre a gourmetização da IA. Lá eu falei das **skills do MoltBot** que podiam pegar infos que não são muito legais de serem compartilhadas né. No mobile é igual: 

>_App de lanterna pedindo acesso aos contatos e localização. É a famosa **coleta de dados desproporcional à função**_

**2.** Identificadores Persistentes

_Mesmo se você apagar cookies e tokens, ainda existem IDs que vinculam suas ações a uma identidade única:_

- **IMEI** ⭢ É o CPF do seu celular. Chassi mesmo

- **Advertising IDs** ⭢ IDs que a Google e Apple colocam pra _coletar info de performance de anúncio_ e te **vender** pra marketing

**3.** WebViews e SDKs de terceiros

Dá pra conectar com o talk sobre Zero-days. Lembra da **CVE-2026-2441** do Chrome? Muitos apps não rodam código nativo, eles abrem uma _"WebView" (janela do navegador interno)_. Se essa WebView tiver um bug de UAF (Use After Free), um app de calculadora vira um backdoor pro seu sistema inteiro

UAF pra quem não sabe, nem leu o talk 13, é uma vulnerabilidade **BEM CRÍTICA** de corrupção de memória, em palavras simples e numa analogia:

>**É como se você devolvesse a chave de um quarto de hotel (desalocação), mas fizesse uma cópia dela antes. Se o hotel colocar um novo hóspede lá (novos dados), você ainda consegue entrar e mexer nas coisas dele**

---
## O mercado de zero-click

O **santo graal** dos exploits mobile é o _Zero-click._

É a capacidade de invadir um celular sem que o usuário clique em **absolutamente nada.**

O caso do **Pegasus** é o mais famoso né: só de receber uma mensagem no WhatsApp ou iMessage, o sistema processa aquilo errado no background e pronto, o atacante já era, acesso remoto

---
## Root, jailbreak e o perigo real

_Explicaçãozinha rápida sobre root/jailbreak:_

- **Root (Android) / Jailbreak (iOS)** ⭢ É obter acesso de superuser. Permite tirar bloatwares (aqueles apps chatos que já vêm no celular), mudar a ROM e tal, bem poderoso nas mãos de um hacker

- **O risco** ⭢ Você perde garantia, app de banco para de funcionar e tem o risco de brick (deixar o celular virar um tijolo que não liga mais)

---
## Concluindo, o que vale mais, sua liberdade ou a conveniência?

_A gente troca nossa geolocalização em tempo real por 2 minutos de economia no Waze né. É uma troca de privacidade por conveniência o tempo todo_

**E pros devs:** não sejam vibe-coders. Não fiquem subindo app com biblioteca pronta que vocês não sabem o que tem dentro. Às vezes o kit que você usa pra "facilitar o login" tá mandando o histórico do usuário pra um servidor na China ou na Rússia e você **nem sabe**

_Não sejam operadores de ferramenta, sejam engenheiros de verdade_

Esse foi o talk _15_

**Abraços,**
Rian