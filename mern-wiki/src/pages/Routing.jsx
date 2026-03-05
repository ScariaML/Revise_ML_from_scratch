import { Link } from 'react-router-dom';
import CodeBlock from '../components/CodeBlock';

function Routing() {
  return (
    <article>
      <h1 className="article-title">Routing</h1>

      <div className="infobox">
        <div className="infobox-header">React Router</div>
        <div className="infobox-row">
          <div className="infobox-label">Package</div>
          <div className="infobox-value">react-router-dom</div>
        </div>
        <div className="infobox-row">
          <div className="infobox-label">Version</div>
          <div className="infobox-value">v7.x</div>
        </div>
        <div className="infobox-row">
          <div className="infobox-label">Router Type</div>
          <div className="infobox-value">BrowserRouter</div>
        </div>
        <div className="infobox-row">
          <div className="infobox-label">Total Routes</div>
          <div className="infobox-value">10 pages</div>
        </div>
      </div>

      <p>
        <strong>Routing</strong> is how your application decides what to display based on the URL.
        This wiki uses <strong>React Router</strong>, the most popular routing library for React.
        It enables navigation between pages without full page reloads (a key feature of Single Page
        Applications).
      </p>

      <div className="toc">
        <div className="toc-title">Contents</div>
        <ol className="toc-list">
          <li><a href="#how-it-works">How Routing Works</a></li>
          <li><a href="#setup">Router Setup</a></li>
          <li><a href="#routes">Defining Routes</a></li>
          <li><a href="#navigation">Navigation Components</a></li>
        </ol>
      </div>

      <h2 id="how-it-works">How Routing Works</h2>
      <p>
        In a traditional website, clicking a link causes the browser to request a new page from
        the server. With React Router:
      </p>
      <ol>
        <li>The browser URL changes (e.g., <code>/mongodb</code> → <code>/react</code>)</li>
        <li>React Router detects the URL change</li>
        <li>The appropriate component renders (no server request needed)</li>
        <li>The page content updates instantly</li>
      </ol>

      <p>
        This creates a smooth, app-like experience. Try clicking the sidebar links — notice how
        the content changes without the page "flashing" like a traditional website!
      </p>

      <h2 id="setup">Router Setup</h2>
      <p>
        The router is set up in <code>main.jsx</code>, wrapping the entire application:
      </p>

      <CodeBlock filename="src/main.jsx" language="jsx">
        {`import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)`}
      </CodeBlock>

      <p>
        <code>BrowserRouter</code> uses the browser's History API to keep the UI in sync with the
        URL. It must wrap everything that uses routing.
      </p>

      <h2 id="routes">Defining Routes</h2>
      <p>
        Routes are defined in <code>App.jsx</code>. Each <code>Route</code> maps a URL path to a
        React component:
      </p>

      <CodeBlock filename="src/App.jsx" language="jsx">
        {`import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Import all page components
import Home from './pages/Home';
import Overview from './pages/Overview';
import MongoDB from './pages/MongoDB';
import Express from './pages/Express';
import ReactPage from './pages/ReactPage';
import NodeJS from './pages/NodeJS';
import ProjectStructure from './pages/ProjectStructure';
import Components from './pages/Components';
import Styling from './pages/Styling';
import Routing from './pages/Routing';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/mongodb" element={<MongoDB />} />
        <Route path="/express" element={<Express />} />
        <Route path="/react" element={<ReactPage />} />
        <Route path="/nodejs" element={<NodeJS />} />
        <Route path="/project-structure" element={<ProjectStructure />} />
        <Route path="/components" element={<Components />} />
        <Route path="/styling" element={<Styling />} />
        <Route path="/routing" element={<Routing />} />
      </Routes>
    </Layout>
  );
}

export default App;`}
      </CodeBlock>

      <p>Key parts:</p>
      <ul>
        <li><code>Routes</code> — Container that holds all route definitions</li>
        <li><code>Route</code> — Maps a <code>path</code> (URL) to an <code>element</code> (component)</li>
        <li><code>path="/"</code> — The root path (homepage)</li>
        <li><code>element={'{<Component />}'}</code> — The component to render for this path</li>
      </ul>

      <h2 id="navigation">Navigation Components</h2>
      <p>
        React Router provides components for creating links:
      </p>

      <h3>Link Component</h3>
      <p>
        Use <code>Link</code> for basic navigation (like the logo in our Header):
      </p>

      <CodeBlock filename="Using Link" language="jsx">
        {`import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      {/* Link navigates without page reload */}
      <Link to="/" className="logo">
        MERN Wiki
      </Link>
      
      {/* Regular anchor tag would cause full page reload */}
      <a href="/">MERN Wiki</a>  {/* ❌ Avoid this */}
    </header>
  );
}`}
      </CodeBlock>

      <h3>NavLink Component</h3>
      <p>
        Use <code>NavLink</code> when you need to style the active link (like our sidebar):
      </p>

      <CodeBlock filename="Using NavLink" language="jsx">
        {`import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <nav>
      {/* NavLink adds "active" class to current page's link */}
      <NavLink 
        to="/mongodb"
        className={({ isActive }) => isActive ? 'active' : ''}
      >
        MongoDB
      </NavLink>
    </nav>
  );
}`}
      </CodeBlock>

      <p>
        The <code>className</code> prop receives a function with <code>isActive</code> — this lets
        you conditionally apply styles to highlight the current page in navigation.
      </p>

      <div className="notice notice-tip">
        <strong>✨ Try It:</strong> Watch the sidebar as you navigate. The current page's link is
        highlighted with a different background color — that's <code>NavLink</code> at work!
      </div>

      <h3>Programmatic Navigation</h3>
      <p>
        Sometimes you need to navigate in response to an action (form submit, button click):
      </p>

      <CodeBlock filename="Programmatic Navigation" language="jsx">
        {`import { useNavigate } from 'react-router-dom';

function SearchForm() {
  const navigate = useNavigate();
  
  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.query.value;
    // Navigate to search results page
    navigate(\`/search?q=\${query}\`);
  };
  
  return (
    <form onSubmit={handleSearch}>
      <input name="query" type="text" />
      <button type="submit">Search</button>
    </form>
  );
}`}
      </CodeBlock>
    </article>
  );
}

export default Routing;
