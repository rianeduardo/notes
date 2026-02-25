# Routing - Fundamentals of packet path selection

This is the process that defines **how packets travel across networks**, from a source host, to a destination host, through multiple interconnected routers

_If we understand routing, we comprehend:_

- Large-scale distributed systems

- Internet architecture

- Data center networking

- Cloud infra

- ISP backbone design

- And much more...

---
**What is routing**

_It's the process of:_

>**Selecting the _best path_ for packets to reach a destination network**

_This involves:_

- Analyzing IP addresses

- Consulting routing tables (Read ROUTING-TABLES.md)

- Selecting next hops

- Forwarding packets accordingly

_Quick hop definition:_

>A hop in computer networking is an intermediate connection a data packet traverses between its source and destination, with each hop typically representing a router. Hop count measures the total number of these devices, often used as a routing metric to find the shortest path, though it ignores speed, load, or latency.

---
**Routing x Forwarding**

| Routing                       | Forwarding                 |
| ----------------------------- | -------------------------- |
| Control plane decision-making | Data plane packet movement |
| Computes paths                | Moves packets              |
| Builds routing tables         | Uses routing tables        |
| Logical process               | Physical process           |

_In simple terms:_

>**Routing decides _where_ packets should go**
>
>**Forwarding _moves_ packets to that place**

---
**Control Plane x Data Plane**

**Control Plane**

_Responsible for:_

- Learning routes

- Calculating best paths

- Building routing tables

_Uses:_

- Routing protocols (Like RIP, OSPF, BGP, IS-IS, etc.)

- Static config

**Data Plane**

_Responsible for:_

- Forwarding packets at line-rate

- Using precomputed routing tables

_Optimized for:_

- Low latency

- High speeds

- High throughput

**Quick explanation on line rate**

_Line rate_ is the physical total speed, including overhead (headers) which bits are transmited between networks, it's measured in Bps (Bits per second → Mbps, Gbps, etc.) or packets per second

Basically represents a link's maximum capacity, different from the throughput, which is the **real** speed

---
**Routing simplified flow**

**1.** → Packet arrives at **router**

**2.** → Router extracts **destination IP** (From the packet header, remember?)

**3.** → Router performs routing table **lookup**

**4.** → **Best matching** route is selected (Via LPM)

**5.** → Next **hop** is determined

**6.** → _Packet is forwarded_

---
**Routing tables simple view**

_This has its own doc, read it!_

_Routing tables contain:_

- Destination networks

- Next-hop addresses

- Outgoing interfaces

- Metrics

- Administrative data

_Example:_

```
Destination        Next Hop        Interface        Metric
10.0.0.0/8              192.168.1.1          eth0                100
0.0.0.0/0               200.1.1.1              eth1                 10
```

---
**Longest Prefix Match**

Also called LPM, this defines that the most specific route always wins

_Example:_

``Routes:``

>0.0.0.0/0

>10.0.0.0/8

>10.1.0.0/16

>10.1.5.0/24

``Destination:``

>10.1.5.23

**BEST MATCH → 10.1.5.0/24**

This ensures high routing precision

---
**Static x Dynamic routing**

**Static routing**

Routes are manually configured

| Pros         | Cons                    |
| ------------ | ----------------------- |
| Simple       | Not scalable            |
| Predictable  | No automatic failover   |
| Low overhead | Manual maintenance also |

**Dynamic routing**

Routes are learned automatically through protocols

| Pros                 | Cons                  |
| -------------------- | --------------------- |
| Scalable             | Protocol overhead     |
| Automatic adaptation | Higher complexity     |
| Fault tolerant       | --------------------- |

---
**Default route**

The default route acts as the **last resort** sort-of

It's the IP ``0.0.0.0/0``

If no specific routes are found, via LPM, we use this path

_Common in:_

- Home routers

- Enterprise edge routers

- Cloud VPC gateways

---
**Administrative Distance**

_Also called AD_

When multiple routing provide the **same** destination, routers choose based on **administrative distance**

>**Lower AD → More trusted**

_Typical values:_

| Protocol           | AD  |
| ------------------ | --- |
| Directly connected | 0   |
| Static             | 1   |
| OSPF               | 110 |
| IS-IS              | 115 |
| RIP                | 120 |
| eBGP               | 20  |
| iBGP               | 200 |

_These values are different between different sources (Cisco, Huawei, Juniper), even though Cisco's values are the most common ones_

---
**Metrics** 

Metrics determine the **best path inside the same protocol**

_Example:_

- **RIP** → Hop count

- **OSPF** → Cost (Bandwidth)

- **IS-IS** → Cost

- **BGP** → Path attributes

---
**Routing in Internet scale**

As you can read about in docs like ``BGP.md``, ``ASN-AS.md`` and ``BACKBONE.md``, routing in the internet scale is basically BGP

**It's a protocol that standardizes communication between different AS**

AS are **large networks that connect the whole world**, each have their own rules and patterns, BGP standardizes communication in-between

---
**Routing Summary**

_Routing is:_

- The brain of network packet delivery

- A mix of algorithms, protocols and policies

- Fundamental for scalability, performance and reliability

_Understanding routing deeply is mandatory for:_

- Network engineers

- Cloud architects

- Pentesters

- Infrastructure engineers

**END**