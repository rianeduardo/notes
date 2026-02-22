# ARP - The protocol that makes local networks work

ARP is very important, but also one of the **most simple protocols in networking**

And one of the **most dangerous**

_If we understand ARP deeply we understand:_

- How devices find each other

- How local networks truly work

- Why MITM attacks are possible

- How sniffing, poisoning and spoofing happen

- Why internal networks are fragile

- And much more...

---
**What is ARP**

ARP stands for **Address Resolution Protocol**

ARP maps IP addresses to MAC addresses

_And that answers a critical question:_
>**WHO** owns this IP address in my local network?

----
**Quick explanation on MAC**

It stands for **Media Access Control**

It's an identifier, just like IP, but it addresses physical devices

It uses 48 bits, 24 first belonging to the manufacturer **(OUI)** and the last to the device itself **(NIC)**

48 bits means ~281 trillion addresses, so we have a vast amount to use still

_Example:_
```
A1:B4:C5:C1:DD:3E
```

And as you can see, it's built in hexadecimal digits.

---
**Why ARP exists**

Computers communicate locally through MAC, not IP

But applications use IP

So we need a "translator", ARP is the guy

---
**Where does ARP operate**

Fundamental: ARP **does not** cross routers

It only works inside local networks (LAN)

---
**Basic ARP flow**

Let's simulate

_Suppose you are:_
```
IP → 192.168.1.15
Gateway → 192.168.1.1
```

Your PC sends traffic to the gateway, it's your router, he's the one who does all the communication

But as I said, we don't use IP for LAN communication, and our computer doesn't know the MAC address of our router/gateway

_So it sends a broadcast:_

>**ARP REQUEST** 
>
>Who has 192.168.1.1?

Since it's a broadcast, **EVERY** device on the LAN receives it.

_The real owner will answer on unicast:_
>**ARP REPLY**
>
>_192.168.1.1_ is at _A1:B2:C3:D4:E5:F6_

And to eliminate the necessity of asking this on broadcast every single time, your computer stores this in **ARP Cache**

---
**ARP Cache**

_Each device stores the ARP mapping  this:_

| IP           | MAC               |
| ------------ | ----------------- |
| 192.168.1.1  | AA:BB:CC:DD:EE:FF |
| 192.168.1.20 | 11:22:33:44:55:66 |

This eliminates constant broadcasting as I said, and unecessary traffic consequently.

---
**ARP packet types**

_There are only two types as we saw earlier:_

- ARP Request

- ARP Reply

And here comes the big ol' problem, ARP has no authentication

It's where hacking starts

ARP has an interesting structure, but damn, the trust model is a **HUGE flaw**

It's built on **blind trust**

_If someone says:_
>_192.168.1.1_ is at _A5:BB:C3:D2:EE:FF_

Everyone simply believes it, stores in the cache, like nothing happened

And that's it, literally no auth, no cryptography, no validation **at all**

---
**ARP spoofing / ARP poisoning**

This attack consists of poisoning the cache, like we just saw, but why?

So we can become the MITM (Man-In-The-Middle) between the victim and the gateway

This way we can capture all the packets the victim sends

_Classic MITM via ARP poisoning:_

>**Victim** → 192.168.1.22
>
>**Gateway** → 192.168.1.1
>
>**Attacker** → 192.168.1.53

_Attacker sends to Victim:_
>_192.168.1.1_ at _ATTACKER-MAC_

_Attacker sends to Gateway:_
>_192.168.1.22_ at _ATTACKER-MAC_

_And now:_
>Victim ↔ Attacker ↔ Gateway

_Attacker can now see:_

- Passwords

- Tokens

- Cookies

- DNS queries

- Traffic

- Everything...

---
**What can be done with ARP poisoning and what tools are used**

_You could abuse:_

- Full traffic sniffing

- Credential harvesting

- Session hijacking

- DNS spoofing

- Payload injection

- Transparent proxying

- SSL stripping (if misconfig)

- Much more...

_You can use these tools:_

- arpspoff

- ettercap

- bettercap

- dnsniff

- responder

**These tools and exploits will have their own docs later on!**

---
**ARP scanning**

Most people use nmap on LAN to do network discovery, but ARP is much faster and accurate

_Instead of:_
```
nmap -sn 192.168.1.0/24
```

_You use:_
```
arp-scan 192.168.1.0/24
``` 

---
**GARP**

Garp stands for **Gratuitous ARP**

It's the tech to anounce a ARP Reply, without ever receiving a ARP Request.

_Used for:_

- IP Takeover

- Load balancing

- Cache updates

- Redundancy

Also abused in network takeover attacks

---
**ARP & Switches**

ARP interacts with switch forwarding tables

This can lead to MAC flooding, network pivoting, switch spoofing and more

This crosses into Layer 2 hacking, which we'll talk more later on also, on the security tab

---
**Why are these attacks devastating**

Because of the humongous design flaw of ARP, understand that:

- No auth

- No exploit

- No vulnerability (technically)

Can lead you to literally own the traffic, you just need access to LAN

---
**How to defend against these**

- Dynamic ARP Inspection (DAI)

- Static ARP entries (limited)

- VLAN segmentation

- Zero trust networking

- Encrypted traffic (HTTPS, TLS, VPN)

- Network monitoring

---
**Mental model**

Another one of my mental models for you guys

_Think of it like:_
>**IP** → Logical identity
>
>**MAC** → Physical identity
>
>**ARP** → Identity resolver

And if you break ARP, you break network's trust itself

And a curiosity here, most corporate attacks, that are like, big, important hacks, start on Layer 2 hacking, which includes ARP vulns.

**END**