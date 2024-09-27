import { useState } from 'react'

export default function App() {
  const [item, setItem] = useState('')
  const [items, setItems] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (item.trim()) {
      setItems([...items, item])
      setItem('')
    }
  }

  const handleDelete = (itemToDelete) => {
    setItems(items.filter((i) => i !== itemToDelete))
  }

  return (
    <main className="main">
      <h1 className="header">Project 4: Alışveriş Listesi</h1>
      <div className="shopping-list">
        <h2>Alınacaklar</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Yeni bir madde ekleyin"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        <ul className="list-item">
          {items.map((item, index) => (
            <li key={index} className="item">
              {item}
              <button onClick={() => handleDelete(item)} className="button">
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
