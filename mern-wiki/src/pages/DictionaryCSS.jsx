function DictionaryCSS() {
    return (
        <article>
            <h1 className="article-title">CSS Dictionary</h1>

            <div className="infobox">
                <div className="infobox-header">CSS</div>
                <div className="infobox-row">
                    <div className="infobox-label">Full Name</div>
                    <div className="infobox-value">Cascading Style Sheets</div>
                </div>
                <div className="infobox-row">
                    <div className="infobox-label">Files in Project</div>
                    <div className="infobox-value">1 file (index.css)</div>
                </div>
                <div className="infobox-row">
                    <div className="infobox-label">Lines of Code</div>
                    <div className="infobox-value">524 lines</div>
                </div>
            </div>

            <p>
                This dictionary contains all the <strong>CSS syntax, properties, and functions</strong> used
                in this website's <code>index.css</code> file. Each entry explains what the syntax does and
                provides examples from our actual code.
            </p>

            <div className="toc">
                <div className="toc-title">Contents</div>
                <ol className="toc-list">
                    <li><a href="#at-rules">At-Rules</a></li>
                    <li><a href="#selectors">Selectors</a></li>
                    <li><a href="#functions">CSS Functions</a></li>
                    <li><a href="#layout">Layout Properties</a></li>
                    <li><a href="#typography">Typography Properties</a></li>
                    <li><a href="#box-model">Box Model Properties</a></li>
                    <li><a href="#visual">Visual Properties</a></li>
                    <li><a href="#units">Units</a></li>
                </ol>
            </div>

            {/* AT-RULES */}
            <h2 id="at-rules">At-Rules</h2>
            <table className="dictionary-table">
                <thead>
                    <tr>
                        <th>Syntax</th>
                        <th>Explanation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>@import</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Imports external stylesheets or fonts</li>
                                <li><strong>Our usage:</strong> <code>@import url('https://fonts.googleapis.com/...')</code></li>
                                <li><strong>Purpose:</strong> Loads Google Fonts (Linux Libertine, Inter)</li>
                                <li><strong>Note:</strong> Must be at the top of the CSS file</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>@media</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Applies styles conditionally based on screen size</li>
                                <li><strong>Our usage:</strong> <code>@media (max-width: 900px)</code> and <code>@media (max-width: 600px)</code></li>
                                <li><strong>Purpose:</strong> Makes layout responsive for tablets and mobile</li>
                                <li><strong>Syntax:</strong> <code>@media (condition) {'{ styles }'}</code></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* SELECTORS */}
            <h2 id="selectors">Selectors</h2>
            <table className="dictionary-table">
                <thead>
                    <tr>
                        <th>Syntax</th>
                        <th>Explanation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>:root</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Pseudo-class that matches the document's root element</li>
                                <li><strong>Our usage:</strong> Defines CSS variables at the top level</li>
                                <li><strong>Benefit:</strong> Variables defined here are available throughout the CSS</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>.classname</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Class selector — selects elements with that class</li>
                                <li><strong>Our usage:</strong> <code>.header</code>, <code>.sidebar</code>, <code>.main-content</code></li>
                                <li><strong>HTML:</strong> <code>{'<div class="header">'}</code></li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>element</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Type selector — selects all elements of that type</li>
                                <li><strong>Our usage:</strong> <code>body</code>, <code>html</code>, <code>a</code>, <code>h1</code></li>
                                <li><strong>Effect:</strong> Applies to every instance of that element</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>*</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Universal selector — selects ALL elements</li>
                                <li><strong>Our usage:</strong> <code>*</code> for resetting box-sizing</li>
                                <li><strong>Common for:</strong> CSS resets and normalization</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>::before, ::after</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Pseudo-elements to insert content before/after an element</li>
                                <li><strong>Our usage:</strong> <code>*::before, *::after</code> in reset</li>
                                <li><strong>Requires:</strong> <code>content</code> property to work</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>:hover</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Pseudo-class that activates when mouse hovers over element</li>
                                <li><strong>Our usage:</strong> <code>a:hover</code>, <code>.search-btn:hover</code></li>
                                <li><strong>Purpose:</strong> Provides visual feedback on interactive elements</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>:visited</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Pseudo-class for links that have been visited</li>
                                <li><strong>Our usage:</strong> <code>a:visited</code> sets purple color for visited links</li>
                                <li><strong>Wikipedia style:</strong> Helps users track which pages they've read</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>:focus</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Pseudo-class when element has keyboard focus</li>
                                <li><strong>Our usage:</strong> <code>.search-input:focus</code></li>
                                <li><strong>Accessibility:</strong> Important for keyboard navigation</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>:nth-child()</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Selects elements based on their position among siblings</li>
                                <li><strong>Our usage:</strong> <code>tr:nth-child(even)</code> for zebra-striped tables</li>
                                <li><strong>Values:</strong> <code>odd</code>, <code>even</code>, or formula like <code>2n+1</code></li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>selector1, selector2</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Grouping — applies same styles to multiple selectors</li>
                                <li><strong>Our usage:</strong> <code>h1, h2, h3, h4, h5, h6</code></li>
                                <li><strong>Benefit:</strong> Avoids repeating identical style blocks</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>.parent .child</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Descendant combinator — selects child anywhere inside parent</li>
                                <li><strong>Our usage:</strong> <code>.sidebar-nav a</code>, <code>.toc-list li</code></li>
                                <li><strong>Specificity:</strong> More specific than single class selector</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* CSS FUNCTIONS */}
            <h2 id="functions">CSS Functions</h2>
            <table className="dictionary-table">
                <thead>
                    <tr>
                        <th>Syntax</th>
                        <th>Explanation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>var()</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Retrieves the value of a CSS custom property (variable)</li>
                                <li><strong>Syntax:</strong> <code>var(--variable-name)</code></li>
                                <li><strong>Our usage:</strong> <code>color: var(--color-text)</code></li>
                                <li><strong>Fallback:</strong> <code>var(--name, fallback)</code> provides default value</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>calc()</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Performs calculations with CSS values</li>
                                <li><strong>Our usage:</strong> <code>calc(-1 * var(--spacing-md))</code></li>
                                <li><strong>Operators:</strong> <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code></li>
                                <li><strong>Note:</strong> Spaces required around + and -</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>url()</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> References external resources (images, fonts)</li>
                                <li><strong>Our usage:</strong> <code>@import url('https://fonts.googleapis.com/...')</code></li>
                                <li><strong>Also used for:</strong> <code>background-image: url(...)</code></li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>linear-gradient()</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Creates a gradient that transitions between colors</li>
                                <li><strong>Our usage:</strong> <code>linear-gradient(135deg, #667eea 0%, #764ba2 100%)</code></li>
                                <li><strong>Parameters:</strong>
                                    <ul>
                                        <li>Angle (135deg = diagonal)</li>
                                        <li>Color stops (color + position %)</li>
                                    </ul>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>rgba()</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Color with alpha (transparency) channel</li>
                                <li><strong>Our usage:</strong> <code>rgba(51, 102, 204, 0.2)</code> for focus shadow</li>
                                <li><strong>Parameters:</strong> red, green, blue (0-255), alpha (0-1)</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>counter()</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Returns the current value of a CSS counter</li>
                                <li><strong>Our usage:</strong> <code>content: counter(toc-counter)</code></li>
                                <li><strong>Used with:</strong> <code>counter-reset</code> and <code>counter-increment</code></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* LAYOUT PROPERTIES */}
            <h2 id="layout">Layout Properties</h2>
            <table className="dictionary-table">
                <thead>
                    <tr>
                        <th>Syntax</th>
                        <th>Explanation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>display</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Defines how an element is displayed</li>
                                <li><strong>Values we use:</strong>
                                    <ul>
                                        <li><code>flex</code> — enables Flexbox layout</li>
                                        <li><code>block</code> — full-width block element</li>
                                        <li><code>inline-block</code> — inline but accepts width/height</li>
                                    </ul>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>flex</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Shorthand for flex-grow, flex-shrink, flex-basis</li>
                                <li><strong>Our usage:</strong> <code>flex: 1</code> means grow to fill available space</li>
                                <li><strong>Applied to:</strong> <code>.main-wrapper</code>, <code>.main-content</code></li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>flex-direction</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Sets the direction of flex items</li>
                                <li><strong>Values:</strong>
                                    <ul>
                                        <li><code>row</code> — horizontal (default)</li>
                                        <li><code>column</code> — vertical</li>
                                    </ul>
                                </li>
                                <li><strong>Our usage:</strong> <code>flex-direction: column</code> in responsive mode</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>flex-shrink</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Defines how much an item should shrink if needed</li>
                                <li><strong>Our usage:</strong> <code>flex-shrink: 0</code> on sidebar (prevents shrinking)</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>align-items</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Aligns flex items on the cross axis</li>
                                <li><strong>Our usage:</strong> <code>align-items: center</code> for vertical centering</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>justify-content</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Distributes space on the main axis</li>
                                <li><strong>Values we use:</strong>
                                    <ul>
                                        <li><code>center</code> — center items</li>
                                        <li><code>space-between</code> — space between items</li>
                                    </ul>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>gap</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Sets spacing between flex/grid items</li>
                                <li><strong>Our usage:</strong> <code>gap: var(--spacing-sm)</code></li>
                                <li><strong>Benefit:</strong> Cleaner than margins on individual items</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>position</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Sets how an element is positioned</li>
                                <li><strong>Values we use:</strong>
                                    <ul>
                                        <li><code>sticky</code> — sticks when scrolling (header)</li>
                                        <li><code>relative</code> — positioned relative to normal position</li>
                                    </ul>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>float</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Places element to left/right, with text wrapping around</li>
                                <li><strong>Our usage:</strong> <code>float: right</code> for infoboxes (Wikipedia style)</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>z-index</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Controls stacking order of positioned elements</li>
                                <li><strong>Our usage:</strong> <code>z-index: 100</code> on header (stays on top)</li>
                                <li><strong>Requires:</strong> position value other than static</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TYPOGRAPHY */}
            <h2 id="typography">Typography Properties</h2>
            <table className="dictionary-table">
                <thead>
                    <tr>
                        <th>Syntax</th>
                        <th>Explanation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>font-family</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Sets the font for text</li>
                                <li><strong>Our fonts:</strong>
                                    <ul>
                                        <li>Serif: 'Linux Libertine', Georgia (headings)</li>
                                        <li>Sans: 'Inter', system fonts (body)</li>
                                        <li>Mono: 'Consolas', Monaco (code)</li>
                                    </ul>
                                </li>
                                <li><strong>Fallbacks:</strong> Listed in order of preference</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>font-size</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Sets the size of text</li>
                                <li><strong>Our usage:</strong> <code>1.8rem</code> for h1, <code>0.875rem</code> for small text</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>font-weight</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Sets the boldness of text</li>
                                <li><strong>Values:</strong> 100-900, or keywords (normal=400, bold=700)</li>
                                <li><strong>Our usage:</strong> <code>font-weight: 600</code> for semi-bold headers</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>line-height</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Sets spacing between lines of text</li>
                                <li><strong>Our usage:</strong> <code>line-height: 1.6</code> for readable body text</li>
                                <li><strong>Unitless values:</strong> Multiply by font-size</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>text-decoration</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Adds decoration to text (underline, etc.)</li>
                                <li><strong>Our usage:</strong> <code>none</code> for links, <code>underline</code> on hover</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>text-transform</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Changes text capitalization</li>
                                <li><strong>Our usage:</strong> <code>uppercase</code> for sidebar titles</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>letter-spacing</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Adjusts space between characters</li>
                                <li><strong>Our usage:</strong> <code>0.5px</code> for uppercase sidebar titles</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>text-align</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Aligns text horizontally within its container</li>
                                <li><strong>Values:</strong> left, right, center, justify</li>
                                <li><strong>Our usage:</strong> <code>center</code> for footer, infobox headers</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* BOX MODEL */}
            <h2 id="box-model">Box Model Properties</h2>
            <table className="dictionary-table">
                <thead>
                    <tr>
                        <th>Syntax</th>
                        <th>Explanation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>box-sizing</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Defines how width/height are calculated</li>
                                <li><strong>Our usage:</strong> <code>border-box</code> — includes padding and border in width</li>
                                <li><strong>Applied to:</strong> All elements via <code>*</code> selector</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>margin</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Space outside an element's border</li>
                                <li><strong>Shorthand:</strong> <code>margin: top right bottom left</code></li>
                                <li><strong>Special:</strong> <code>margin: 0 auto</code> centers block elements</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>padding</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Space inside an element's border</li>
                                <li><strong>Shorthand:</strong> Same as margin</li>
                                <li><strong>Our usage:</strong> <code>padding: var(--spacing-md)</code></li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>width</code> / <code>height</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Sets the dimensions of an element</li>
                                <li><strong>Our usage:</strong> <code>width: 100%</code>, <code>width: 280px</code></li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>min-height</code> / <code>max-width</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Sets minimum/maximum dimensions</li>
                                <li><strong>Our usage:</strong> <code>min-height: 100vh</code> ensures full viewport height</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>overflow-x</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Handles content that overflows horizontally</li>
                                <li><strong>Our usage:</strong> <code>auto</code> for code blocks (shows scrollbar if needed)</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* VISUAL PROPERTIES */}
            <h2 id="visual">Visual Properties</h2>
            <table className="dictionary-table">
                <thead>
                    <tr>
                        <th>Syntax</th>
                        <th>Explanation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>color</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Sets text color</li>
                                <li><strong>Our usage:</strong> <code>color: var(--color-text)</code></li>
                                <li><strong>Formats:</strong> hex (#fff), rgb(), named colors, variables</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>background</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Shorthand for all background properties</li>
                                <li><strong>Our usage:</strong> <code>background: var(--color-surface)</code></li>
                                <li><strong>Can include:</strong> color, image, position, size, repeat</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>border</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Shorthand for border-width, style, and color</li>
                                <li><strong>Our usage:</strong> <code>border: 1px solid var(--color-border)</code></li>
                                <li><strong>Styles:</strong> solid, dashed, dotted, none</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>border-radius</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Rounds the corners of an element</li>
                                <li><strong>Our usage:</strong> <code>4px</code> for buttons, <code>50%</code> for circles</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>box-shadow</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Adds shadow around an element</li>
                                <li><strong>Our usage:</strong> <code>0 0 0 2px rgba(51, 102, 204, 0.2)</code> for focus ring</li>
                                <li><strong>Values:</strong> x-offset y-offset blur spread color</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>transition</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Animates property changes smoothly</li>
                                <li><strong>Our usage:</strong> <code>transition: background 0.2s</code></li>
                                <li><strong>Values:</strong> property duration timing-function</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>cursor</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Sets the mouse cursor style</li>
                                <li><strong>Our usage:</strong> <code>cursor: pointer</code> for clickable buttons</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>outline</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Line drawn outside the border</li>
                                <li><strong>Our usage:</strong> <code>outline: none</code> on focused inputs (custom focus style instead)</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>white-space</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Controls how whitespace is handled</li>
                                <li><strong>Our usage:</strong> <code>pre</code> for code blocks (preserves spaces/newlines)</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* UNITS */}
            <h2 id="units">Units</h2>
            <table className="dictionary-table">
                <thead>
                    <tr>
                        <th>Unit</th>
                        <th>Explanation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>px</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Pixels — absolute unit, fixed size</li>
                                <li><strong>Our usage:</strong> Borders, shadows, letter-spacing</li>
                                <li><strong>When to use:</strong> When exact pixel precision is needed</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>rem</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Relative to root element's font-size</li>
                                <li><strong>Our base:</strong> 1rem = 16px (from html font-size)</li>
                                <li><strong>Benefit:</strong> Scales with user's browser font settings</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>em</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Relative to parent element's font-size</li>
                                <li><strong>Our usage:</strong> <code>0.9em</code> for inline code size</li>
                                <li><strong>Cascades:</strong> Can compound if nested</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>%</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Percentage of parent's dimension</li>
                                <li><strong>Our usage:</strong> <code>width: 100%</code>, gradient stops</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>vh / vw</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Viewport height / width (1% of viewport)</li>
                                <li><strong>Our usage:</strong> <code>min-height: 100vh</code> for full-screen container</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>deg</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Degrees for angles</li>
                                <li><strong>Our usage:</strong> <code>135deg</code> in gradient direction</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><code>s</code></td>
                        <td>
                            <ul>
                                <li><strong>What it is:</strong> Seconds for timing</li>
                                <li><strong>Our usage:</strong> <code>0.2s</code> for transition duration</li>
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
          width: 25%;
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

export default DictionaryCSS;
