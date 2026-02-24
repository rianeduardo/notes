# Night Talk #12 — Aleatoriedade, Caos, Computação e Universo

Hoje vou falar um pouco sobre aleatoriedade, ligar isso com **universo, física, o caos** e tudo mais.

Esse tema é bem interessante, e reflexivo, vai ser mais curto mas vale a pena ler

É uma engenharia bonita, elegante, que eu observo faz um bom tempo, e já comentei presencialmente com algumas pessoas

Pessoa essa que sugeriu esse tema pra hoje, meu amigo **Pedro Lanaro** agradeço desde já

O Night-Talk 11 que lançou hoje em conjunto com este conta sobre mineração de bitcoin, custos e estratégias, ta bem legal, se você ainda não leu vale muito a pena

Bora lá?

---
## Pseudoaleatoriedade

O que realmente é algo aleatório, né? Computadores não conseguem gerar nada aleatório realmente, a gente tem algo que a gente chama de pseudoaleatoriedade, ou as siglas PRNG/RNG

Você já deve ter ouvido falar de RNG em jogos né, é meio que o fator sorte, que gera loot e tudo mais, mas o que é isso?

>**PRNG/RNG** ⭢ Random Number Generator / Pseudo-random Number Generator

Esse sistema usa _fórmulas matemáticas_, um _sistema determinístico_ pra gerar um número entre várias aspas aleatório, e por que não é aleatório? Por que matemática **não é caótica** pessoal, além de que temos um pontapé prevísivel para a realização dessas fórmulas

Esse pontapé é chamado de **seed**, tipo do mine mesmo, ela geralmente é algo pego do sistema, o mais comum é ser a data do sistema em milisegundos, garantindo uma nova geração cada execução né

Mas é uma fórmula fixa pra geração do número então a gente pode supor que:

```
Caixa no Joguinho:

80%  Comum
10%  Raro
5%  Épico
2%  Mítico
1%  Lendário

*E mais algumas ai raridades secretas, to com preguiça de bolar mais
```

Enfim, vamos supor que eu tirei uma **caixa lendária** e consegui logar qual _exato tempo do sistema isso aconteceu_, se eu tiver ali a precisão de um Deus, ou o poder de freezar e settar o tempo de sistema kkkkkkk, eu conseguiria repetir essa caixa lendária a vontade

É um caos controlado, e tudo depende dessa **forte ilusão de aleatoriedade**

- Criptografia

- Jogos

- Sorteios

- Blockchain

- S.O

- E **MUITO** mais que envolva "sorte"

---

## Por que importa essa aleatoriedade real?

Segurança né pessoal, criptografia prevísivel, blockchain, chave privada de rede cripto

Tudo isso seria 1000x melhor se fosse aleatório realmente

**Mas não é**

E da pra conectar com tudo que a gente vai ver nesse repo, VPN, redes, enfim, tudo **mesmo**

---

## A verdadeira? aleatoriedade e a beleza do caos físico

Tem uma engenharia que eu acho **maravilhosa** e que é considerado por muitos, a **maior** aleatoriedade nesse nosso âmbito tech né rapazeada

Eu to falando da parede de Lava Lamps ou "Wall of Entropy" da Cloudflare, fica no lobby da sede dos caras, é até uma exposição artística, muito bonita mesmo, mas enfim

O que faz isso? Esse movimento físico e realmente **caótico e imprevísivel**, é constantemente fotografado, essas fotos se tornam ruído de pixeis pretos/brancos

Cada pixel tem um valor em String, feito num processo chamado LavaRand, e esse processo todo fortalece a "True Randomness" que eles usam pra encriptar mais de **55 MILHÕES** de requests HTTP _diárias_, então o bagulho é importantíssimo pros caras

E é tipo assim, muito lindo ver isso acontecendo, na minha opinião, tanto técnicamente quanto conceitualmente, né? Eu acho muito bonito falar sobre o caos assim, muita gente acha que o caos é uma coisa ruim, mas não, o caos é uma propriedade física muito bonita e muito legal de se observar.

Mas aí entra a pergunta, né? Será que isso é o mais aleatório possível?

Temos **MUITOS** mais eventos caóticos na física

_Como:_

- Ruído térmico

- Decaimento radioativo

- Ruído quântico

- Efeito túnel

- Flutuações do vácuo quântico

E é um mais dahora que o outro, ruído térmico mesmo, quando fogão de indução esquenta a panela de ferro, os elétrons no ferro se agitam né (exemplo), e essa agitação cria esse ruído e tudo mais

Decaimento radioativo, mano, física nuclear aqui sabe?

É bonito ver isso, como a computação se complementa com **todas** as áreas, e como **todas** as áreas complementam a computação

É uma área que quando você vê ali, com olhos da **engenharia**, te faz pensar em como que ela resolve tantos problemas sabe?

Eu acho que esse é um dos motivos pra eu gostar **tanto** de tecnologia. Tem _sempre algo novo pra você ver, comentar sobre e se divertir_

Esse programa mesmo, talvez algum dia eu chegue lá no episódio 1000, e eu sei que até lá, eu não vou ter coberto nem **10%** do que tem pra falar kkkkkkkk

---

## Concluindo

Acho que o **ponto real** desse talk não foi explicar totalmente técnico a LavaRand, ou RNG, não

Eu quis refletir mesmo, espero que você tenha gostado, esse foi o Night Talk 12

Abraços,
**Rian**
