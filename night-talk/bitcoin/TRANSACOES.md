# Night Talk #21 — Como funcionam transações, a muralha matemática, e o anonimato na rede BTC

**28 de Fevereiro de 2026**

Esse é o Night Talk 21, e esse vai ser bem dahora na minha opinião

Hoje eu vou falar um pouco sobre como que _funciona a fundo_, né, as **transações de Bitcoin e ligar um pouco com hacking, falar de coin mixer, anonimato, rastreabilidade e tudo mais**

Esse é um tema bem técnico, então, assim, eu vou tentar assim ao máximo explicar com uma didática legal, mas não prometo nada

---

## Como funciona o "saldo" (O modelo UTXO)

Primeiramente, o Bitcoin é uma carteira que não trabalha com saldo né pessoal. 

Ela vai trabalhar com algo que a gente chama de **UTXO (Unspent Transaction Output)**.

Ele funciona como dinheiro físico realmente, pra não permitir gasto duplo.

_Exemplinho:_

>Eu tenho um Bitcoin e mandei meio.

Vamos supor que 1BTC = 1UTXO

_Quando eu mando, ele se divide em dois:_

>Cria um novo UTXO de meio BTC pra quem recebeu, e o que sobrou vira outro UTXO que volta pra mim como "troco".

Não existe "subtrair saldo", existe gastar outputs anteriores e criar novos. 

E cada entrada precisa provar que você é o dono usando a trindade:

**ECDSA, SHA-256 e RIPEMD160**

---

## A Muralha Matemática

**1.** SHA-256

É a função de hash do Bitcoin que a gente usa pra minerar.

Eu fico gerando hashes até achar um abaixo da **dificuldade da rede**, e quem acha primeiro ganha a recompensa

_Ele garante que a transação é imutável_

Eu falo bastante disso no talk #11, onde eu falo sobre mineração de Bitcoin, e a **realidade** desse processo

**2.** ECDSA (Curva Elíptica)

Aqui é a assinatura digital da minha transação

Primeiro vamos entender chave pública e privada:

>A chave pública seria como minha chave pix, eu mando pra quem quer me mandar dinheiro

>Já a chave privada, seria um número aleatório gigantesco dentro da rede, que gerencia meu dinheiro e também serve pra gerar minha chave pública

**ECDSA é uma curva elíptica**

Essas curvas são equações matemáticas que geram curvas num gráfico, e que tem propriedades matemáticas **muito especiais**

_Na rede BTC, a nossa curva se da por:_

``y² = x³ + 7``

Nessa curva, a gente consegue fazer uma soma de pontos.

Imagina que a gente tem pontos no gráfico, no caso **ponto A** e **ponto B**

``A + B = C``, isso é regra matemática

Então a gente pode fazer uma somatória gigantesca de pontos, tipo assim:

````
A + A = 2A
2A + A = 3A
3A + A = 4A
E por ai vai...
````

_A partir desse príncipio, a gente gera nossa chave pública_

A conta é **k * G = P**, onde o **G** é um ponto fixo e público, o **k** é sua chave privada (o segredo) e o **P** é sua chave pública (o resultado)

A segurança mora aqui: calcular o **P** sabendo o **k** é instantâneo, muito fácil e muito rápido

Mas agora descobrir o **k** sabendo o **P e o G** apenas, é quase impossível.

É o chamado **ECDLP**.

Pra você ter noção, a chave privada tem 256 bits, o que dá umas **1.15 * 10^77** possibilidades.

Existem **10^80** átomos no universo observável.

**Chutar sua chave privada é tipo tentar achar um átomo específico no universo inteiro**

_O bruteforce simplesmente não existe aqui._

Então, como provar que você tem a chave sem mostrar ela?

O ECDSA cria uma prova matemática, a **assinatura (r, s)** que envolve hash, operações modulares e um número aleatório

**É uma equação com mais incógnitas do que soluções viáveis.** Mesmo sabendo a mensagem e a chave pública, não dá pra isolar a privada

**3.** RIPEMD160

Nada mais é que outro hash, sim, além do SHA-256

O **RIPEMD160** é de 160-bits, ou seja, transforma qualquer input em algo criptografado de 160-bits

Mas pra que usar dois hashes?

_Se você pensava que nosso endereço era só:_

``SHA256(chave_publica)``

_Não, na verdade é:_

``RIPEMD160(SHA256(chave_publica))``

E essa gambiarra a gente chama de **HASH160**

Isso serve tanto pra _segurança em mais uma camada_

Quanto pra _diminuir os endereços, SHA256 fica muito grande, encurtar isso pra 160-bits deixa mais eficiente pra blockchain operar._

---

## Taproot e Schnorr (O Upgrade de 2021)

O Taproot mudou tudo.

Ele introduziu as assinaturas de **Schnorr**, o **MAST** e muito mais privacidade.

Antes, se você usasse Multi-Sig (várias pessoas assinando), todo mundo via isso na blockchain.

Com o Taproot e o Schnorr, tudo parece uma transação comum.

Ele permite a **agregação de chaves**: 

>Três assinaturas viram uma só. Na blockchain, parece só uma pessoa normal pagando, o que mata o fingerprinting

O Taproot não é um mixer, mas aumenta muito a privacidade base da rede, o que dificulta ainda mais a análise forense.

---

## Hacking, Mixers e o Anonimato

Por ser descentralizado, o Bitcoin é o meio principal de criminosos, mas dá pra deixar mais irrastreável com **Coin Mixers**.

O pessoal usa o **CoinJoin** (descentralizado), onde várias pessoas criam uma transação única gigante.

_Exemplo:_

````
50 pessoas entram
50 transações saem
*Todas de valor igual
````

Quebra o vínculo de _"quem pagou quem"_

**Mas dá pra rastrear?**

Empresas tipo a **Chainalysis** usam análise gráfica, timing e volume pra tentar descobrir.

O mixer não dá anonimato perfeito, só _aumenta absurdamente o custo da análise_

No hacking mesmo, já teve ataque por reuso de **nonce** no ECDSA (se usar o mesmo valor **k** duas vezes, a privada vaza) e o famoso **RNG fraco**.

Se o "random" for previsível, a chave já era.

Existe até a área de **Blockchain Forensics** pro lado Blue Team (defesa) investigar esses rastros

Eu já falei dessas coisas aqui antes!

_No talk 12 eu falo sobre aleatoriedade, lá, eu falo de seed, RNG, entropia, vai lá ler_

---

## Conclusão

A criptografia do Bitcoin é **hardcore**

_Mistura teoria dos jogos, P2P, economia e segurança._

O Taproot elevou isso pra um **nível financeiro muito foda**.

_Bitcoin é uma arte moderna, desafia tudo, e provavelmente o sistema mais bem feito rodando hoje_

Saber que tudo isso é feito **OPEN-SOURCE**,  qualquer um programa melhorias, da ideia, e tudo mais é simplesmente muito, muito **foda**.

Provavelmente quase ninguém vai entender esse talk de primeira, mas se prestar atenção você vê que é uma muralha de matemática que ninguém dobra

**Esse foi o talk 21**

Abraços,
**Rian**