import { Link } from 'react-router-dom'
import { aiAgentsData } from '../data/agents'

export const Home = () => {
  const featuredAgents = aiAgentsData
    .filter(agent => agent.pricingType === 'free' || agent.pricingType === 'freemium')
    .slice(0, 3)

  return (
    <div className="container">
      <section style={{
        textAlign: 'center',
        padding: '4rem 0',
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
        borderRadius: '20px',
        marginBottom: '4rem'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Free AI Agents
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: 'rgba(255, 255, 255, 0.8)',
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem'
        }}>
          Discover the best free AI agents and coding assistants. From OpenCode + Grok to unlimited trials, 
          find the perfect AI tool for your needs without breaking the bank.
        </p>
        <Link to="/agents" className="btn">
          Explore All Agents
        </Link>
      </section>

      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{
          fontSize: '2rem',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          🌟 Featured Free Agents
        </h2>
        <div className="grid">
          {featuredAgents.map(agent => (
            <div key={agent.id} className="card">
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1rem'
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                  {agent.name}
                </h3>
                <span className={`badge badge-${agent.pricingType}`}>
                  {agent.pricingType}
                </span>
              </div>
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                marginBottom: '1rem'
              }}>
                {agent.description}
              </p>
              <div style={{ marginBottom: '1rem' }}>
                {agent.tags.slice(0, 3).map(tag => (
                  <span 
                    key={tag}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      padding: '2px 8px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      margin: '2px'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link 
                to={`/agents/${agent.id}`}
                className="btn"
                style={{ width: '100%', textAlign: 'center' }}
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{
          fontSize: '2rem',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          💡 Why Choose Free AI Agents?
        </h2>
        <div className="grid">
          <div className="card">
            <h3 style={{ marginBottom: '1rem' }}>💰 Cost Effective</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Get powerful AI assistance without monthly subscriptions. Perfect for students, 
              hobbyists, and developers on a budget.
            </p>
          </div>
          <div className="card">
            <h3 style={{ marginBottom: '1rem' }}>🚀 Try Before You Buy</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Test premium features through free trials and freemium plans before committing 
              to a paid subscription.
            </p>
          </div>
          <div className="card">
            <h3 style={{ marginBottom: '1rem' }}>🛠️ No Commitment</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Switch between different AI tools easily without being locked into contracts or 
              long-term commitments.
            </p>
          </div>
        </div>
      </section>

      <section style={{
        textAlign: 'center',
        padding: '3rem 0',
        background: 'rgba(102, 126, 234, 0.1)',
        borderRadius: '20px'
      }}>
        <h2 style={{ marginBottom: '1rem' }}>Ready to boost your productivity?</h2>
        <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '2rem' }}>
          Explore our curated list of free AI agents and find the perfect tool for your needs.
        </p>
        <Link to="/agents" className="btn">
          Browse All Agents
        </Link>
      </section>
    </div>
  )
}