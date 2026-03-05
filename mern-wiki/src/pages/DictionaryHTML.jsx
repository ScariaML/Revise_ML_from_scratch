function DictionaryHTML() {
    return (
        <article>
            <h1 className="article-title">HTML Dictionary</h1>

            <div className="infobox">
                <div className="infobox-header">HTML</div>
                <div className="infobox-row">
                    <div className="infobox-label">Full Name</div>
                    <div className="infobox-value">HyperText Markup Language</div>
                </div>
                <div className="infobox-row">
                    <div className="infobox-label">Files in Project</div>
                    <div className="infobox-value">1 file (index.html)</div>
                </div>
                <div className="infobox-row">
                    <div className="infobox-label">Purpose</div>
                    <div className="infobox-value">Document Structure</div>
                </div>
            </div>

            <p>
                This dictionary contains all the <strong>HTML elements and attributes</strong> used in this
                website's <code>index.html</code> file. In a React/Vite project, the HTML file serves as the
                template where React injects the application.
            </p>

            <div className="toc">
                <div className="toc-title">Contents</div>
                <ol className="toc-list">
                    <li><a href="#document-structure">Document Structure</a></li>
                    <li><a href="#head-elements">Head Elements</a></li>
                    <li><a href="#body-elements">Body Elements</a></li>
                    <li><a href="#attributes">Common Attributes</a></li>
                </ol>
            </div>

            {/* DOCUMENT STRUCTURE */}
            <h2 id="document-structure">Document Structure</h2>
            <table className="dictionary-table">
                <thead>
                    <tr>
                        <th>Element</th>
                        <th>Explanation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>&lt;!DOCTYPE html&gt;</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Document Type Declaration — tells the browser this is HTML5</li>
                                <li><strong>Required:</strong> Must be the very first line of any HTML file</li>
                                <li><strong>Purpose:</strong> Ensures browser uses standards mode (not quirks mode)</li>
                                <li><strong>Note:</strong> Not actually an HTML element, but a declaration</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>&lt;html&gt;</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> The root element that contains all HTML content</li>
                                <li><strong>Our usage:</strong> <code>&lt;html lang="en"&gt;</code></li>
                                <li><strong>Attribute:</strong> <code>lang="en"</code> specifies the document language</li>
                                <li><strong>Purpose:</strong> Helps screen readers and search engines</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>&lt;head&gt;</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Container for metadata (not visible content)</li>
                                <li><strong>Contains:</strong> Title, meta tags, links to stylesheets, scripts</li>
                                <li><strong>Renders:</strong> Nothing visible — only browser/SEO information</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>&lt;body&gt;</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Container for all visible page content</li>
                                <li><strong>Our usage:</strong> Contains <code>&lt;div id="root"&gt;</code> and <code>&lt;script&gt;</code></li>
                                <li><strong>In React:</strong> Usually just has a mount point — React renders content</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* HEAD ELEMENTS */}
            <h2 id="head-elements">Head Elements</h2>
            <table className="dictionary-table">
                <thead>
                    <tr>
                        <th>Element</th>
                        <th>Explanation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>&lt;meta charset&gt;</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Specifies character encoding for the document</li>
                                <li><strong>Our usage:</strong> <code>&lt;meta charset="UTF-8" /&gt;</code></li>
                                <li><strong>UTF-8:</strong> Supports virtually all characters from all languages</li>
                                <li><strong>Note:</strong> Must be within first 1024 bytes of document</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>&lt;meta name="viewport"&gt;</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Controls how the page is displayed on mobile devices</li>
                                <li><strong>Our usage:</strong> <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;</code></li>
                                <li><strong>Properties:</strong>
                                    <ul>
                                        <li><code>width=device-width</code> — match screen width</li>
                                        <li><code>initial-scale=1.0</code> — no initial zoom</li>
                                    </ul>
                                </li>
                                <li><strong>Essential:</strong> Required for responsive design to work</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>&lt;meta name="description"&gt;</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Short description of the page for search engines</li>
                                <li><strong>Our usage:</strong> "A self-documenting encyclopedia that explains MERN stack architecture..."</li>
                                <li><strong>SEO:</strong> Appears in search results under the title</li>
                                <li><strong>Length:</strong> Keep under 160 characters for best display</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>&lt;title&gt;</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Sets the page title shown in browser tab</li>
                                <li><strong>Our usage:</strong> "MERN Wiki - The Self-Documenting Encyclopedia"</li>
                                <li><strong>Also used:</strong> In bookmarks, search results, screen readers</li>
                                <li><strong>SEO:</strong> One of the most important ranking factors</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>&lt;link rel="icon"&gt;</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Specifies the favicon (browser tab icon)</li>
                                <li><strong>Our usage:</strong> <code>&lt;link rel="icon" type="image/svg+xml" href="/vite.svg" /&gt;</code></li>
                                <li><strong>Attributes:</strong>
                                    <ul>
                                        <li><code>rel="icon"</code> — relationship type</li>
                                        <li><code>type</code> — MIME type of the icon</li>
                                        <li><code>href</code> — path to the icon file</li>
                                    </ul>
                                </li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* BODY ELEMENTS */}
            <h2 id="body-elements">Body Elements</h2>
            <table className="dictionary-table">
                <thead>
                    <tr>
                        <th>Element</th>
                        <th>Explanation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>&lt;div&gt;</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Generic container element for grouping content</li>
                                <li><strong>Our usage:</strong> <code>&lt;div id="root"&gt;&lt;/div&gt;</code></li>
                                <li><strong>In React:</strong> This is the "mount point" where React renders the entire application</li>
                                <li><strong>Semantic meaning:</strong> None — use semantic elements when possible</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>&lt;script&gt;</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Embeds or references JavaScript code</li>
                                <li><strong>Our usage:</strong> <code>&lt;script type="module" src="/src/main.jsx"&gt;&lt;/script&gt;</code></li>
                                <li><strong>Attributes:</strong>
                                    <ul>
                                        <li><code>type="module"</code> — ES6 module (enables import/export)</li>
                                        <li><code>src</code> — path to the JavaScript file</li>
                                    </ul>
                                </li>
                                <li><strong>Placement:</strong> At end of body ensures DOM is ready</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* COMMON ATTRIBUTES */}
            <h2 id="attributes">Common Attributes</h2>
            <table className="dictionary-table">
                <thead>
                    <tr>
                        <th>Attribute</th>
                        <th>Explanation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>id</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Unique identifier for an element</li>
                                <li><strong>Our usage:</strong> <code>id="root"</code></li>
                                <li><strong>Rules:</strong> Must be unique on the page, no spaces allowed</li>
                                <li><strong>Used by:</strong> JavaScript (<code>getElementById</code>), CSS (<code>#id</code>), and URL anchors</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>lang</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Specifies the language of the element's content</li>
                                <li><strong>Our usage:</strong> <code>lang="en"</code> (English)</li>
                                <li><strong>Helps:</strong> Screen readers, translation tools, spell checkers</li>
                                <li><strong>Format:</strong> ISO 639-1 language code</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>charset</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Character encoding for the document</li>
                                <li><strong>Our usage:</strong> <code>charset="UTF-8"</code></li>
                                <li><strong>UTF-8:</strong> Most common encoding, supports all Unicode characters</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>name</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Specifies the name of a meta element</li>
                                <li><strong>Our usage:</strong> <code>name="viewport"</code>, <code>name="description"</code></li>
                                <li><strong>Pairs with:</strong> <code>content</code> attribute for the value</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>content</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Value associated with <code>name</code> or <code>http-equiv</code></li>
                                <li><strong>Our usage:</strong> Contains viewport settings and description text</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>rel</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Relationship between current document and linked resource</li>
                                <li><strong>Our usage:</strong> <code>rel="icon"</code> for favicon</li>
                                <li><strong>Other values:</strong> <code>stylesheet</code>, <code>preconnect</code>, <code>canonical</code></li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>type</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> MIME type of the linked resource or script</li>
                                <li><strong>Our usage:</strong>
                                    <ul>
                                        <li><code>type="image/svg+xml"</code> — for SVG favicon</li>
                                        <li><code>type="module"</code> — for ES6 JavaScript module</li>
                                    </ul>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>href</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> URL/path of the linked resource</li>
                                <li><strong>Our usage:</strong> <code>href="/vite.svg"</code></li>
                                <li><strong>Can be:</strong> Relative path, absolute path, or full URL</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>src</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> URL/path of the embedded resource (script, image, etc.)</li>
                                <li><strong>Our usage:</strong> <code>src="/src/main.jsx"</code></li>
                                <li><strong>Difference from href:</strong> <code>src</code> embeds, <code>href</code> links</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="notice notice-info">
                <strong>💡 Why So Simple?</strong> In a React application, the HTML file is intentionally minimal.
                React takes control of the <code>&lt;div id="root"&gt;</code> and dynamically builds all the
                visible content using JavaScript. The actual HTML elements you see in the browser (like
                <code>&lt;header&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;article&gt;</code>) are
                created by React components, not written in index.html!
            </div>

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

export default DictionaryHTML;
