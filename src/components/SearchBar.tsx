import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      navigate(`/agents?search=${encodeURIComponent(searchTerm.trim())}`)
    }
  }

  return (
    <form onSubmit={handleSearch} style={{ width: '100%', maxWidth: '400px' }}>
      <div style={{ position: 'relative' }}>
        <input
          type="text"
          className="input"
          placeholder="Search AI agents..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ 
            width: '100%',
            paddingRight: '40px'
          }}
        />
        <button
          type="submit"
          style={{
            position: 'absolute',
            right: '8px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.6)',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          🔍
        </button>
      </div>
    </form>
  )
}