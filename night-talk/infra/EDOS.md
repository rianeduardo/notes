# Night Talk #22 — Como o hacking moderno pode falir empresas inteiras

**1 de março de 2026**

Esse é o **Night Talk 22**

E hoje, pessoal, a gente vai falar sobre **como o hacking moderno tá literalmsente acabando com o financeiro das empresas** né, principalmente por causa desse **boom recente da computação em nuvem**

**Cloud** é uma das minhas áreas de interesse no ramo de cibersegurança, e hoje você pode **entender o por que**

Esse talk vai ser **bem importante**

Hoje a gente vive num cenário onde qualquer projeto pode escalar **muito rápido**

Se você fizer um bom trabalho, tiver uma boa ideia e executar bem, as chances do seu negócio crescerem **absurdamente** são muito grandes.

Só que, ao mesmo tempo, esse crescimento traz **novos riscos**, principalmente quando falamos de **infraestrutura, nuvem e segurança**

---

## O problema da escalabilidade moderna

Hoje, praticamente todo sistema roda em **servidores na internet**

Se esse servidor não consegue **aguentar o volume de tráfego**, começam a surgir _vários problemas:_

- Lentidão  
  
- Travamentos  
  
- Quedas constantes  
  
- Indisponibilidade  

Pra resolver isso, surgiram _vários modelos modernos de infraestrutura:_

- **Load balancing** (distribuição de carga entre vários servidores)  
  
- **CDNs**, como os da Cloudflare q eu comento sobre no talk 18 ``APAGÃO-CLOUDFLARE.md``
  
- **Containers com Docker**  
  
- **Orquestração com Kubernetes**  
  
- **Auto escalabilidade na nuvem**

E é aqui que entra **o maior perigo moderno**

---

## Pay as you go, o modelo que pode te quebrar financeiramente

Hoje, quando uma empresa hospeda seus serviços na nuvem, como na **AWS**, **Google Cloud** ou **Azure**, ela geralmente usa um modelo chamado:

> **Pay as you go → pague sob demanda**

A ideia é simples:

Vamos supor que meu servidor aguente **500 usuários simultâneos**

Num dia qualquer, acontece algum evento inesperado e meu site recebe sei lá, **800 usuários ao mesmo tempo**, deu black friday, algo do tipo.

Se eu estiver usando um servidor tradicional, ele simplesmente vai:

> **Crashar, travar, cair e virar um caos.**

Agora, quando eu uso **nuvem com auto escalabilidade**, o que acontece?

_Assim que esse limite é ultrapassado:_

- Novos servidores são criados automaticamente  
  
- Novas instâncias sobem  
  
- Novos containers são iniciados  
  
- O tráfego é redistribuído  

_Ou seja:_

> Quanto mais tráfego → mais infraestrutura → mais custo.

Quando o tráfego cai, essas máquinas extras são desligadas, e você paga **somente pelo que usou**

Isso é **sensacional pra crescimento saudável**, mas **extremamente perigoso se não houver segurança**

---

## Onde entra o hacking nisso tudo?

Hoje em dia, muitas startups e empresas pequenas querem usar nuvem por causa da facilidade e escalabilidade.

Só que a realidade é que, muitas dessas empresas **não têm profissionais experientes em segurança**

_Muitas vezes são:_

- Vibe coders  
  
- Desenvolvedores low-code  
  
- Pessoas dependentes de IA  
  
- Gente sem vivência real de produção  

E isso cria **falhas básicas de segurança**

Uma das mais perigosas:

> **Ausência de Rate Limit.**

---

## Rate Limit

**Rate limit** serve para limitar:

> **X requisições por Y minutos para cada usuário**

_Exemplo:_

> Cada usuário pode fazer **50 requisições a cada 15 minutos**

Isso evita:

- Brute force  
  
- Scraping agressivo  
  
- Abuso de API  
  
- E principalmente **ataques de negação de serviço**

---

## Do DDoS ao EDOS

Antigamente, ataques de negação de serviço tinham como objetivo

**Derrubar o servidor**

Hoje, o objetivo é muito mais cruel

**Quebrar financeiramente a empresa**

Esse novo modelo de ataque se chama EDOS, Economic Denial of Sustainability ou em pt-br:

> Negação econômica de sustentabilidade

---

## Como funciona um ataque EDOS?

Se um sistema **não tem rate limit**, o atacante pode:

- Enviar milhões de requisições  
  
- Forçar escalabilidade automática  
  
- Fazer os servidores se multiplicarem  

_Enquanto isso:_

> O dono do sistema acha que **não tem nada acontecendo**

Mas, nos bastidores:

- Novos servidores estão sendo criados  
  
- Containers estão subindo  
  
- Instâncias estão sendo escaladas  

E então o custo financeiro literal explode

_Resultado:_

> Empresas perdem milhares de reais em poucas horas
> 
> Algumas **entram em falência**

Tudo isso por **não aplicar uma regra básica de segurança** que levaria **menos de 15 minutos pra configurar**

---

## Docker e Kubernetes

Isso não acontece só em nuvem tradicional.

Pode acontecer também em:

- **Docker**
  
- **Kubernetes**

Em escalas menores, mas o problema ainda é sério, e mais comum do que ataques em servidores mesmo

## O que é Docker?

_Docker é uma plataforma que:_

> Cria, distribui e executa aplicações em **containers**.

_Um container é basicamente:_

> Um **fragmento isolado de um sistema**, geralmente Linux, rodando só o que seu app precisa.

Isso economiza:

- Recursos  
  
- Dinheiro  
  
- Tempo  

---

## E o Kubernetes?

Kubernetes é quem "orquestra" esses containers

_Ele decide:_

- Quando criar novos  
  
- Quando matar processos  
  
- Quando escalar  
  
- Como distribuir carga  

Ou seja, ele faz exatamente o mesmo papel da auto escalabilidade da nuvem

---

## Onde mora o perigo no Kubernetes?

Se você **não configura limites**, o Kubernetes:

- Cria containers **infinitamente**
  
- Consome **CPU**
  
- Consome **memória**
  
- Consome **banda**  
  
- Consome **dinheiro**

Mesmo sendo mais barato que servidores tradicionais, **o prejuízo financeiro ainda é muito grande**

---

## Resumo do caos moderno

Hoje, o hacking moderno não quer só derrubar seu site.

_Ele quer:_

> **Destruir sua sustentabilidade financeira.**

_Isso acontece principalmente por:_

- Falta de rate limit  
  
- Má configuração de nuvem 
  
- Escalabilidade sem controle  
  
- Falta de monitoramento  
  
- Ausência de profissionais experientes  

---

## Conclusão

_A nuvem trouxe:_

> **Crescimento absurdo, escalabilidade infinita e facilidade extrema**

_Mas também trouxe:_

> **Novas superfícies de ataque extremamente perigosas**

_Um pequeno erro de configuração hoje pode:_

>Literalmente **falir uma empresa inteira.**

Por isso, segurança **não é luxo**, é **sobrevivência**

Esse foi o talk 22

Abraços,  
**Rian**