import { Link } from 'react-router-dom';
import CodeBlock from '../components/CodeBlock';

function Components() {
  return (
    <article>
      <h1 className="article-title">Components</h1>

      <div className="infobox">
        <div className="infobox-header">This Site's Components</div>
        <div className="infobox-row">
          <div className="infobox-label">Total</div>
          <div className="infobox-value">5 components</div>
        </div>
        <div className="infobox-row">
          <div className="infobox-label">Layout</div>
          <div className="infobox-value">Header, Sidebar, Footer</div>
        </div>
        <div className="infobox-row">
          <div className="infobox-label">Utilities</div>
          <div className="infobox-value">Layout, CodeBlock</div>
        </div>
      </div>

      <p>
        This page shows the <strong>actual React components</strong> that build the UI you're
        looking at right now. Components are the building blocks of React applications — each
        one is a self-contained piece of the interface.
      </p>

      <div className="toc">
        <div className="toc-title">Contents</div>
        <ol className="toc-list">
          <li><a href="#layout">Layout Component</a></li>
          <li><a href="#header">Header Component</a></li>
          <li><a href="#sidebar">Sidebar Component</a></li>
          <li><a href="#footer">Footer Component</a></li>
          <li><a href="#codeblock">CodeBlock Component</a></li>
        </ol>
      </div>

      <h2 id="layout">Layout Component</h2>
      <p>
        The <code>Layout</code> component wraps every page. It provides the consistent structure
        you see across the site: header at top, sidebar on left, content in the middle, and footer
        at bottom.
      </p>

      <CodeBlock filename="src/components/Layout.jsx" language="jsx">
        {`import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="app-container">
      <Header />
      <div className="main-wrapper">
        <Sidebar />
        <main className="main-content">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;`}
      </CodeBlock>

      <p>
        The key concept here is <code>children</code> — this is a special React prop that contains
        whatever is placed between the component's opening and closing tags:
      </p>

      <CodeBlock filename="Using Layout" language="jsx">
        {`// In App.jsx, we use Layout like this:
<Layout>
  <Home />  {/* This becomes "children" inside Layout */}
</Layout>`}
      </CodeBlock>

      <h2 id="header">Header Component</h2>
      <p>
        The <code>Header</code> component creates the navigation bar at the top of every page.
        It includes the logo, tagline, and search box.
      </p>

      <CodeBlock filename="src/components/Header.jsx" language="jsx">
        {`import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <div className="logo-icon">M</div>
          <div>
            <div className="logo-text">MERN Wiki</div>
            <div className="logo-tagline">The Self-Documenting Encyclopedia</div>
          </div>
        </Link>
        <div className="search-box">
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search MERN Wiki..."
          />
          <button className="search-btn">Search</button>
        </div>
      </div>
    </header>
  );
}

export default Header;`}
      </CodeBlock>

      <p>Key concepts:</p>
      <ul>
        <li><code>Link</code> from React Router creates navigation without page refresh</li>
        <li>Semantic HTML (<code>&lt;header&gt;</code>) improves accessibility</li>
        <li>CSS classes connect to styles in <code>index.css</code></li>
      </ul>

      <h2 id="sidebar">Sidebar Component</h2>
      <p>
        The <code>Sidebar</code> provides navigation links grouped into sections. It uses
        <code>NavLink</code> which automatically adds an "active" class to the current page's link.
      </p>

      <CodeBlock filename="src/components/Sidebar.jsx" language="jsx">
        {`import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3 className="sidebar-title">Navigation</h3>
        <ul className="sidebar-nav">
          <li>
            <NavLink 
              to="/" 
              className={({isActive}) => isActive ? 'active' : ''}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/overview" 
              className={({isActive}) => isActive ? 'active' : ''}
            >
              MERN Overview
            </NavLink>
          </li>
        </ul>
      </div>
      
      <div className="sidebar-section">
        <h3 className="sidebar-title">The Stack</h3>
        <ul className="sidebar-nav">
          <li><NavLink to="/mongodb">MongoDB</NavLink></li>
          <li><NavLink to="/express">Express.js</NavLink></li>
          <li><NavLink to="/react">React</NavLink></li>
          <li><NavLink to="/nodejs">Node.js</NavLink></li>
        </ul>
      </div>
      
      {/* More sections... */}
    </aside>
  );
}

export default Sidebar;`}
      </CodeBlock>

      <p>
        Notice how <code>NavLink</code> uses a function for <code>className</code> — this lets us
        conditionally apply styles based on whether the link is active.
      </p>

      <h2 id="footer">Footer Component</h2>
      <p>
        The simplest component — just static text at the bottom of every page:
      </p>

      <CodeBlock filename="src/components/Footer.jsx" language="jsx">
        {`function Footer() {
  return (
    <footer className="footer">
      <p>MERN Wiki — A self-documenting website built with React</p>
      <p>This page was built to explain its own code architecture.</p>
    </footer>
  );
}

export default Footer;`}
      </CodeBlock>

      <h2 id="codeblock">CodeBlock Component</h2>
      <p>
        The <code>CodeBlock</code> component displays formatted code examples (like all the code
        snippets on this page!):
      </p>

      <CodeBlock filename="src/components/CodeBlock.jsx" language="jsx">
        {`function CodeBlock({ filename, language, children }) {
  return (
    <div className="code-block">
      {filename && (
        <div className="code-header">
          <span className="code-filename">{filename}</span>
          <span className="code-language">{language}</span>
        </div>
      )}
      <pre><code>{children}</code></pre>
    </div>
  );
}

export default CodeBlock;`}
      </CodeBlock>

      <p>Usage example:</p>

      <CodeBlock filename="Using CodeBlock" language="jsx">
        {`<CodeBlock filename="example.js" language="javascript">
{\`const greeting = "Hello, World!";
console.log(greeting);\`}
</CodeBlock>`}
      </CodeBlock>

      <div className="notice notice-info">
        <strong>💡 Meta:</strong> The code block above was rendered using the very <code>CodeBlock</code>
        component it describes! That's the self-documenting nature of this wiki.
      </div>
    </article>
  );
}

export default Components;
