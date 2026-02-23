# React - Building with components

React is a framework that allows us to build UI using components, that can react to use states

React eliminates the necessity to reload the page to update something for the user

---
**Mentality**

_In HTML:_

>"How do I build this page?"

_In React:_

>"'Which components form this interface?"

**Everything** is reusable

Navbar, cards, buttons, everything.

---
**Mental structure**

_A React App is basically:_

```
<App>
    <Header />
    <Main>
        <Card />
        <Card />
        <Card />
    </Main>
    <Footer />
</App>
```    

---
**Creating a React App**

_We use Vite with npm:_

```
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

---
**What's a component?**

A component is basically a function which returns a HTML piece (JSX)

_Example:_

```
function Hello() {
    return <h1>Hello World</h1>
}
``` 

_To use it:_

```
<Hello />
```

**SIMPLE** as that

---
**JSX**

JSX is our HTML inside JS

It looks like HTML, but it's actually JavaScript

_Example:_

```
const name = "Rian"

return <h1>Hello, {name}</h1>
```

Notice how we can build with variables?

---
**Components w/ props**

**Props** are pieces of data you can give to a component

_Example:_

```
function Card(props) {
    return <p>{props.text}</p>
}
``` 

_To use it:_

```
<Card text="First card" />
<Card text="Second card" />
```

**Modern way (Destructuring)**

```
function Card({text}) {
    return <p>{text}</p>
}
```

---
**Rendering lists**

This is extremely important

```
const users = ["Rian", "Pedro", "Daniel", "Higor"]

return (
    <ul>
        {users.map(user => (
            <li key={user}>{user}></li>
        ))}
    </ul>
)
```

Map is essential in React, the code means basically, for each ``user`` in ``users``, create an ``<li>`` containing their name

_Resulting in:_

```
<ul>
    <li>Rian</li>
    <li>Pedro</li>
    <li>Daniel</li>
    <li>Higor</li>
</ul>
```

The key is very important too, it's basically an ID to each item, so we can update correctly, re-render just what glitched/needed, etc.

_A better example:_

````
const users = [
    { id: 1, name: "Ana" },
    { id: 2, name: "João" },
    { id: 3, name: "Maria" }
]
````

````
{users.map(user => (
    <li key={user.id}>{user.name}</li>
))}
````

---
**What happens below everything**

React creates a **Virtual DOM**

When something changes, it:

- Compares the old list with the new one

- Uses ``key`` to know basically "Is this item the same? Or another one"

If the keys are bad, it'll glitch your Virtual DOM

**List coming from a database → Use the entity's ID**

---
**States**

State → Dates that change over time

**MAIN** hook:

````
import { useState } from "react"
````

_Use:_

````
const [count, setCount] = useState(0)
````

_This creates:_

- ``count`` → current value

- ``setCount`` → function that changes it

_Real example (counter):_

````
import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>Valor: {count}</p>

            <button onClick={() => setCount(count + 1)}>
                +
            </button>
        </div>
    )
}
````

---
**Events**

Simple, functions

````
<button onClick={handleClick}>Click</button>
````

````
function handleClick() {
  console.log("i've been clicked")
}
````

---
**Conditional rendering**

````
{isLogged ? <Dashboard /> : <Login />}
````

_Or:_

````
{isAdmin && <AdminPanel />}
````

---
**Controlled inputs**

````
const [name, setName] = useState("")

<input
    value={name}
    onChange={e => setName(e.target.value)}
/>
````

**Essential** for forms in React

---
**Rule number 1**

**Never** update states directly

**Always** use the setters

_Wrong:_

````
count++
````

_Correct:_

````
setCount (count + 1)
````

---
**Mini project**

Let's create a mini project, a fake user dashboard

Check out the ``userDash`` directory to see this project!