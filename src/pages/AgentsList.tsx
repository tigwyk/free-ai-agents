import { useState, useMemo, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { aiAgentsData } from '../data/agents'
import { AIAgent, FilterOptions } from '../types'

export const AgentsList = () => {
  const [searchParams] = useSearchParams()
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'all',
    pricingType: 'all',
    searchTerm: searchParams.get('search') || ''
  })

  useEffect(() => {
    const searchFromUrl = searchParams.get('search')
    if (searchFromUrl) {
      setFilters(prev => ({ ...prev, searchTerm: searchFromUrl }))
    }
  }, [searchParams])

  const filteredAgents = useMemo(() => {
    return aiAgentsData.filter(agent => {
      const matchesCategory = filters.category === 'all' || agent.category === filters.category
      const matchesPricing = filters.pricingType === 'all' || agent.pricingType === filters.pricingType
      const matchesSearch = agent.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                           agent.description.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                           agent.tags.some(tag => tag.toLowerCase().includes(filters.searchTerm.toLowerCase()))
      
      return matchesCategory && matchesPricing && matchesSearch
    }).sort((a, b) => b.popularity - a.popularity)
  }, [filters])

  const categories = ['all', 'coding', 'general', 'writing', 'research']
  const pricingTypes = ['all', 'free', 'freemium', 'trial', 'limited']

  return (
    <div className="container">
      <h1 style={{
        fontSize: '2.5rem',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        🤖 All Free AI Agents
      </h1>

      <div className="card" style={{ marginBottom: '2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '1rem'
        }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '14px' }}>
              Category
            </label>
            <select
              className="input"
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              style={{ width: '100%' }}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '14px' }}>
              Pricing Type
            </label>
            <select
              className="input"
              value={filters.pricingType}
              onChange={(e) => setFilters({ ...filters, pricingType: e.target.value })}
              style={{ width: '100%' }}
            >
              {pricingTypes.map(type => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div style={{ gridColumn: 'span 2' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '14px' }}>
              Search
            </label>
            <input
              type="text"
              className="input"
              placeholder="Search agents by name, description, or tags..."
              value={filters.searchTerm}
              onChange={(e) => setFilters({ ...filters, searchTerm: e.target.value })}
              style={{ width: '100%' }}
            />
          </div>
        </div>

        <div style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.7)' }}>
          Found {filteredAgents.length} agents
        </div>
      </div>

      <div className="grid">
        {filteredAgents.map(agent => (
          <div key={agent.id} className="card">
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '1rem'
            }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                {agent.name}
              </h3>
              <span className={`badge badge-${agent.pricingType}`}>
                {agent.pricingType}
              </span>
            </div>

            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '1rem',
              fontSize: '14px',
              lineHeight: '1.4'
            }}>
              {agent.description}
            </p>

            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: '12px', marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                Category: {agent.category}
              </div>
              <div style={{ fontSize: '12px', marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                Popularity: {agent.popularity}/100
              </div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              {agent.tags.slice(0, 4).map(tag => (
                <span
                  key={tag}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    fontSize: '11px',
                    margin: '2px'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Link
                to={`/agents/${agent.id}`}
                className="btn"
                style={{ flex: 1, textAlign: 'center', fontSize: '14px' }}
              >
                View Details
              </Link>
              <a
                href={agent.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ flex: 1, textAlign: 'center', fontSize: '14px' }}
              >
                Visit Site
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredAgents.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '4rem 0',
          color: 'rgba(255, 255, 255, 0.6)'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>No agents found</h3>
          <p>Try adjusting your filters or search terms</p>
        </div>
      )}
    </div>
  )
}