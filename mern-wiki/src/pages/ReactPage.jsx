import { Link } from 'react-router-dom';
import CodeBlock from '../components/CodeBlock';

function ReactPage() {
    return (
        <article>
            <h1 className="article-title">React</h1>

            <div className="infobox">
                <div className="infobox-header">React</div>
                <div className="infobox-row">
                    <div className="infobox-label">Type</div>
                    <div className="infobox-value">UI Library</div>
                </div>
                <div className="infobox-row">
                    <div className="infobox-label">Created By</div>
                    <div className="infobox-value">Meta (Facebook)</div>
                </div>
                <div className="infobox-row">
                    <div className="infobox-label">Role in MERN</div>
                    <div className="infobox-value">Frontend / UI</div>
                </div>
                <div className="infobox-row">
                    <div className="infobox-label">This Site Uses</div>
                    <div className="infobox-value">React + Vite</div>
                </div>
            </div>

            <p>
                <strong>React</strong> is a JavaScript library for building user interfaces. It's the "R" in
                MERN and handles everything users see and interact with. <strong>This very website is built
                    with React</strong>, so everything you're looking at right now is rendered by React components!
            </p>

            <div className="toc">
                <div className="toc-title">Contents</div>
                <ol className="toc-list">
                    <li><a href="#core-concepts">Core Concepts</a></li>
                    <li><a href="#jsx">JSX - HTML in JavaScript</a></li>
                    <li><a href="#components">Components</a></li>
                    <li><a href="#props-state">Props and State</a></li>
                    <li><a href="#this-site">React in This Website</a></li>
                </ol>
            </div>

            <h2 id="core-concepts">Core Concepts</h2>
            <p>React is built around a few key ideas:</p>
            <ul>
                <li><strong>Components</strong> — Build UIs from small, reusable pieces</li>
                <li><strong>Declarative</strong> — Describe what you want, not how to do it</li>
                <li><strong>Virtual DOM</strong> — React efficiently updates only what changes</li>
                <li><strong>One-way Data Flow</strong> — Data flows from parent to child components</li>
            </ul>

            <h2 id="jsx">JSX - HTML in JavaScript</h2>
            <p>
                React uses a syntax called <strong>JSX</strong> that lets you write HTML-like code inside
                JavaScript. It may look strange at first, but it's very powerful:
            </p>

            <CodeBlock filename="JSX Example" language="jsx">
                {`// This is JSX - HTML-like syntax in JavaScript
function Welcome() {
  const name = "Developer";
  
  return (
    <div className="welcome">
      <h1>Hello, {name}!</h1>
      <p>Welcome to React.</p>
    </div>
  );
}`}
            </CodeBlock>

            <p>
                Notice that:
            </p>
            <ul>
                <li>We use <code>className</code> instead of <code>class</code> (because <code>class</code> is reserved in JavaScript)</li>
                <li>JavaScript expressions go inside <code>{'{}'}</code> curly braces</li>
                <li>The function returns what looks like HTML, but it's actually JSX</li>
            </ul>

            <h2 id="components">Components</h2>
            <p>
                Components are the building blocks of React applications. Each component is a piece of UI
                that can be reused throughout your app:
            </p>

            <CodeBlock filename="Component Example" language="jsx">
                {`// A simple button component
function Button({ label, onClick }) {
  return (
    <button onClick={onClick} className="btn">
      {label}
    </button>
  );
}

// Using the button component multiple times
function App() {
  return (
    <div>
      <Button label="Click Me" onClick={() => alert('Clicked!')} />
      <Button label="Submit" onClick={() => console.log('Submit')} />
      <Button label="Cancel" onClick={() => console.log('Cancel')} />
    </div>
  );
}`}
            </CodeBlock>

            <h2 id="props-state">Props and State</h2>
            <p>
                React components have two important concepts for managing data:
            </p>

            <h3>Props (Properties)</h3>
            <p>
                <strong>Props</strong> are inputs passed from a parent component to a child component.
                They are read-only — the child cannot modify them:
            </p>

            <CodeBlock filename="Props Example" language="jsx">
                {`// Parent passes data via props
function Parent() {
  return <Child name="Alice" age={25} />;
}

// Child receives props
function Child({ name, age }) {
  return <p>{name} is {age} years old.</p>;
}`}
            </CodeBlock>

            <h3>State</h3>
            <p>
                <strong>State</strong> is data that changes over time. When state changes, React
                automatically re-renders the component:
            </p>

            <CodeBlock filename="State Example" language="jsx">
                {`import { useState } from 'react';

function Counter() {
  // useState returns [currentValue, updateFunction]
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}
            </CodeBlock>

            <h2 id="this-site">React in This Website</h2>
            <p>
                This wiki is built entirely with React! Here's what powers the page you're reading:
            </p>
            <ul>
                <li>The <Link to="/components">Header, Sidebar, and Layout</Link> are all React components</li>
                <li><Link to="/routing">React Router</Link> handles navigation between pages</li>
                <li>Each page (like this one) is a React component that renders JSX</li>
                <li>The <code>CodeBlock</code> component displays formatted code examples</li>
            </ul>

            <p>
                Check out the <Link to="/components">Components page</Link> to see the actual code that
                creates the UI you're looking at right now!
            </p>

            <div className="notice notice-tip">
                <strong>✨ Try It:</strong> Open your browser's Developer Tools (F12) and inspect this page.
                You'll see the HTML that React generated from its components!
            </div>
        </article>
    );
}

export default ReactPage;
