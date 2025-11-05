import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { AgentsList } from './pages/AgentsList'
import { AgentDetail } from './pages/AgentDetail'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agents" element={<AgentsList />} />
        <Route path="/agents/:id" element={<AgentDetail />} />
      </Routes>
    </div>
  )
}

export default App