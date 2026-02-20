# So, what is BGP?

**February 20th, 2026**

I suggest reading **ASN-AS.md** and **BACKBONE.md** before enrolling in this doc.

*Without further ado:*

>**BGP (Border Gateway Protocol)**

It's the protocol that connects **all large networks in the Internet together.**

Basically the routing protocol of the Internet, not a simple RIP.

Without BGP Google wouldn't reach Netflix, Brazil wouldn't reach Japan, basically zero global connection.

---
**What problem does BGP solve?**

The internet is made of thousands of independent networks as we saw (AS)

_Each AS:_

- Is owned by a different company

- Has its own routers

- Has its own rules

- Has its own policies

_So the problem is:_

> How do all these **independent** networks agree on how to reach out to each other?

The answer... Big surprise, it's BGP.

---
**What does BGP _actually_ do?**

BGP exchanges routing information between Autonomous Systems.

_It basically says:_

>“To reach these IP networks, send traffic through me.”

This information is called **route advertisements.**

And it uses the **AS-PATHs** we saw before.

---
**Key-concept: BGP is a _policy-based_ protocol**

This is **huge.**

_Most routing protocols try to find:_

>**The shortest path**

_BGP tries to find:_

>**The best path based on rules and policies**

_That means:_

- Business decisions

- Cost optimization

- Traffic engineering

- Redundancy

- Performance tuning

All influence which path BGP chooses.

---
**Types of BGP**

1 → **eBGP - External BGP**

_Used between different AS._

It's what builds the internet itself.

2 → **iBGP - Internal BGP**

_Used inside the same AS_

Like Google routers talking to each other, generally with the purpose to **distribute external routes inside a large network**

---
**How two BGP routers communicate**

TCP connection established on port 179.

_The basic flow would be:_

```
OPEN → KEEPALIVE → UPDATE → KEEPALIVE → KEEPALIVE → ...
```

- **OPEN: Start session**

- **KEEPALIVE: Keep the connection**

- **UPDATE: Send routes**

---
**What does a BGP route contain**

Main attributes:

1 → **PREFIX**

Which network this route reaches, like **8.8.8.0/24.**

2 → **AS-PATH**

Which AS sequence traffic must go through, like **AWS ASN → Microsoft ASN → Google ASN.**

3 → **NEXT-HOP**

Next router IP.

4 → **LOCAL-PREF**

Which path your network prefers.

---
**How BGP chooses the best path**

We already know it's an policy-based protocol, so let's develop more, but still simplyfing a lot.

_In order:_

- Highest **LOCAL-PREF**

- Shortest **AS-PATH**
  
- Best **origin-type**
  
- Lowest **MED**
  
- Other technical **tie-breakers**

---
**BGP builds**

_It builds:_

>**The global routing table of the internet.**

_This table contains:_

>**~1,000,000+ routes (IPv4 + IPv6)**

_Each route tells:_

>**How to reach that network**

Every big router on the internet holds a **massive BGP table.**

---
**How traffic flows**

_Let's supposed we opened up:_

>**google.com**

_My router:_

**1.** Check its **routing table**

**2.** Finds the **best BGP route**

**3.** Sends traffic to the **next AS**

**4.** That AS will **repeat** this process until it reaches Google

**ALL based on those BGP decisions we saw.**

---
**Why is it dangerous**

Incredibly, BGP **has no built-in auth by default**

So we can lie, and perform those BGP hijacking attacks we saw in **BACKBONE.md** and **ASN-AS.md**

_Also route leaks can occur, leading to:_

- Internet outages
  
- Traffic chaos

- Regional blackouts
  
---
**How BGP is being secured**

**1.** RPKI

_Cryptographic validation of route ownership._

**2.** Route filtering

_ISPs filter insane announcements._

_But still:_

**BGP security is one of the biggest weak points of the internet.**

**END**