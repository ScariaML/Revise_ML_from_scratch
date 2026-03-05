function DictionaryJSX() {
    return (
        <article>
            <h1 className="article-title">JSX / React Dictionary</h1>

            <div className="infobox">
                <div className="infobox-header">JSX / React</div>
                <div className="infobox-row">
                    <div className="infobox-label">Language</div>
                    <div className="infobox-value">JavaScript + JSX</div>
                </div>
                <div className="infobox-row">
                    <div className="infobox-label">Files in Project</div>
                    <div className="infobox-value">15 files</div>
                </div>
                <div className="infobox-row">
                    <div className="infobox-label">Extensions</div>
                    <div className="infobox-value">.jsx</div>
                </div>
            </div>

            <p>
                This dictionary contains all the <strong>JSX, React, and JavaScript syntax</strong> used
                in this website's codebase. Each entry explains what the syntax does and how it's used in our code.
            </p>

            <div className="toc">
                <div className="toc-title">Contents</div>
                <ol className="toc-list">
                    <li><a href="#imports-exports">Imports &amp; Exports</a></li>
                    <li><a href="#react-basics">React Basics</a></li>
                    <li><a href="#react-router">React Router</a></li>
                    <li><a href="#jsx-syntax">JSX Syntax</a></li>
                    <li><a href="#javascript">JavaScript Fundamentals</a></li>
                </ol>
            </div>

            {/* IMPORTS & EXPORTS */}
            <h2 id="imports-exports">Imports &amp; Exports</h2>
            <table className="dictionary-table">
                <thead>
                    <tr>
                        <th>Syntax</th>
                        <th>Explanation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>import</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> A keyword to bring code from other files/modules into the current file</li>
                                <li><strong>Syntax:</strong> <code>import Name from 'path'</code></li>
                                <li><strong>Our usage:</strong> <code>import Header from './Header'</code> brings the Header component into Layout.jsx</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>{'import { }'}</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Named import — imports specific exports from a module</li>
                                <li><strong>Syntax:</strong> <code>{'import { Name1, Name2 } from \'module\''}</code></li>
                                <li><strong>Our usage:</strong> <code>{'import { Routes, Route } from \'react-router-dom\''}</code></li>
                                <li><strong>Note:</strong> The names must match exactly what the module exports</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>export default</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Makes a function/component available for other files to import</li>
                                <li><strong>Syntax:</strong> <code>export default FunctionName</code></li>
                                <li><strong>Our usage:</strong> Every component ends with <code>export default ComponentName</code></li>
                                <li><strong>Note:</strong> Each file can only have ONE default export</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>from</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Specifies the source path/module for an import</li>
                                <li><strong>Paths starting with:</strong>
                                    <ul>
                                        <li><code>'./'</code> — relative to current folder</li>
                                        <li><code>'../'</code> — relative to parent folder</li>
                                        <li>No prefix — npm package (e.g., 'react')</li>
                                    </ul>
                                </li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* REACT BASICS */}
            <h2 id="react-basics">React Basics</h2>
            <table className="dictionary-table">
                <thead>
                    <tr>
                        <th>Syntax</th>
                        <th>Explanation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>function ComponentName()</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Defines a React functional component</li>
                                <li><strong>Convention:</strong> Component names must start with UPPERCASE letter</li>
                                <li><strong>Our usage:</strong> <code>function Header() {'{ return ... }'}</code></li>
                                <li><strong>Returns:</strong> JSX that describes what to render</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>return ( )</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Returns the JSX that the component will render</li>
                                <li><strong>Parentheses:</strong> Required for multi-line JSX to prevent auto semicolon insertion</li>
                                <li><strong>Rule:</strong> Must return a single parent element (or use fragments)</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>{'{ children }'}</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Special prop containing elements nested inside a component</li>
                                <li><strong>Our usage:</strong> In Layout.jsx: <code>{'function Layout({ children })'}</code></li>
                                <li><strong>Renders as:</strong> Whatever is placed between opening and closing tags</li>
                                <li><strong>Example:</strong> <code>{'<Layout><Home /></Layout>'}</code> — Home becomes children</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>useState</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> React Hook for managing state in functional components</li>
                                <li><strong>Syntax:</strong> <code>{'const [value, setValue] = useState(initialValue)'}</code></li>
                                <li><strong>Parameters:</strong> Initial value for the state</li>
                                <li><strong>Returns:</strong> Array with [currentValue, setterFunction]</li>
                                <li><strong>Note:</strong> Mentioned in ReactPage.jsx examples</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>StrictMode</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> React component that enables extra development checks</li>
                                <li><strong>Our usage:</strong> Wraps entire app in main.jsx</li>
                                <li><strong>Benefits:</strong> Warns about deprecated APIs, detects side effects</li>
                                <li><strong>Note:</strong> Only runs in development, no effect in production</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>createRoot</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Creates a React root for rendering components</li>
                                <li><strong>Import:</strong> <code>{'import { createRoot } from \'react-dom/client\''}</code></li>
                                <li><strong>Our usage:</strong> <code>createRoot(document.getElementById('root'))</code></li>
                                <li><strong>Chain with:</strong> <code>.render(&lt;App /&gt;)</code> to display the app</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* REACT ROUTER */}
            <h2 id="react-router">React Router</h2>
            <table className="dictionary-table">
                <thead>
                    <tr>
                        <th>Syntax</th>
                        <th>Explanation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>BrowserRouter</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Component that enables routing using browser history API</li>
                                <li><strong>Our usage:</strong> Wraps the entire App in main.jsx</li>
                                <li><strong>Requirement:</strong> Must wrap all components that use routing</li>
                                <li><strong>Creates:</strong> Clean URLs like <code>/mongodb</code> instead of <code>#/mongodb</code></li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>Routes</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Container component that holds all Route definitions</li>
                                <li><strong>Our usage:</strong> Wraps all Route components in App.jsx</li>
                                <li><strong>Behavior:</strong> Renders the first Route that matches the current URL</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>Route</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Maps a URL path to a React component</li>
                                <li><strong>Props:</strong>
                                    <ul>
                                        <li><code>path</code> — URL to match (e.g., "/mongodb")</li>
                                        <li><code>element</code> — Component to render (e.g., <code>{'<MongoDB />'}</code>)</li>
                                    </ul>
                                </li>
                                <li><strong>Our usage:</strong> <code>{'<Route path="/mongodb" element={<MongoDB />} />'}</code></li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>Link</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Component for navigation without page reload</li>
                                <li><strong>Props:</strong> <code>to</code> — destination path</li>
                                <li><strong>Our usage:</strong> <code>{'<Link to="/">Home</Link>'}</code> in Header</li>
                                <li><strong>Difference from &lt;a&gt;:</strong> Doesn't trigger full page refresh</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>NavLink</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Like Link, but knows if it's the "active" page</li>
                                <li><strong>Props:</strong>
                                    <ul>
                                        <li><code>to</code> — destination path</li>
                                        <li><code>className</code> — can be a function receiving <code>{'{ isActive }'}</code></li>
                                    </ul>
                                </li>
                                <li><strong>Our usage:</strong> Sidebar links use NavLink to highlight current page</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* JSX SYNTAX */}
            <h2 id="jsx-syntax">JSX Syntax</h2>
            <table className="dictionary-table">
                <thead>
                    <tr>
                        <th>Syntax</th>
                        <th>Explanation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>{'<Component />'}</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Self-closing component tag (no children)</li>
                                <li><strong>Our usage:</strong> <code>{'<Header />'}</code>, <code>{'<Footer />'}</code></li>
                                <li><strong>Rule:</strong> Must start with uppercase letter</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>{'<Component>...</Component>'}</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Component with children nested inside</li>
                                <li><strong>Our usage:</strong> <code>{'<Layout><Routes>...</Routes></Layout>'}</code></li>
                                <li><strong>Children:</strong> Accessible via the <code>children</code> prop</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>className</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> JSX equivalent of HTML's <code>class</code> attribute</li>
                                <li><strong>Why different:</strong> <code>class</code> is a reserved word in JavaScript</li>
                                <li><strong>Our usage:</strong> <code>{'<div className="sidebar">'}</code></li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>{'{expression}'}</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Embeds JavaScript expressions inside JSX</li>
                                <li><strong>Can contain:</strong> Variables, function calls, ternary operators</li>
                                <li><strong>Our usage:</strong> <code>{'{children}'}</code>, <code>{'{filename}'}</code></li>
                                <li><strong>Cannot contain:</strong> Statements like if/for (use ternary or map instead)</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>{'prop={value}'}</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Passes a JavaScript value as a prop</li>
                                <li><strong>Our usage:</strong> <code>{'element={<Home />}'}</code></li>
                                <li><strong>Strings:</strong> Can use quotes instead: <code>to="/mongodb"</code></li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>{'({ prop1, prop2 })'}</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Destructuring props in function parameters</li>
                                <li><strong>Our usage:</strong> <code>{'function CodeBlock({ filename, language, children })'}</code></li>
                                <li><strong>Benefit:</strong> Direct access to props without <code>props.name</code></li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>{'&&'}</code> (logical AND)</td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Conditional rendering — renders right side if left is true</li>
                                <li><strong>Our usage:</strong> <code>{'{filename && <div>...</div>}'}</code></li>
                                <li><strong>Behavior:</strong> If filename exists, render the div; otherwise render nothing</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>{'condition ? a : b'}</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Ternary operator for conditional expressions</li>
                                <li><strong>Our usage:</strong> <code>{'isActive ? \'active\' : \'\''}</code></li>
                                <li><strong>Returns:</strong> First value if true, second if false</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* JAVASCRIPT FUNDAMENTALS */}
            <h2 id="javascript">JavaScript Fundamentals</h2>
            <table className="dictionary-table">
                <thead>
                    <tr>
                        <th>Syntax</th>
                        <th>Explanation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>const</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Declares a constant variable (cannot be reassigned)</li>
                                <li><strong>Our usage:</strong> <code>const name = "value"</code></li>
                                <li><strong>Best practice:</strong> Use const by default; only use let if you need to reassign</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>{'() => {}'}</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Arrow function — concise function syntax</li>
                                <li><strong>Syntax variations:</strong>
                                    <ul>
                                        <li><code>{'() => value'}</code> — implicit return</li>
                                        <li><code>{'() => { return value }'}</code> — explicit return</li>
                                        <li><code>{'x => x * 2'}</code> — single param, no parentheses needed</li>
                                    </ul>
                                </li>
                                <li><strong>Our usage:</strong> <code>{'({ isActive }) => isActive ? \'active\' : \'\''}</code></li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>{'`template ${var}`'}</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Template literal — string with embedded expressions</li>
                                <li><strong>Syntax:</strong> Use backticks (`) not quotes</li>
                                <li><strong>Our usage:</strong> Multi-line strings in CodeBlock children</li>
                                <li><strong>Feature:</strong> Supports multi-line strings without \n</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>document.getElementById</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> DOM method to find an element by its ID</li>
                                <li><strong>Our usage:</strong> <code>document.getElementById('root')</code> in main.jsx</li>
                                <li><strong>Returns:</strong> The DOM element, or null if not found</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>.render()</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Method on React root to display a component</li>
                                <li><strong>Our usage:</strong> <code>{'createRoot(...).render(<App />)'}</code></li>
                                <li><strong>Parameter:</strong> The React element/component to render</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <style>{`
        .dictionary-table {
          width: 100%;
          border-collapse: collapse;
          margin: var(--spacing-md) 0;
          font-size: 0.9rem;
        }
        .dictionary-table th,
        .dictionary-table td {
          border: 1px solid var(--color-border);
          padding: var(--spacing-sm) var(--spacing-md);
          text-align: left;
          vertical-align: top;
        }
        .dictionary-table th {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          font-weight: 600;
        }
        .dictionary-table th:first-child {
          width: 30%;
        }
        .dictionary-table tr:nth-child(even) {
          background: var(--color-infobox-bg);
        }
        .dictionary-table ul {
          margin: 0;
          padding-left: var(--spacing-md);
        }
        .dictionary-table ul ul {
          margin-top: var(--spacing-xs);
        }
        .dictionary-table li {
          margin-bottom: var(--spacing-xs);
        }
        .dictionary-table code {
          background: rgba(0,0,0,0.05);
          padding: 0.1em 0.3em;
          border-radius: 3px;
          font-size: 0.85em;
        }
      `}</style>
        </article>
    );
}

export default DictionaryJSX;
