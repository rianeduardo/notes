# The Global Backbone

**February 20th, 2026**

> First of all, before diving in BGP, let's understand the global network backbone, The Big Network.

*When we say big networks, we mean the huge global networks that form the backbone of the internet.*

**In simple terms:**

> **They are the networks that connect countries, continents, and thousands of smaller networks together.**

Without them:

- there would be no global internet

- only small isolated networks

---

**How is the Internet structured?**

It's not  a single network,   it's a network of  networks.

**ROUGH STRUCTURE:**

```
User
↓
Local ISP
↓
National providers
↓
Global backbone (BIG Networks)
↓
Data Centers/Big Tech Networks
```

**The Big Networks live mainly in the Global Backbone Layer**

---
**_Who_ are these Big Networks?**

They are classified in **3 tiers:**

> **TIER 1  - The True Backbone Owners**

**These are the LARGEST networks in the planet**

_They:_

- Do **not** pay anyone for internet transit
- Only do free peering with **other** Tier 1 networks
- Can reach **anywhere** on the internet **without buying transit**

**Forming the Core of the Internet.**

_Examples:_

- Lumen / Level 3

- Cogent

- NTT

- Telia

- Tata Communications

- GTT

- Hurricane Electric

_They own:_

- Global fiber networks

-  Intercontinental links

-  Submarine cables

- Massive datacenter infrastructure

**These companies are the highways of the internet.**

> **TIER 2 - Large National & International providers**

_These:_

- Buy transit from **Tier 1**
  
- Also **sell transit to smaller networks**
  
- Have **strong** regional and international presence

_Examples:_

- AT&T

- Verizon

- Deutsche Telekom

- Telefónica

- Orange

- NTT (some divisions)

> **TIER 3 - Local ISPs**

_These:_

- Serve **end users**

- Buy transit from **Tier 1 and Tier 2**

_Examples:_

- Vivo

- Claro

- TIM

- Local fiber providers

**Visualizing it:**
```
Tier 1 (Global Backbone)
↓
Tier 2 (National)
↓
Tier 3 (Local ISP)
↓
End  User
```

---
**Submarine Cables**

Almost all intercontinental traffic goes through submarine fiber optic cables.

_These cables:_

- Cross oceans

- Carry ~99% of international data

- Cost billions of dollars

- Are owned mainly by:

  - Tier 1 providers

  - Google

  - Meta

  - Amazon

  - Microsoft

So yes, **Big Tech owns large parts of the physical internet.**

---
**About the Big Techs**

They are not **just websites.**

_They are massive global networks._

_Examples:_

- Google → AS15169

- Cloudflare → AS13335

- Amazon AWS → AS16509

- Meta → AS32934 ***(Wanna know more about this? Check the ASN-AS.md doc)***

_They have:_

- Private global backbone

- Their own fiber

- Their own submarine cables

- Direct connections to thousands of ISPs

---
**Why is cloudflare so fast?**

Cloudflare is present in **300+ countries**, connected directly inside almost every major IXP, has physical servers close to any end user, so **data barely travels → ultra-low latency**

---
**What is an IXP?**

>Internet Exchange Point

_A physical building where:_

>Hundreds or thousands of networks plug in together to exchange traffic.

_Think of it like:_

>A massive network meeting point.

In Brazil:

- IX.br → one of the largest IXPs in the world

Inside an IXP:

- Google

- Cloudflare

- Banks

- ISPs

- Governments

- Universities

**All connected in the same physical place.**

---
**Real incidents**

The internet is an asset, it's **physical, geopolitical, economic & strategic**

So things like these always occur, and are occuring **right now:**
Real incidents:

- China hijacking international routes

- Iran redirecting traffic

- Russia intercepting European flows

**This is real cyber war territory.**

**END**