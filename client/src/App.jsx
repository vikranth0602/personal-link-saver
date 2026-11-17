import { useState, useEffect } from 'react'
import './App.css'


function App() {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  const [links, setLinks] = useState(() => {
    const savedLinks = localStorage.getItem('links')

    return savedLinks ? JSON.parse(savedLinks) : []
  })

  const [search, setSearch] = useState('')
  const [tag, setTag] = useState('')
  const [selectedTag, setSelectedTag] = useState('All')

  useEffect(() => {
   localStorage.setItem('links', JSON.stringify(links))
  }, [links])

  function handleSave() {
  if (!title.trim() || !url.trim()) {
    alert('Please enter both title and URL')
    return
  }

  const newLink = {
    id: Date.now(),
    title: title,
    url: url,
    tag:tag
  }

  setLinks([...links, newLink])

  setTitle('')
  setUrl('')
  setTag('')
}

  return (
    <div className="app">
      <h1>Personal Link Saver</h1>
      <p>Keep your useful links in one place.</p>

      <h2>Save a new link</h2>
      <h2>GIT Practice</h2>

      <input
        type="text"
        placeholder="Enter link title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <br />

      <input
        type="url"
        placeholder="Enter URL"
        value={url}
        onChange={(event) => setUrl(event.target.value)}/><br/>
      <input
        type="text"
        placeholder="Enter tag (optional)"
        value={tag}
        onChange={(event) => setTag(event.target.value)}
      />
      <br/>
      <button onClick={handleSave}>Save Link</button>
      <br />

      <input
        type="text"
        placeholder="Search saved links..."
        aria-label="Search saved links"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <select
        value={selectedTag}
        onChange={(event) => setSelectedTag(event.target.value)}
      >
        <option value="All">All Tags</option>
        <option value="talks">talks</option>
        <option value="song">song</option>
        <option value="promo">promo</option>
        <option value="socialff">social</option>
      </select>

      <h3>Saved Links</h3>

      {links

      .filter((link) =>
        link.title.toLowerCase().includes(search.toLowerCase()))
      .filter((link) =>
          selectedTag === 'All' || link.tag === selectedTag )
      .map((link) =>
        (
          <div className="link-card" key={link.id} >

            <h3>{link.title}</h3>
            {link.tag && <p>Tag: {link.tag}</p>}
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.url}
            </a>

            <button onClick={() => {
              setLinks(links.filter((item) => item.id !== link.id))
              }}>
              Delete
            </button>

          </div>
        ))
      }

    </div>
  )
}

export default App