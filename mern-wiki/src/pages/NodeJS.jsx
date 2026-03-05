import CodeBlock from '../components/CodeBlock';

function NodeJS() {
    return (
        <article>
            <h1 className="article-title">Node.js</h1>

            <div className="infobox">
                <div className="infobox-header">Node.js</div>
                <div className="infobox-row">
                    <div className="infobox-label">Type</div>
                    <div className="infobox-value">JavaScript Runtime</div>
                </div>
                <div className="infobox-row">
                    <div className="infobox-label">Engine</div>
                    <div className="infobox-value">V8 (Chrome)</div>
                </div>
                <div className="infobox-row">
                    <div className="infobox-label">Role in MERN</div>
                    <div className="infobox-value">Server Runtime</div>
                </div>
                <div className="infobox-row">
                    <div className="infobox-label">Package Manager</div>
                    <div className="infobox-value">npm</div>
                </div>
            </div>

            <p>
                <strong>Node.js</strong> is a JavaScript runtime that allows you to run JavaScript outside
                the browser — specifically on servers. Before Node.js, JavaScript could only run in web
                browsers. Now, thanks to Node.js, we can use JavaScript for <em>everything</em>: building
                web servers, APIs, command-line tools, and more.
            </p>

            <div className="toc">
                <div className="toc-title">Contents</div>
                <ol className="toc-list">
                    <li><a href="#what-is-node">What is a Runtime?</a></li>
                    <li><a href="#npm">NPM - Node Package Manager</a></li>
                    <li><a href="#event-driven">Event-Driven Architecture</a></li>
                    <li><a href="#this-site">Node.js in This Website</a></li>
                </ol>
            </div>

            <h2 id="what-is-node">What is a Runtime?</h2>
            <p>
                A <strong>runtime</strong> is the environment where code executes. When you write JavaScript
                for a website, the browser is the runtime — it reads your code and executes it. Node.js does
                the same thing, but on your computer or server instead of in a browser.
            </p>

            <p>Node.js uses Google's <strong>V8 engine</strong> — the same engine that powers Chrome — to
                execute JavaScript at incredible speeds.</p>

            <CodeBlock filename="Hello World in Node.js" language="javascript">
                {`// Save this as hello.js
console.log('Hello from Node.js!');

// Run it with: node hello.js
// Output: Hello from Node.js!`}
            </CodeBlock>

            <h2 id="npm">NPM - Node Package Manager</h2>
            <p>
                <strong>NPM</strong> is the default package manager for Node.js. It allows you to:
            </p>
            <ul>
                <li>Install packages (libraries) created by other developers</li>
                <li>Share your own packages with the world</li>
                <li>Manage project dependencies</li>
                <li>Run scripts for development, testing, and building</li>
            </ul>

            <CodeBlock filename="Common NPM Commands" language="bash">
                {`# Initialize a new project (creates package.json)
npm init

# Install a package and save to dependencies
npm install express

# Install a development-only package
npm install --save-dev nodemon

# Install all dependencies from package.json
npm install

# Run a script defined in package.json
npm run dev

# Update packages to latest versions
npm update`}
            </CodeBlock>

            <p>
                Every Node.js project has a <code>package.json</code> file that lists its dependencies:
            </p>

            <CodeBlock filename="package.json Example" language="json">
                {`{
  "name": "my-mern-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.20"
  }
}`}
            </CodeBlock>

            <h2 id="event-driven">Event-Driven Architecture</h2>
            <p>
                Node.js uses an <strong>event-driven, non-blocking</strong> architecture. This means it can
                handle many operations simultaneously without waiting for each one to complete:
            </p>

            <CodeBlock filename="Non-Blocking Example" language="javascript">
                {`const fs = require('fs');

// Non-blocking - doesn't wait for file to be read
fs.readFile('large-file.txt', (err, data) => {
  console.log('2. File loaded!');
});

console.log('1. Started reading file...');

// Output:
// 1. Started reading file...
// 2. File loaded!

// Notice how "1" prints first even though readFile was called first!
// Node.js continues executing while the file loads in the background.`}
            </CodeBlock>

            <p>This makes Node.js excellent for:</p>
            <ul>
                <li>Web servers handling many simultaneous connections</li>
                <li>Real-time applications (chat, gaming, live updates)</li>
                <li>APIs that make multiple database queries</li>
                <li>Streaming data (video, large files)</li>
            </ul>

            <h2 id="this-site">Node.js in This Website</h2>
            <p>
                Even though this is a React (browser) application, Node.js plays an important role in
                development:
            </p>
            <ul>
                <li><strong>Vite</strong> — The development server that hot-reloads changes runs on Node.js</li>
                <li><strong>NPM</strong> — All our dependencies (React, React Router) are installed via npm</li>
                <li><strong>Build Tools</strong> — When we build for production, Node.js processes our code</li>
            </ul>

            <div className="notice notice-info">
                <strong>💡 Fun Fact:</strong> When you run <code>npm run dev</code> to start this website,
                you're running Node.js! The Vite development server is a Node.js application that serves
                your React app and provides features like hot module replacement.
            </div>
        </article>
    );
}

export default NodeJS;
