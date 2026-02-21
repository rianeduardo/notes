# IP - The foundation of everything

We all know IP is the base-language of the Internet, literally everything else depends of it:

- TCP

- UDP

- HTTP

- DNS

- BGP

- VPNs

- FIrewalls

- Routing

- Hacking

And much more.

**If you understand IP deeply, you understand how the Internet works really**

---
**What is IP?**

Let's start from the basics. **IP = Internet Protocol**

It's responsible for adressing and delivering packets across networks, in simple terms:

> *IP answers TWO fundamental questions in traffic*
>
> **1. Who is sending this data?**
>
> **2. Who is receiving this data?**

---
**What does IP not do**

This is important for later concepts:

_IP DOES NOT guarantee:_

- Delivery

- Order
  
- Reliability

- Error correction

**It only does his classic best-effort delivery.**

_That's why we need other protocols, based on IP, like TCP, QUIC, etc. We'll be seeing every single one of them_

---
**IPv4 x IPv6**

This is a **core-concept.**

**IPv4**

- 32-bit addresses

- ~4.3 billion addresses total

_Example:_
```
192.168.1.1
```

_Structure:_
```
8 bits. 8 bits. 8 bits. 8 bits

11000000.10101000.00000001.00000001
``` 

The problem is, 4.3 billion addresses, we passed this number of devices a long time ago, so we literally ran out of IPv4, yes.

**IPv6**

- 128-bit addresses, now we talking power

- ~3.4 * 10³⁸ addresses, I swear, if someday IPv6 runs out, we need to evolve the whole Internet.
  
_Example:_
```
2001:0db8:85a3:0000:0000:8a2e:0370:7334
```

_Shortened:_
```
2001:db8:85a3::8a2e:370:7334
``` 

**Advantages:**

- No NAT needed (We'll see this soon)

- Auto-config

- Better routing efficiency

- Built-in IPSec support

- **MASSIVE** address space

---
**CIDR**

CIDR defines how big a network is.

It means Classless Inter-Domain Routing.

_Example:_
```
192.168.1.1/24
```

The /24 is CIDR, it means that the first 24 bits are network bits, that means only the last 8 bits are identifiers really, so we could have:

```
192.168.1.1/24
192.168.1.2/24
192.168.1.3/24
192.168.1.4/24
192.168.1.5/24
192.168.1.6/24

And the list goes on... Until 256 IPs
```

We can discover how many devices we can fit with: 2^(Host bits)

_Common CIDR notations:_

| CIDR | IPs    |
| ---- | ------ |
| /32  | 1      |
| /30  | 4      |
| /29  | 8      |
| /28  | 16     |
| /27  | 32     |
| /26  | 64     |
| /25  | 128    |
| /24  | 256    |
| /16  | 65,536 |

---
**Subnetting, dividing networks**

Here we can split a big network into smaller logical networks, such as sectors in an enterprise.

_Example:_
```
192.168.0.0/24
```

_Split into 4 networks:_
```
192.168.0.0/26
192.168.0.64/26
192.168.0.128/26
192.168.0.192/26
```

Each one has **64 IPs**

But why does this even matter you may ask:

- Network segmentation

- Security isolation

- Performance optimization

- Access control

- Cloud network designs

- Firewall policy designs

- And much, much more reasons

**Subnetting is a core network architecture skill.**

---
**Private x Public IPs**

Public IP addresses are **globally routable** and **unique** on the Internet.

_Example:_
```
Google → 8.8.8.8
```

Private IP addresses aren't routable on the Internet, common ranges would be:

```
10.0.0.0/8
172.16.0.0/12
192.168.0.0/16
```
_These are used in:_

- Homes

- Companies

- Datacenters

- Clouds

**Here you understand the difference between a network, and Internet.**

---
**NAT**

NAT allows multiple private devices → Share one public IP.

It means **Network Address Translation.**

This one deserves it's own document, so I recommend reading **NAT.md** later.

_For now, conceptual view:_

>**Private IP → NAT → Public IP → Internet**

---
**MTU**

MTU defines the maximum packet size that can travel **without fragmentation**.

It means **Maximum Transmission Unit.**

Ethernet default is 1500 bytes.

_Why does it matter:_

- Wrong MTU:

    - Slow Connections

    - Broken VPNs

    - Hanging connections

    - Packet fragmentation attacks

    - Tunneling failures

*We're going to see everything later on.*

---
**ICMP, control and errors**

ICMP means **Internet Control Message Protocol**

It's fundamental to message and diagnose errors on the network, the diagnostic protocol of IP.

_Used in:_

- Ping

- Traceroute

- Error reporting

_Example:_

```
bash

ping google.com
```

_Uses:_

```
ICMP Echo Request / Echo Reply
```

**ICMP and security:**

It can be abused for:

- Network mapping

- Host discovery

- Firewall bypass tech

- Tunneling data

- Covert channels

**We'll later discuss more in a hacking-focused ICMP doc.**

---
**How IP actually moves data**

This is our core, the packets.

Data is split into those packets.

_Each one contains:_
```
[ IP Header | TCP/UDP Header | Payload ]
```

_IP Header contains:_

- Source IP

- Destination IP

- TTL

- Protocol

- Fragment Info

---
**TTL**

It means **Time To Live**

TTL prevents infinite routing loops.

_Each router:_
>**TTL -= 1**

When TTL reaches **0:**

- Packet is dropped

- ICMP Time Exceeded sent back

_This is how tracert works_

---
**Conclusion**

This was it for IP fundamentals, I highly recommend reading: **NAT.md → ARP.md**

**END**