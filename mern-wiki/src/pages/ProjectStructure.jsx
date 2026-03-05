import { Link } from 'react-router-dom';
import CodeBlock from '../components/CodeBlock';

function ProjectStructure() {
    return (
        <article>
            <h1 className="article-title">Project Structure</h1>

            <div className="infobox">
                <div className="infobox-header">This Project</div>
                <div className="infobox-row">
                    <div className="infobox-label">Build Tool</div>
                    <div className="infobox-value">Vite</div>
                </div>
                <div className="infobox-row">
                    <div className="infobox-label">Framework</div>
                    <div className="infobox-value">React</div>
                </div>
                <div className="infobox-row">
                    <div className="infobox-label">Language</div>
                    <div className="infobox-value">JavaScript (JSX)</div>
                </div>
                <div className="infobox-row">
                    <div className="infobox-label">Styling</div>
                    <div className="infobox-value">CSS</div>
                </div>
            </div>

            <p>
                This page explains the <strong>folder structure</strong> of this website. Understanding how
                files are organized is essential for working on any React project. This is the <em>actual</em>
                structure of the code that powers the page you're reading!
            </p>

            <div className="toc">
                <div className="toc-title">Contents</div>
                <ol className="toc-list">
                    <li><a href="#folder-tree">Folder Tree</a></li>
                    <li><a href="#root-files">Root Files</a></li>
                    <li><a href="#src-folder">The src/ Folder</a></li>
                    <li><a href="#components-pages">Components vs Pages</a></li>
                </ol>
            </div>

            <h2 id="folder-tree">Folder Tree</h2>
            <p>Here's the complete structure of this project:</p>

            <CodeBlock filename="Project Structure" language="plaintext">
                {`mern-wiki/
├── public/
│   └── vite.svg           # Default Vite favicon
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Header.jsx     # Top navigation bar
│   │   ├── Sidebar.jsx    # Left navigation menu
│   │   ├── Footer.jsx     # Bottom footer
│   │   ├── Layout.jsx     # Page layout wrapper
│   │   └── CodeBlock.jsx  # Code display component
│   ├── pages/             # Full page components
│   │   ├── Home.jsx       # Homepage
│   │   ├── Overview.jsx   # MERN overview
│   │   ├── MongoDB.jsx    # MongoDB article
│   │   ├── Express.jsx    # Express article
│   │   ├── ReactPage.jsx  # React article
│   │   ├── NodeJS.jsx     # Node.js article
│   │   ├── ProjectStructure.jsx  # This page!
│   │   ├── Components.jsx # Components explanation
│   │   ├── Styling.jsx    # CSS explanation
│   │   └── Routing.jsx    # Routing explanation
│   ├── App.jsx            # Main app + routing
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies & scripts
└── vite.config.js         # Vite configuration`}
            </CodeBlock>

            <h2 id="root-files">Root Files</h2>

            <h3>package.json</h3>
            <p>
                This file is the heart of any Node.js/React project. It defines your project's metadata,
                scripts, and dependencies:
            </p>

            <CodeBlock filename="package.json" language="json">
                {`{
  "name": "mern-wiki",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.1.0"
  },
  "devDependencies": {
    "vite": "^6.0.0"
  }
}`}
            </CodeBlock>

            <p>Key parts explained:</p>
            <ul>
                <li><code>scripts</code> — Commands you can run with <code>npm run [script-name]</code></li>
                <li><code>dependencies</code> — Packages your app needs to run (React, React Router)</li>
                <li><code>devDependencies</code> — Packages only needed during development (Vite)</li>
            </ul>

            <h3>index.html</h3>
            <p>
                The single HTML file that serves as the template for your React app:
            </p>

            <CodeBlock filename="index.html" language="html">
                {`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MERN Wiki</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`}
            </CodeBlock>

            <p>
                Notice the <code>&lt;div id="root"&gt;&lt;/div&gt;</code> — this is where React injects your
                entire application!
            </p>

            <h2 id="src-folder">The src/ Folder</h2>
            <p>
                All your React code lives in <code>src/</code>. This separation keeps your source code
                organized and separate from configuration files.
            </p>

            <h3>main.jsx - The Entry Point</h3>
            <p>
                This file is where React starts. It mounts your app into the DOM:
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

            <p>This file:</p>
            <ul>
                <li>Finds the <code>&lt;div id="root"&gt;</code> in your HTML</li>
                <li>Wraps everything in <code>BrowserRouter</code> for navigation</li>
                <li>Renders the <code>App</code> component inside it</li>
            </ul>

            <h2 id="components-pages">Components vs Pages</h2>
            <p>
                We organize our React components into two folders:
            </p>

            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1rem' }}>
                <thead>
                    <tr style={{ background: 'var(--color-border-light)' }}>
                        <th style={{ padding: '0.5rem', border: '1px solid var(--color-border)', textAlign: 'left' }}>Folder</th>
                        <th style={{ padding: '0.5rem', border: '1px solid var(--color-border)', textAlign: 'left' }}>Purpose</th>
                        <th style={{ padding: '0.5rem', border: '1px solid var(--color-border)', textAlign: 'left' }}>Examples</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '0.5rem', border: '1px solid var(--color-border)' }}><code>components/</code></td>
                        <td style={{ padding: '0.5rem', border: '1px solid var(--color-border)' }}>Reusable UI pieces</td>
                        <td style={{ padding: '0.5rem', border: '1px solid var(--color-border)' }}>Header, Sidebar, CodeBlock</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '0.5rem', border: '1px solid var(--color-border)' }}><code>pages/</code></td>
                        <td style={{ padding: '0.5rem', border: '1px solid var(--color-border)' }}>Full page content</td>
                        <td style={{ padding: '0.5rem', border: '1px solid var(--color-border)' }}>Home, MongoDB, this page</td>
                    </tr>
                </tbody>
            </table>

            <p>
                <strong>Components</strong> are used across multiple pages (the Header appears on every page).
                <strong>Pages</strong> are unique content that corresponds to a URL route.
            </p>

            <div className="notice notice-tip">
                <strong>✨ Best Practice:</strong> Keep components small and focused on one thing. If a
                component grows too large, split it into smaller components. This makes your code easier
                to understand, test, and maintain.
            </div>
        </article>
    );
}

export default ProjectStructure;
