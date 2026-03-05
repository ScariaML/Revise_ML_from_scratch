import CodeBlock from '../components/CodeBlock';

function Express() {
    return (
        <article>
            <h1 className="article-title">Express.js</h1>

            <div className="infobox">
                <div className="infobox-header">Express.js</div>
                <div className="infobox-row">
                    <div className="infobox-label">Type</div>
                    <div className="infobox-value">Web Framework</div>
                </div>
                <div className="infobox-row">
                    <div className="infobox-label">Runs On</div>
                    <div className="infobox-value">Node.js</div>
                </div>
                <div className="infobox-row">
                    <div className="infobox-label">Role in MERN</div>
                    <div className="infobox-value">API Server</div>
                </div>
                <div className="infobox-row">
                    <div className="infobox-label">Official Site</div>
                    <div className="infobox-value"><a href="https://expressjs.com" target="_blank" rel="noopener noreferrer">expressjs.com</a></div>
                </div>
            </div>

            <p>
                <strong>Express.js</strong> (or simply Express) is a minimal and flexible web framework for
                Node.js. It provides a robust set of features for building web applications and APIs. In the
                MERN stack, Express handles all the <strong>server-side logic</strong> and creates the
                <strong> API endpoints</strong> that your React frontend calls.
            </p>

            <div className="toc">
                <div className="toc-title">Contents</div>
                <ol className="toc-list">
                    <li><a href="#what-is-express">What is Express?</a></li>
                    <li><a href="#routing">Routing and Endpoints</a></li>
                    <li><a href="#middleware">Middleware</a></li>
                    <li><a href="#api-example">Building an API</a></li>
                </ol>
            </div>

            <h2 id="what-is-express">What is Express?</h2>
            <p>
                Node.js can create web servers on its own, but it's quite low-level. Express provides
                helpful abstractions that make building servers much easier:
            </p>

            <CodeBlock filename="Basic Express Server" language="javascript">
                {`// Import Express
const express = require('express');

// Create an Express application
const app = express();

// Define a route - when someone visits "/", respond with "Hello!"
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});`}
            </CodeBlock>

            <p>That's it! With just a few lines, you have a working web server.</p>

            <h2 id="routing">Routing and Endpoints</h2>
            <p>
                <strong>Routing</strong> means defining how your server responds to different URLs and
                HTTP methods. An <strong>endpoint</strong> is a specific URL that your API responds to.
            </p>

            <p>Express supports all HTTP methods:</p>

            <CodeBlock filename="Express Routes" language="javascript">
                {`// GET - Retrieve data
app.get('/articles', (req, res) => {
  res.json({ articles: [...] });
});

// GET with parameter - Get specific item
app.get('/articles/:id', (req, res) => {
  const articleId = req.params.id;
  res.json({ article: { id: articleId } });
});

// POST - Create new data
app.post('/articles', (req, res) => {
  const newArticle = req.body;
  // Save to database...
  res.status(201).json({ message: 'Article created!' });
});

// PUT - Update existing data
app.put('/articles/:id', (req, res) => {
  const articleId = req.params.id;
  const updates = req.body;
  // Update in database...
  res.json({ message: 'Article updated!' });
});

// DELETE - Remove data
app.delete('/articles/:id', (req, res) => {
  const articleId = req.params.id;
  // Delete from database...
  res.json({ message: 'Article deleted!' });
});`}
            </CodeBlock>

            <h2 id="middleware">Middleware</h2>
            <p>
                <strong>Middleware</strong> functions are the heart of Express. They are functions that have
                access to the request object, response object, and the next middleware function. They can:
            </p>
            <ul>
                <li>Execute any code</li>
                <li>Modify the request or response objects</li>
                <li>End the request-response cycle</li>
                <li>Call the next middleware function</li>
            </ul>

            <CodeBlock filename="Middleware Examples" language="javascript">
                {`const express = require('express');
const app = express();

// Built-in middleware: Parse JSON request bodies
app.use(express.json());

// Custom middleware: Log every request
app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.path} at \${new Date().toISOString()}\`);
  next(); // Pass control to next middleware
});

// Custom middleware: Check authentication
const requireAuth = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Authentication required' });
  }
  // Verify token...
  next();
};

// Apply middleware to specific routes
app.get('/profile', requireAuth, (req, res) => {
  res.json({ user: { name: 'Alice' } });
});`}
            </CodeBlock>

            <h2 id="api-example">Building an API</h2>
            <p>
                Here's a complete example of how Express might serve as the API for a wiki application:
            </p>

            <CodeBlock filename="Complete API Example" language="javascript">
                {`const express = require('express');
const cors = require('cors'); // Allow frontend to call API

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage (would normally use MongoDB)
let articles = [
  { id: 1, title: 'React', content: 'React is a library...' },
  { id: 2, title: 'Node.js', content: 'Node.js is a runtime...' }
];

// API Routes
// GET all articles
app.get('/api/articles', (req, res) => {
  res.json(articles);
});

// GET single article
app.get('/api/articles/:id', (req, res) => {
  const article = articles.find(a => a.id === parseInt(req.params.id));
  if (!article) {
    return res.status(404).json({ error: 'Article not found' });
  }
  res.json(article);
});

// POST new article
app.post('/api/articles', (req, res) => {
  const newArticle = {
    id: articles.length + 1,
    title: req.body.title,
    content: req.body.content
  };
  articles.push(newArticle);
  res.status(201).json(newArticle);
});

// Start server
app.listen(5000, () => {
  console.log('API running on http://localhost:5000');
});`}
            </CodeBlock>

            <div className="notice notice-info">
                <strong>💡 Note:</strong> This wiki website is a frontend-only React application and doesn't
                include an Express backend. In a full MERN application, Express would handle API calls from
                React and communicate with MongoDB to store and retrieve data.
            </div>
        </article>
    );
}

export default Express;
