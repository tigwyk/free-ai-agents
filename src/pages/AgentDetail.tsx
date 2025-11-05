import { useParams, Link } from 'react-router-dom'
import { aiAgentsData } from '../data/agents'

export const AgentDetail = () => {
  const { id } = useParams<{ id: string }>()
  const agent = aiAgentsData.find(a => a.id === id)

  if (!agent) {
    return (
      <div className="container">
        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
          <h1>Agent Not Found</h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '2rem' }}>
            The agent you're looking for doesn't exist.
          </p>
          <Link to="/agents" className="btn">
            Back to Agents
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <Link 
        to="/agents" 
        style={{ 
          color: 'rgba(255, 255, 255, 0.8)', 
          textDecoration: 'none',
          marginBottom: '2rem',
          display: 'inline-block'
        }}
      >
        ← Back to Agents
      </Link>

      <div className="card" style={{ marginBottom: '2rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '1.5rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
              {agent.name}
            </h1>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.8)', 
              fontSize: '1.1rem',
              lineHeight: '1.4'
            }}>
              {agent.description}
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span className={`badge badge-${agent.pricingType}`} style={{ fontSize: '14px' }}>
              {agent.pricingType.toUpperCase()}
            </span>
            <div style={{ marginTop: '0.5rem', color: 'rgba(255, 255, 255, 0.6)' }}>
              Category: {agent.category}
            </div>
            <div style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              Popularity: {agent.popularity}/100
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>Tags</h3>
          <div>
            {agent.tags.map(tag => (
              <span
                key={tag}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  margin: '2px'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <a
            href={agent.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ flex: 1, textAlign: 'center' }}
          >
            Visit Website
          </a>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
        <div className="card">
          <h3 style={{ marginBottom: '1rem', color: '#10b981' }}>
            ✅ Features
          </h3>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0,
            color: 'rgba(255, 255, 255, 0.8)'
          }}>
            {agent.features.map((feature, index) => (
              <li key={index} style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0 }}>•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '1rem', color: '#f59e0b' }}>
            ⚠️ Limitations
          </h3>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0,
            color: 'rgba(255, 255, 255, 0.8)'
          }}>
            {agent.limitations.map((limitation, index) => (
              <li key={index} style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0 }}>•</span>
                {limitation}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card" style={{ marginTop: '2rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>💡 How to Get Started</h3>
        <div style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6' }}>
          {agent.pricingType === 'free' && (
            <p>
              This agent is completely free to use! Simply visit their website and start using it immediately. 
              No registration or credit card required.
            </p>
          )}
          {agent.pricingType === 'freemium' && (
            <p>
              Sign up for a free account to access basic features. You can upgrade to a paid plan if you need 
              more advanced features or higher usage limits.
            </p>
          )}
          {agent.pricingType === 'trial' && (
            <p>
              Start with a free trial to test all premium features. You'll need to provide payment information, 
              but you won't be charged until the trial period ends.
            </p>
          )}
          {agent.pricingType === 'limited' && (
            <p>
              This service offers limited free access with certain restrictions. Perfect for trying out the service 
              or for light usage.
            </p>
          )}
        </div>
      </div>

      <div style={{ 
        textAlign: 'center', 
        marginTop: '3rem',
        padding: '2rem',
        background: 'rgba(102, 126, 234, 0.1)',
        borderRadius: '15px'
      }}>
        <h3 style={{ marginBottom: '1rem' }}>Found this helpful?</h3>
        <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '1.5rem' }}>
          Explore more free AI agents and find the perfect tools for your workflow.
        </p>
        <Link to="/agents" className="btn">
          Discover More Agents
        </Link>
      </div>
    </div>
  )
}