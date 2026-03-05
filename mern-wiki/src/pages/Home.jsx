import { Link } from 'react-router-dom';

function Home() {
    return (
        <article>
            <h1 className="article-title">Welcome to MERN Wiki</h1>

            <div className="infobox">
                <div className="infobox-header">MERN Stack</div>
                <div className="infobox-row">
                    <div className="infobox-label">Full Form</div>
                    <div className="infobox-value">MongoDB, Express, React, Node.js</div>
                </div>
                <div className="infobox-row">
                    <div className="infobox-label">Type</div>
                    <div className="infobox-value">Full-Stack JavaScript</div>
                </div>
                <div className="infobox-row">
                    <div className="infobox-label">Used For</div>
                    <div className="infobox-value">Web Applications</div>
                </div>
                <div className="infobox-row">
                    <div className="infobox-label">This Site Built With</div>
                    <div className="infobox-value">React + Vite</div>
                </div>
            </div>

            <p>
                <strong>MERN Wiki</strong> is a self-documenting encyclopedia that explains how web applications
                are built using the <strong>MERN stack</strong>. What makes this wiki special is that it uses
                its own source code as teaching material — every code example you see here is the actual code
                that powers this very website!
            </p>

            <div className="toc">
                <div className="toc-title">Contents</div>
                <ol className="toc-list">
                    <li><a href="#what-is-mern">What is MERN?</a></li>
                    <li><a href="#why-learn">Why Learn MERN?</a></li>
                    <li><a href="#this-website">About This Website</a></li>
                    <li><a href="#getting-started">Getting Started</a></li>
                </ol>
            </div>

            <h2 id="what-is-mern">What is MERN?</h2>
            <p>
                The <strong>MERN stack</strong> is a collection of four powerful technologies that work together
                to build modern web applications:
            </p>
            <ul>
                <li><Link to="/mongodb"><strong>MongoDB</strong></Link> — A NoSQL database that stores data in flexible, JSON-like documents</li>
                <li><Link to="/express"><strong>Express.js</strong></Link> — A minimal web framework for Node.js that handles server-side logic</li>
                <li><Link to="/react"><strong>React</strong></Link> — A JavaScript library for building interactive user interfaces</li>
                <li><Link to="/nodejs"><strong>Node.js</strong></Link> — A JavaScript runtime that allows you to run JavaScript on the server</li>
            </ul>
            <p>
                Together, these technologies allow developers to use <strong>JavaScript for everything</strong> —
                from the database to the browser. This makes development faster and more consistent.
            </p>

            <h2 id="why-learn">Why Learn MERN?</h2>
            <p>The MERN stack is one of the most popular choices for building modern web applications because:</p>
            <ul>
                <li><strong>One Language</strong> — JavaScript runs everywhere, so you only need to learn one language</li>
                <li><strong>Great Community</strong> — Millions of developers use these technologies, so help is always available</li>
                <li><strong>Job Opportunities</strong> — MERN developers are in high demand across the tech industry</li>
                <li><strong>Modern Architecture</strong> — Build fast, scalable, and maintainable applications</li>
            </ul>

            <h2 id="this-website">About This Website</h2>
            <p>
                This website is built using <strong>React</strong> (the "R" in MERN) and serves as a practical
                example of how React applications are structured. You can explore the actual code that creates
                this website in the sidebar sections:
            </p>
            <ul>
                <li><Link to="/project-structure">Project Structure</Link> — How files and folders are organized</li>
                <li><Link to="/components">Components</Link> — The building blocks of this UI</li>
                <li><Link to="/styling">Styling (CSS)</Link> — How the visual design is implemented</li>
                <li><Link to="/routing">Routing</Link> — How navigation between pages works</li>
            </ul>

            <div className="notice notice-info">
                <strong>💡 Learning Tip:</strong> As you read through this wiki, pay attention to how the explanations
                connect to what you see on screen. Every sidebar, button, and page you interact with is created
                by the code we discuss!
            </div>

            <h2 id="getting-started">Getting Started</h2>
            <p>We recommend exploring the wiki in this order:</p>
            <ol>
                <li>Start with the <Link to="/overview">MERN Overview</Link> to understand the big picture</li>
                <li>Learn about <Link to="/react">React</Link> since this website is built with it</li>
                <li>Explore <Link to="/project-structure">Project Structure</Link> to see how the code is organized</li>
                <li>Dive into <Link to="/components">Components</Link> to understand how the UI is built</li>
                <li>Then explore the backend technologies: <Link to="/nodejs">Node.js</Link>, <Link to="/express">Express</Link>, and <Link to="/mongodb">MongoDB</Link></li>
            </ol>
        </article>
    );
}

export default Home;
