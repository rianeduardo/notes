# What is ASN? And AS?

**February 20th, 2026**

In the backbone docs we saw numbers associated to big techs, but...

**What are these numbers, like AS16509?**

These numbers are called:

>**ASN →  Autonomous System Number**

_An ASN is a unique ID assigned to each large network on the internet._

_An Autonomous System (AS) is:_

>**A group of IP networks under one single administrative control, that follows one routing policy.**

_In simpler words:_

>**A big network that manages itself.**

| Company         | ASN     |
| --------------- | ------- |
| Google          | AS15169 |
| Cloudflare      | AS13335 |
| Amazon AWS      | AS16509 |
| Meta (Facebook) | AS32934 |
| Microsoft       | AS8075  |

Why do we even need these? Because BGP doesn't think in routers, it thinks in networks.

_So instead of:_

>**Router  X  → Router Y → Router Z**

_It works like:_

>**AS6453 → AS3356 → AS15169**

This is called **AS-PATH**

_Example:_

```
Your ISP → Google

Path:
AS28135 → AS3356 → AS15169
```
---
**Why are ASN important for security?**

Because every BGP attack is about lying with ASN.

_If I announce:_

>"Hey internet, I'm AS15169, and I own 8.8.8.0/24"

_If others believe it:_
**→ I hijack Google traffic.**

_This is:_

>**BGP Hijacking**

_There are also 16-bit ASN (Deprecated), and 32-bit ASN (Modern), and also private ASNs, those are used in labs, enterprises, datacenters, etc_

**END**