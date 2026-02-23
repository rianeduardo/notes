import { useState } from "react"

function App() {
  const [users, setUsers] = useState<string[]>([])
  const [name, setName] = useState("")

  function addUser() {
    if (!name) return
    setUsers([...users, name])
    setName("")
  }

  function removeUser(index: number) {
    setUsers(users.filter((_, i) => i !== index))
  }

  return (
    <div>
      <div className="container">
        <div className="panel">
          <h1>Painel Simples</h1>

          <input
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <button onClick={addUser}>Adicionar</button>

        </div>

        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user}
              <button className="delete" onClick={() => removeUser(index)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App