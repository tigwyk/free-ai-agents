import { Link } from 'react-router-dom'
import { SearchBar } from './SearchBar'

export const Navbar = () => {
  return (
    <nav style={{
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      padding: '1rem 0',
      marginBottom: '2rem',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <Link 
            to="/" 
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: 'white',
              textDecoration: 'none'
            }}
          >
            🤖 Free AI Agents
          </Link>
          
          <SearchBar />
          
          <div style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <Link 
              to="/" 
              style={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
            >
              Home
            </Link>
            <Link 
              to="/agents" 
              style={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
            >
              All Agents
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}