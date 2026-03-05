import CodeBlock from '../components/CodeBlock';

function Styling() {
  return (
    <article>
      <h1 className="article-title">Styling (CSS)</h1>

      <div className="infobox">
        <div className="infobox-header">CSS Approach</div>
        <div className="infobox-row">
          <div className="infobox-label">Method</div>
          <div className="infobox-value">Vanilla CSS</div>
        </div>
        <div className="infobox-row">
          <div className="infobox-label">File</div>
          <div className="infobox-value">index.css</div>
        </div>
        <div className="infobox-row">
          <div className="infobox-label">Design</div>
          <div className="infobox-value">Wikipedia-inspired</div>
        </div>
        <div className="infobox-row">
          <div className="infobox-label">Features</div>
          <div className="infobox-value">CSS Variables, Responsive</div>
        </div>
      </div>

      <p>
        This page explains the <strong>CSS styling system</strong> used to create the Wikipedia-like
        appearance of this website. We use plain CSS with CSS variables (custom properties) for
        maintainability and consistency.
      </p>

      <div className="toc">
        <div className="toc-title">Contents</div>
        <ol className="toc-list">
          <li><a href="#css-variables">CSS Variables</a></li>
          <li><a href="#typography">Typography</a></li>
          <li><a href="#layout-styles">Layout Styles</a></li>
          <li><a href="#components-styles">Component Styles</a></li>
          <li><a href="#responsive">Responsive Design</a></li>
        </ol>
      </div>

      <h2 id="css-variables">CSS Variables</h2>
      <p>
        CSS variables (also called custom properties) let us define values once and reuse them
        throughout our stylesheet. This makes it easy to maintain consistent colors and spacing:
      </p>

      <CodeBlock filename="src/index.css - Variables" language="css">
        {`:root {
  /* Wikipedia-inspired color palette */
  --color-background: #f8f9fa;
  --color-surface: #ffffff;
  --color-border: #a2a9b1;
  --color-border-light: #eaecf0;
  --color-text: #202122;
  --color-text-muted: #54595d;
  --color-link: #3366cc;
  --color-link-hover: #5a7dc0;
  --color-link-visited: #795cb2;
  --color-accent: #36c;
  
  /* Typography */
  --font-serif: 'Linux Libertine', 'Georgia', serif;
  --font-sans: 'Inter', -apple-system, sans-serif;
  --font-mono: 'Consolas', 'Monaco', monospace;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  
  /* Layout */
  --max-content-width: 960px;
  --sidebar-width: 220px;
}`}
      </CodeBlock>

      <p>Using these variables in our CSS:</p>

      <CodeBlock filename="Using CSS Variables" language="css">
        {`/* Instead of hardcoding colors... */
.sidebar {
  background: #f8f9fa;  /* ❌ Hardcoded */
}

/* We use variables for consistency */
.sidebar {
  background: var(--color-sidebar-bg);  /* ✅ Variable */
}`}
      </CodeBlock>

      <h2 id="typography">Typography</h2>
      <p>
        Typography is crucial for readability. We use a combination of serif and sans-serif fonts
        following Wikipedia's style:
      </p>

      <CodeBlock filename="Typography Styles" language="css">
        {`/* Base typography */
body {
  font-family: var(--font-sans);
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--color-text);
}

/* Headings use serif font like Wikipedia */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-serif);
  font-weight: 400;
  line-height: 1.3;
}

h1 {
  font-size: 1.8rem;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: var(--spacing-sm);
}

h2 {
  font-size: 1.5rem;
  border-bottom: 1px solid var(--color-border-light);
  margin-top: var(--spacing-xl);
}

/* Links styled like Wikipedia */
a {
  color: var(--color-link);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

a:visited {
  color: var(--color-link-visited);
}`}
      </CodeBlock>

      <h2 id="layout-styles">Layout Styles</h2>
      <p>
        The page layout uses CSS Flexbox to create the header-sidebar-content-footer structure:
      </p>

      <CodeBlock filename="Layout Styles" language="css">
        {`/* Full page container */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Wrapper for sidebar + content */
.main-wrapper {
  display: flex;
  flex: 1;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

/* Sidebar */
.sidebar {
  width: var(--sidebar-width);
  background: var(--color-sidebar-bg);
  border-right: 1px solid var(--color-border-light);
  padding: var(--spacing-lg);
  flex-shrink: 0;  /* Don't shrink when space is tight */
}

/* Main content area */
.main-content {
  flex: 1;  /* Take remaining space */
  background: var(--color-surface);
  padding: var(--spacing-xl);
  max-width: var(--max-content-width);
}`}
      </CodeBlock>

      <h2 id="components-styles">Component Styles</h2>

      <h3>Infobox (Wikipedia-style)</h3>
      <p>
        The infobox that appears on the right side of article pages:
      </p>

      <CodeBlock filename="Infobox Styles" language="css">
        {`.infobox {
  float: right;
  width: 280px;
  margin: 0 0 var(--spacing-md) var(--spacing-lg);
  background: var(--color-infobox-bg);
  border: 1px solid var(--color-border);
  font-size: 0.875rem;
}

.infobox-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  padding: var(--spacing-sm);
  font-weight: 600;
}

.infobox-row {
  display: flex;
  border-bottom: 1px solid var(--color-border-light);
}

.infobox-label {
  width: 40%;
  padding: var(--spacing-sm);
  background: var(--color-border-light);
  font-weight: 500;
}

.infobox-value {
  width: 60%;
  padding: var(--spacing-sm);
}`}
      </CodeBlock>

      <h3>Code Blocks</h3>
      <p>
        Styling for the code examples throughout the wiki:
      </p>

      <CodeBlock filename="Code Block Styles" language="css">
        {`.code-block {
  background: var(--color-code-bg);
  border: 1px solid var(--color-border-light);
  border-radius: 4px;
  padding: var(--spacing-md);
  margin: var(--spacing-md) 0;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  line-height: 1.5;
  white-space: pre;
}

.code-header {
  display: flex;
  justify-content: space-between;
  background: var(--color-border-light);
  padding: var(--spacing-xs) var(--spacing-sm);
  margin: calc(-1 * var(--spacing-md));
  margin-bottom: var(--spacing-sm);
  border-radius: 4px 4px 0 0;
  font-size: 0.8rem;
  color: var(--color-text-muted);
}`}
      </CodeBlock>

      <h2 id="responsive">Responsive Design</h2>
      <p>
        Media queries adjust the layout for smaller screens:
      </p>

      <CodeBlock filename="Responsive Styles" language="css">
        {`/* Tablet and below */
@media (max-width: 900px) {
  .main-wrapper {
    flex-direction: column;  /* Stack sidebar above content */
  }
  
  .sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid var(--color-border-light);
  }
  
  .infobox {
    float: none;
    width: 100%;
    margin: 0 0 var(--spacing-md) 0;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .header-content {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
  
  .search-box {
    width: 100%;
  }
  
  .search-input {
    flex: 1;
    width: auto;
  }
}`}
      </CodeBlock>

      <div className="notice notice-tip">
        <strong>✨ Try It:</strong> Resize your browser window to see how the layout adapts. On
        smaller screens, the sidebar moves above the content, and the infoboxes become full-width.
      </div>
    </article>
  );
}

export default Styling;
