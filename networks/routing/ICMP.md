# ICPM - The simple diagnostic protocol, that can become a covert channel

We saw a bit of ICMP (Internet Control Message Protocol) before, but let's dive into it, because I think personally it's one of the coolest protocols to explore, and I never saw universities, crash courses, really taking care of this

ICMP is very important even though it does not send application data

Instead it diagnoses, allowing devices to report errors, test connectivity, provide feedback about packet receivement and much more

_If we deeply understand ICMP, we understand:_

- How connectivity is tested

- How networks report errors

- How routing problems are detected

- How attackers map and analyze networks

---
**What is ICMP**

_ICMP is a network-layer protocol used by hosts and routers to send:_

- Error messages

- Informational messages

- Network diagnostics

It is carried **inside IP packets**, using:

- IPv4 → Protocol number 1

- IPv6 → Protocol number 58 (ICMPv6)

>**ICMP does not replace IP, it supports IP, acting as its feedback mechanism.**

---
**Why ICMP exists**

IP is a best-effort protocol, meaning it makes a maximum effort to deliver data without guaranteeing delivery, ordering, or reliability.

ICMP exists to help, inform senders when something goes wrong, troubleshoot connectivity and those we just saw

_Without ICMP:_

- Debugging networks would be almost impossible

- Routers would not be able to signal delivery problems

- Tools like ````ping```` and ````traceroute```` would not exist

---
**ICMP packet structured**

_Simplified_

>**| Type | Code | Checksum | Rest of Header | Data |**

- Type → Indicates the message category

- Code → Provides more detail about the type

- Checksum → Error checking

- Data → Depends on the ICMP message

---
**Main ICMP message types**

**1.** Echo Request / Echo Reply (Ping)

- Type 8 → Echo Request

- Type 0 → Echo Reply

_Used to:_

- Measure latency

- Test connectivity

- Detect packet loss

**2.** Time Exceeded (TTL Expiration)

Remember TTL? The Time-To-Live?

This message is the **Type 11**

Occurs when the packet's time-to-live reaches 0 before hitting it's destination

Used by tracert to map network paths

**3.** Redirect

**Type 5**

Sent by routers to tell a host that there's a better route to this destination

This optimizes routing inside networks (LAN)

**4.** Destination Unreachable

**Type 3**

Sent when a packett cannot reach its destination

_Codes:_

| Code | Meaning                       |
| ---- | ----------------------------- |
| 0    | Network unreachable           |
| 1    | Host unreachable              |
| 3    | Port unreachable              |
| 4    | Fragmentation needed (DF set) |

Very important for troubleshooting and path MTU discovery

**5.** Parameter Problem

**Type 12**

Indicates malformed IP headers

Very used to diagnose corrupted packets, invalid headers and broken network stacks

---
**How traceroute works**

_It's really simple and cool:_

- Send packets with TTL = 1

- First router drops it and replies with Type 11

- TTL = 2, second router replies

- And so on

_This reveals:_

- Network topology

- Each hop between source/destination

- Routing paths

---
**ICMP in sec.**

ICMP is very powerfull for network discovery

_Attackers use it to:_

- Map topology

- Discover hosts that are live

- Identify firewalls

- Detect filtering rules

_Common tech:_

- **TTL mapping** → Estimate network distance

- **Ping Sweep** → Find live hosts

- **ICMP-Based OS Fingerprinting**

- **Firewall Rule Probing**

---
**ICMP & Firewalls**

Many admins **block ICMP completely,** which is usually a mistake.

_Blocking all ICMP:_

- Breaks Path MTU Discovery

- Causes strange connectivity problems

- Makes debugging harder

_Best practice:_

- Allow essential ICMP types

- Restrict dangerous or unnecessary ones

So if someday you reading, need to configure firewalls, do not block every ICMP, it's a huge mistake

---
**ICMPv6**

In IPv6 ICMP is mandatory

_ICMPv6 handles:_

- Neighbor Discovery (replaces ARP)

- Router Advertisement

- Path MTU Discovery

- Router Solicitation

**Blocking ICMPv6 breaks IPv6 networking.**         

---
**Summary**

_ICMP is:_

- The diagnostic engine of IP networks

- The feedback channel for routing

- A critical security reconnaissance tool

- A core protocol for IPv6 operation

If **ARP** is the protocol that lets devices find each other,
**ICMP** is the protocol that lets networks understand themselves.

**END**