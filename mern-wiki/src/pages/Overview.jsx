import { Link } from 'react-router-dom';

function Overview() {
    return (
        <article>
            <h1 className="article-title">MERN Stack Overview</h1>

            <div className="infobox">
                <div className="infobox-header">Architecture Type</div>
                <div className="infobox-row">
                    <div className="infobox-label">Pattern</div>
                    <div className="infobox-value">Client-Server</div>
                </div>
                <div className="infobox-row">
                    <div className="infobox-label">Frontend</div>
                    <div className="infobox-value">React (SPA)</div>
                </div>
                <div className="infobox-row">
                    <div className="infobox-label">Backend</div>
                    <div className="infobox-value">Node.js + Express</div>
                </div>
                <div className="infobox-row">
                    <div className="infobox-label">Database</div>
                    <div className="infobox-value">MongoDB</div>
                </div>
                <div className="infobox-row">
                    <div className="infobox-label">Data Format</div>
                    <div className="infobox-value">JSON</div>
                </div>
            </div>

            <p>
                The <strong>MERN stack</strong> is a full-stack JavaScript architecture that enables
                developers to build complete web applications using a unified technology ecosystem.
                This article explains how all four technologies work together.
            </p>

            <div className="toc">
                <div className="toc-title">Contents</div>
                <ol className="toc-list">
                    <li><a href="#how-it-works">How MERN Works Together</a></li>
                    <li><a href="#data-flow">Data Flow</a></li>
                    <li><a href="#vs-other-stacks">Comparison with Other Stacks</a></li>
                    <li><a href="#when-to-use">When to Use MERN</a></li>
                </ol>
            </div>

            <h2 id="how-it-works">How MERN Works Together</h2>
            <p>
                In a MERN application, each technology has a specific role:
            </p>

            <h3>The Frontend (What Users See)</h3>
            <p>
                <Link to="/react"><strong>React</strong></Link> runs in the user's web browser and handles
                everything they see and interact with. It creates the buttons, forms, and dynamic content.
                React applications are called <strong>Single Page Applications (SPAs)</strong> because the
                browser loads one HTML page and React dynamically updates it without full page refreshes.
            </p>

            <h3>The Backend (The Server)</h3>
            <p>
                <Link to="/nodejs"><strong>Node.js</strong></Link> provides the environment to run JavaScript
                on a server. <Link to="/express"><strong>Express.js</strong></Link> sits on top of Node.js and
                makes it easy to create <strong>API endpoints</strong> — special URLs that the frontend can
                call to get or send data.
            </p>

            <h3>The Database (Data Storage)</h3>
            <p>
                <Link to="/mongodb"><strong>MongoDB</strong></Link> stores all the application's data. Unlike
                traditional databases that use tables and rows, MongoDB stores data as <strong>documents</strong>
                that look very similar to JavaScript objects, making it natural to work with in a JavaScript application.
            </p>

            <h2 id="data-flow">Data Flow</h2>
            <p>
                Here's how data typically flows through a MERN application:
            </p>
            <ol>
                <li><strong>User Action</strong> — A user clicks a button or submits a form in the React frontend</li>
                <li><strong>API Request</strong> — React sends an HTTP request to an Express API endpoint</li>
                <li><strong>Server Processing</strong> — Express receives the request and processes it</li>
                <li><strong>Database Query</strong> — If needed, Express queries MongoDB for data</li>
                <li><strong>Response</strong> — MongoDB returns data to Express, which sends it back to React</li>
                <li><strong>UI Update</strong> — React updates what the user sees based on the received data</li>
            </ol>

            <div className="notice notice-tip">
                <strong>✨ Key Insight:</strong> All communication between these layers uses <strong>JSON</strong>
                (JavaScript Object Notation) — a data format that JavaScript natively understands. This makes
                data handling seamless across the entire stack.
            </div>

            <h2 id="vs-other-stacks">Comparison with Other Stacks</h2>
            <p>
                There are many technology stacks for building web applications. Here's how MERN compares:
            </p>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1rem' }}>
                <thead>
                    <tr style={{ background: 'var(--color-border-light)' }}>
                        <th style={{ padding: '0.5rem', border: '1px solid var(--color-border)', textAlign: 'left' }}>Stack</th>
                        <th style={{ padding: '0.5rem', border: '1px solid var(--color-border)', textAlign: 'left' }}>Frontend</th>
                        <th style={{ padding: '0.5rem', border: '1px solid var(--color-border)', textAlign: 'left' }}>Backend</th>
                        <th style={{ padding: '0.5rem', border: '1px solid var(--color-border)', textAlign: 'left' }}>Database</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '0.5rem', border: '1px solid var(--color-border)' }}><strong>MERN</strong></td>
                        <td style={{ padding: '0.5rem', border: '1px solid var(--color-border)' }}>React</td>
                        <td style={{ padding: '0.5rem', border: '1px solid var(--color-border)' }}>Node.js/Express</td>
                        <td style={{ padding: '0.5rem', border: '1px solid var(--color-border)' }}>MongoDB</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '0.5rem', border: '1px solid var(--color-border)' }}>MEAN</td>
                        <td style={{ padding: '0.5rem', border: '1px solid var(--color-border)' }}>Angular</td>
                        <td style={{ padding: '0.5rem', border: '1px solid var(--color-border)' }}>Node.js/Express</td>
                        <td style={{ padding: '0.5rem', border: '1px solid var(--color-border)' }}>MongoDB</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '0.5rem', border: '1px solid var(--color-border)' }}>LAMP</td>
                        <td style={{ padding: '0.5rem', border: '1px solid var(--color-border)' }}>PHP/HTML</td>
                        <td style={{ padding: '0.5rem', border: '1px solid var(--color-border)' }}>Apache/PHP</td>
                        <td style={{ padding: '0.5rem', border: '1px solid var(--color-border)' }}>MySQL</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '0.5rem', border: '1px solid var(--color-border)' }}>Django</td>
                        <td style={{ padding: '0.5rem', border: '1px solid var(--color-border)' }}>Templates/React</td>
                        <td style={{ padding: '0.5rem', border: '1px solid var(--color-border)' }}>Python/Django</td>
                        <td style={{ padding: '0.5rem', border: '1px solid var(--color-border)' }}>PostgreSQL</td>
                    </tr>
                </tbody>
            </table>

            <h2 id="when-to-use">When to Use MERN</h2>
            <p>MERN is an excellent choice when:</p>
            <ul>
                <li>You want to use <strong>one language</strong> (JavaScript) across your entire application</li>
                <li>You're building an <strong>interactive web application</strong> with a modern user interface</li>
                <li>Your data structure is <strong>flexible</strong> and may evolve over time</li>
                <li>You need <strong>real-time features</strong> like live updates or chat</li>
                <li>You want a large ecosystem of <strong>libraries and tools</strong></li>
            </ul>

            <p>Consider alternatives when:</p>
            <ul>
                <li>You have complex relational data that benefits from SQL databases</li>
                <li>Your team is more experienced with other languages like Python or Ruby</li>
                <li>You need specific features better served by other frameworks</li>
            </ul>
        </article>
    );
}

export default Overview;
