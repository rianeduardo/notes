# Night Talk #11 — Mineração, Hashes e a Dura Realidade

**23 de Fevereiro de 2026**

Hoje eu vou falar um pouquinho sobre **mineração de Bitcoin**

Como que funciona, como que o pessoal ganha grana com isso né, e a realidade desses miners

Eu to bem feliz que a gente conseguiu passar do Night Talk #10, eu imagino lá pra frente com uns **200, 300, 400** talks já, e fico tipo, caramba, se a gente seguir nisso vai ser muito bacana

Aliás, vou tentar mudar meu tom a partir de agora, menos formal, se você lê isso e gostou, me da um retorno

Então bora lá

---

## Como que a gente minera hoje em dia?

Eu vejo uma massa gigantesca mencionar **GPU e CPU** em mineração de cripto e assim

>**NÃO** da mais pra minerar, não da pra competir com os miners, usando uma GPU e CPU hoje em dia beleza?

Talvez há um bom tempo atrás seria possível minerar uma quantia legal com uma rede de computadores, botnet e tals, mas **bastante** infectados mesmo

Mas ta morto faz um tempão

Hoje em dia a gente usa ASIC miners, **um dispositivo especifico pra mineração de hashes**

---

## Por que morreu? Medidas de Hash

Antes de continuar, _vamos entender como funciona a mineração_

Dentro da rede bitcoin temos uma sequência de hashes SHA-256

**Explicação rápida**

Hashes são uma função criptográfica que transforma qualquer valor, seja arquivo, texto, senha, tanto faz, numa sequência de caracteres que é **imutável**, **única** e **fixa**, uma _impressão digital_

O hash sendo imutável não pode retornar ao dado que ele era antes, isso é bem útil pra sistemas robustos né, tipo bancos, armazenamento de senhas e redes de cripto no geral

O SHA-256 é o modelo usado na rede bitcoin, ele é baseado, como o nome já diz, em **256-bits**, e foi desenvolvido pela _NSA_ né, a agência de segurança nacional americana lá, um lugar que é tipo, meta pra hacker ético, acho muito legal, mas enfim

É aqui que entra os ASIC miners

---
## Blockchain, o livro da descentralização

A blockchain é um **registro digital descentralizado**, é como se fosse um livro de transações, que elimina a necessidade de intermediarios, que é ideia central do bitcoin né

Então a mineração é basicamente máquinas potentes, os ASICS, competindo pra descobrir uma conta matemática complexa, que resulta num hash SHA-256, se esse hash é validado, _cria-se um novo bloco_ na blockchain, e é dado uma recompensa em **BTC** ao dispositivo que resolveu

Esse processo é chamado de PoW ⭢ Proof of Work

_Pontos chave e modelinho mental:_

- **Finalidade** ⭢ Registrar transações na blockchain de forma _segura_ e _inalterável_

- **Recompensa** ⭢ O primeiro a resolver ganha _BTC recém-criado e taxas de transação_

- **Consumo & Equipamento** ⭢ Necessita máquinas de poder alto (as _ASICS_ q eu falei), e muita energia

- **Processo** ⭢ Miners vão _competir_ pra ver quem adivinha um hash SHA-256 de acordo com os requisitos da _rede BTC_

- **Halving** ⭢ A cada ~4 anos a recompensa é cortada pela metade, atualmente estamos em _~3.125 BTC_ por hash

---

## Agora sim, voltando aos ASIC miners e medidas de hashrate

**Hashrate** é a medida de quantos hashes um dispositivo gera por segundo, e aqui fica evidente a diferença entre um GPU/CPU e um ASIC mesmo que meio pré-histórico

_Tabela de medidas de hashrate:_

| Unidade  | Abreviação | Hashes por segundo               | Contexto                                            | Uso                                                                                          |
| -------- | ---------- | -------------------------------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Megahash | MH/s       | 1.000.000 (10⁶)                  | Comum em placas de vídeo (GPUs) ou mineração antiga | Muito baixo para Bitcoin (SHA-256), usado em outras moedas como Ethereum Classic e Ravencoin |
| Gigahash | GH/s       | 1.000.000.000 (10⁹)              | Primeiras gerações de ASIC miners                   | Já obsoleto para mineração competitiva de Bitcoin                                            |
| Terahash | TH/s       | 1.000.000.000.000 (10¹²)         | Padrão para máquinas ASIC modernas individuais      | Um único ASIC potente pode gerar 100–200 TH/s                                                |
| Petahash | PH/s       | 1.000.000.000.000.000 (10¹⁵)     | Pequenas fazendas de mineração e pools médios       | Soma de milhares de dispositivos TH/s                                                        |
| Exahash  | EH/s       | 1.000.000.000.000.000.000 (10¹⁸) | Escala da rede global do Bitcoin                    | Representa o hashrate total da rede                                                          |

Como vocês podem ver, um ASIC moderno pode gerar até 200 terahashes por segundo né pessoal, e isso é **insano**

Pra vocês terem noção, eu simulei aqui uma fazenda de mineração **eliminando custos de energia e refrigeração**, depois a gente fala mais deles

Simulando com **250, 500 e 1000** ASICS da maior potência (200 TH/s)

_Se liga na tabela:_

| Quantidade de ASICs | Hashrate total | Investimento estimado          | % da rede Bitcoin | Lucro mensal estimado | Lucro anual estimado |
| ------------------- | -------------- | ------------------------------ | ----------------- | --------------------- | -------------------- |
| 250 máquinas        | 50 PH/s        | US$ 1.250.000 (~R$ 6.250.000)  | ~0,0083%          | ~R$ 625.000           | ~R$ 7.500.000        |
| 500 máquinas        | 100 PH/s       | US$ 2.500.000 (~R$ 12.500.000) | ~0,0167%          | ~R$ 1.250.000         | ~R$ 15.000.000       |
| 1000 máquinas       | 200 PH/s       | US$ 5.000.000 (~R$ 25.000.000) | ~0,033%           | ~R$ 2.500.000         | ~R$ 30.000.000       |

Mas isso tudo sem contar valores de **energia/locação/refrigeração** que eu desconsiderei no cálculo

Geralmente o pessoal até procura locais com _energia subsidiada_, tipo no **BR** mesmo que tem algumas partes do país com hidréletrica subsidiada, **Canada** tem muito também, **China** tinha antes de banirem, **Russia** e enfim

Ou até fazendas solares gigantescas e tals, mas ai tem que ter até contrato com usinas próximas e tudo mais

Canada inclusive um dos **melhores** locais, por conta da energia barata, locação acessível também, e clima frio, que reduz **UM POUCO** a refrigeração necessária

E a realidade é essa rapazeada ⭢ Não da pra minerar cripto no PC velho de casa, infelizmente, tem que desembolsar alguns milhões de doláres aí

---

## Ligando com computação quântica

O Night-talk sobre computação quântica e BTC foi o meu primeiro, mas eu vou sempre bater na tecla **denovo e denovo**

Assim, tem tanto, mas tanto, profissionais (entre muitas aspas), mais pra frentão e tudo mais, que manjam do assunto né kkkkkkkk, que dizem que as quedas são culpa da computação quântica

Mas não faz sentido nenhum, assim como eu falo lá no episódio 1, ele iria acabar se saísse amanhã um PC quântico desses

Mas não vai, vai **demorar** bastante ainda, e quando sair, te garanto que a **última coisa** que vão pensar é em criptomoeda

**BTC é uma engenharia elegante, um ecossistema da tecnologia, não é um software estático, ele caminha, ele evolui**

>Tem tantas **BIPs** focadas em melhorar isso desde já que vocês **não tem ideia**

Então eu diria que computação quântica, é sim um problema pro BTC, **mas** não só pra ele, pro mundo todo, e acredito que o bitcoin tem tempo e profissionais para evoluir e melhorar essa questão até a deadline né kkkkkk

Foi isso pessoal, hoje eu quis trazer mais dados, mas fazer algo mais informal

Esse foi o **Night Talk episódio 11**

Gostou? Lê o resto pô

Abraços,
**Rian**

