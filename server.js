const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to get agents data
app.get('/api/agents', (req, res) => {
  res.json([
    {
      id: 'opencode-grok',
      name: 'OpenCode + Grok',
      description: 'Free coding agent through OpenCode CLI with Grok integration',
      category: 'coding',
      pricingType: 'free',
      features: [
        'Code generation and completion',
        'Debugging assistance',
        'File operations and project management',
        'Integration with multiple LLMs',
        'Terminal-based workflow'
      ],
      limitations: [
        'Requires command line usage',
        'Limited to development tasks',
        'Dependent on Grok availability'
      ],
      url: 'https://opencode.ai',
      tags: ['coding', 'cli', 'grok', 'free'],
      lastUpdated: '2024-11-01',
      popularity: 95
    },
    {
      id: 'big-pickle',
      name: 'Big Pickle',
      description: 'Free AI coding assistant with advanced code understanding',
      category: 'coding',
      pricingType: 'free',
      features: [
        'Multi-language code support',
        'Real-time collaboration',
        'Code explanation and documentation',
        'Refactoring suggestions',
        'No account required'
      ],
      limitations: [
        'Limited to smaller codebases',
        'Occasional rate limiting',
        'Beta stage features'
      ],
      url: 'https://bigpickle.ai',
      tags: ['coding', 'collaboration', 'free', 'no-account'],
      lastUpdated: '2024-10-28',
      popularity: 78
    },
    {
      id: 'cursor-trial',
      name: 'Cursor IDE Trial',
      description: '14-day free trial of Cursor AI-powered IDE',
      category: 'coding',
      pricingType: 'trial',
      features: [
        'AI-powered code completion',
        'Natural language to code',
        'Multi-file editing',
        'Integrated debugging',
        'VS Code compatibility'
      ],
      limitations: [
        '14-day trial period',
        'Requires credit card',
        'Limited to one trial per user'
      ],
      url: 'https://cursor.sh',
      tags: ['coding', 'ide', 'trial', 'ai-editor'],
      lastUpdated: '2024-11-02',
      popularity: 92
    },
    {
      id: 'copilot-free',
      name: 'GitHub Copilot Free Tier',
      description: 'Limited free tier of GitHub Copilot for students and open source maintainers',
      category: 'coding',
      pricingType: 'freemium',
      features: [
        'Code completion',
        'Multi-language support',
        'IDE integration',
        'Context-aware suggestions'
      ],
      limitations: [
        'Only available to verified students',
        'Open source maintainers only',
        'Limited monthly usage'
      ],
      url: 'https://github.com/features/copilot',
      tags: ['coding', 'github', 'students', 'open-source'],
      lastUpdated: '2024-10-30',
      popularity: 88
    },
    {
      id: 'claude-free',
      name: 'Claude Free Tier',
      description: 'Free tier access to Claude for coding and general tasks',
      category: 'general',
      pricingType: 'freemium',
      features: [
        'Advanced reasoning',
        'Code generation',
        'Long context window',
        'Multiple file upload',
        'Web browsing capability'
      ],
      limitations: [
        'Rate limited usage',
        'Smaller model than Pro tier',
        'No priority during peak times'
      ],
      url: 'https://claude.ai',
      tags: ['general', 'coding', 'anthropic', 'free-tier'],
      lastUpdated: '2024-11-01',
      popularity: 94
    },
    {
      id: 'chatgpt-free',
      name: 'ChatGPT Free',
      description: 'Free access to GPT-3.5 and limited GPT-4 usage',
      category: 'general',
      pricingType: 'freemium',
      features: [
        'General conversation',
        'Code generation',
        'Problem solving',
        'Multiple languages',
        'No account required for basic use'
      ],
      limitations: [
        'GPT-4 access limited',
        'Slower response times',
        'No file uploads in free tier',
        'No custom instructions'
      ],
      url: 'https://chat.openai.com',
      tags: ['general', 'openai', 'gpt', 'free'],
      lastUpdated: '2024-10-29',
      popularity: 98
    },
    {
      id: 'perplexity-free',
      name: 'Perplexity AI Free',
      description: 'AI-powered search engine with free tier',
      category: 'research',
      pricingType: 'freemium',
      features: [
        'Real-time web search',
        'Citation generation',
        'Research assistance',
        'Code examples',
        'Academic sources'
      ],
      limitations: [
        'Limited daily searches',
        'Slower response times',
        'Basic model only',
        'No advanced search filters'
      ],
      url: 'https://perplexity.ai',
      tags: ['research', 'search', 'citations', 'free'],
      lastUpdated: '2024-10-31',
      popularity: 82
    },
    {
      id: 'deepseek-coder',
      name: 'DeepSeek Coder Free',
      description: 'Free coding-focused AI model from DeepSeek',
      category: 'coding',
      pricingType: 'free',
      features: [
        'Specialized for coding tasks',
        'Multiple programming languages',
        'Code explanation',
        'Bug fixing assistance',
        'No registration required'
      ],
      limitations: [
        'Limited to coding tasks',
        'Smaller context window',
        'Occasional downtime'
      ],
      url: 'https://deepseek.com',
      tags: ['coding', 'deepseek', 'specialized', 'free'],
      lastUpdated: '2024-11-01',
      popularity: 75
    }
  ]);
});

// Serve the main HTML file for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Free AI Agents website running on http://localhost:${PORT}`);
  console.log(`📱 Open your browser and navigate to http://localhost:${PORT}`);
});