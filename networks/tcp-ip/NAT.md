# NAT - The invisible heart of the Internet

_Recommended reading: IP.md_

**NAT (Network Address Translation)** is one of the most misunderstood concepts in networks, yet, it is **absolutely fundamental.**

_You don't see this depth in courses_

**If we understand NAT deeply, we learn:**

- How traffic leaves your computer

- Why port forwarding exists

- Why reverse shells work

- Why P2P protocol is hard

- Why cloud network FEELS confusing

- Why WebRTC leaks IPs

- Why VPNs break sometimes

- And much more...

---
**What is NAT**

As we spoke before, NAT allows multiple devices to share one public IP address, allowing internal networks to communicate with the Internet, even though we don't have enough public IP addresses for everyone.

_Conceptual view once more:_
>**Private IP → NAT → Public IP → Internet**

---
**Why NAT exists**

Obviously because of our IPv4 efficiency, we saw earlier that we have ~4.3 billion public IP addresses, that's not even close enough to feed all the devices on Earth.

_So NAT comes in handy_

**Allowing 1000+ devices in one single public IP**

_Without this we'd have collapsed times ago_

---
**How does it work**

Let's make a conceptual massive view here, imagine:

>**Your PC → 192.168.1.10**<br>
>**Router → Public IP → 200.10.50.2**

_When your pc accesses:_

>**google.com:443**

_The router does:_

>**Source IP: 192.168.1.10 → 200.10.50.2**<br>
>**Source Port: 51234 → 40001**

_Then the packet becomes:_

>**200.10.50.2:40001 → 142.250.78.14:443**

_The router stores this mapping in a NAT table:_

>**192.168.1.10:51234 ↔ 200.10.50.2:40001**

_When the response comes back:_

>**142.250.78.14:443 → 200.10.50.2:40001**

_The router:_

- **Checks NAT table**

- **Rewrites destination**

- **Sends back to _192.168.1.10:51234_**

This happens thousands of times per second.

---
**NAT table**

_Here is an example of a NAT table:_

| Internal IP  | Internal Port | Public IP   | Public Port |
| ------------ | ------------- | ----------- | ----------- |
| 192.168.1.10 | 51234         | 200.10.50.2 | 40001       |
| 192.168.1.11 | 53001         | 200.10.50.2 | 40002       |
| 192.168.1.12 | 49821         | 200.10.50.2 | 40003       |

**This allows thousands of devices to share one public IP safely.**

---
**Types of NAT**

We have three types of NAT, **static**, **dynamic** and **pat/napt**

**STATIC**

_One private IP ↔ One public IP (Fixed)_

Used in servers, hosting and public-facing services.

_Security:_

- Exposes internal hosts

- Needs strong firewall rules

**DYNAMIC**

_One private IP ↔ One public IP from a pool_

_Example:_

```
192.168.1.10 ↔ 200.10.50.2
192.168.1.11 ↔ 200.10.50.3
```

Used when an ISP has multiple public IPs, large corporate networks, etc.

**PAT/NAPT**

Most common one, what we use at home

_Multiple devices → One public IP using ports_

_Example:_
```
192.168.1.10:51234 → 200.10.50.2:40001
192.168.1.11:53001 → 200.10.50.2:40002
192.168.1.12:49821 → 200.10.50.2:40003
```  

This is what people usually mean when saying NAT.

---
**NAT transversal**

_Because NAT blocks unsolicited inbound traffic, special techniques exist to bypass or traverse it_

**This is extremely important in:**

- VPNs

- VoIPs

- WebRTC (Remember the leaks?)

- P2P

- Reverse shell

- Malware C2

_Some common NAT traverse tech:_

- STUN

- TURN

- ICE

- UDP hole punching

- TCP hole punching

**These deserve a special doc later on, probably on this directory still**

---
**Port forwarding**

This opens holes in NAT, because port forwarding manually creates **static** NAT rules.

```
Public: 200.10.50.2:8080 → Private: 192.168.1.10:80
``` 

Meaning that anyone on the Internet acessing port 8080 could reach your server

This is used for hosting services, game servers, remote access and labs.

_Security risk:_

- Exposes internal machines directly

---
**Hairpin NAT**

This allows internal devices to access internal services using the public IP.

_Example:_
```
192.168.1.10 → 200.10.50.2 → 192.168.1.20
```

Without Hairpin NAT internal services would break when accessed via public DNS.

---
**NAT in Cloud Environments**

This is much more **complex**

_Examples:_

- AWS NAT Gateway

- GCP Cloud NAT

- Azure NAT Gateway

_They handle:_

- Massive-scale NAT

- High availability

- Multi-zone failover

- Load balancing

- Logging

**Understanding NAT deeply is key to Cloud network**

---
**NAT & Firewall**

NAT and Firewalls usually work together

As we know, by default NAT blocks all unsolicited inbound connections.

This gives a **false** sense of security, a important truth is that **NAT isn't a Firewall, it behaves like one**

Many attacks can exploit bad port forwarding builds, weak firewall + nat misconfigs and UPnP auto-opened ports

---
**Quick explanation on UPnP**

It means **Universal Plug and Play**

It's a set of network protocols that allows domestic devices to connect and communicate automatically, opening up ports and port forwarding.

---
**NAT & Hacking**

NAT is pure gold in hacking, understanding it leads you to:

- Build reliable reverse shells

- Bypass firewalls

- Exploit NAT traversal flaws

- Abuse UPnP

- Build covert tunnels

- Understand malware C2 infrastructure

- Break VPN assumptions

**Reverse Shell + NAT**

Reverse Shell is a tech that opens up an outgoing connection back to the attacker's machine, this way we can bypass firewall rules and NAT

_Victim behind NAT:_
```
Victim → Attacker
```

_Instead of:_
```
Attacker → Victim (NAT blocks this)
```

---
**NAT & VPNs**

_VPNs must:_

- Encapsulate traffic

- Traverse NAT

- Avoid fragmentation

- Keep NAT bindings alive

_This explains:_

- VPN drops

- Hanging tunnels

- MTU weirdness

- UDP x TCP VPN debates

---
**Common NAT problems**

- Double NAT

- Symmetric NAT

- P2P failures

- Timeout drops

- Broken port forwarding

- MTU black holes

All these secretly cause those sunday "My internet is weird" probs.

---
**Mental model**

I've prepared a mental model in NAT, to help you understand it:

>**NAT = A massive stateful traffic translator + gatekeeper**

_It can:_

- Rewrite addresses

- Track flows

- Block unsolicited packets

- Control visibility