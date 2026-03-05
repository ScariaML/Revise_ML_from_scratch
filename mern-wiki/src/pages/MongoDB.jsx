import CodeBlock from '../components/CodeBlock';

function MongoDB() {
    return (
        <article>
            <h1 className="article-title">MongoDB</h1>

            <div className="infobox">
                <div className="infobox-header">MongoDB</div>
                <div className="infobox-row">
                    <div className="infobox-label">Type</div>
                    <div className="infobox-value">NoSQL Database</div>
                </div>
                <div className="infobox-row">
                    <div className="infobox-label">Data Format</div>
                    <div className="infobox-value">BSON (Binary JSON)</div>
                </div>
                <div className="infobox-row">
                    <div className="infobox-label">Role in MERN</div>
                    <div className="infobox-value">Data Storage</div>
                </div>
                <div className="infobox-row">
                    <div className="infobox-label">Official Site</div>
                    <div className="infobox-value"><a href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer">mongodb.com</a></div>
                </div>
            </div>

            <p>
                <strong>MongoDB</strong> is a <strong>NoSQL database</strong> that stores data in flexible,
                JSON-like documents. Unlike traditional relational databases that use tables and rows,
                MongoDB uses <em>collections</em> and <em>documents</em>, making it highly flexible and
                natural to work with in JavaScript applications.
            </p>

            <div className="toc">
                <div className="toc-title">Contents</div>
                <ol className="toc-list">
                    <li><a href="#what-is-nosql">What is NoSQL?</a></li>
                    <li><a href="#documents">Documents and Collections</a></li>
                    <li><a href="#why-mongodb">Why MongoDB for MERN?</a></li>
                    <li><a href="#example">Example: Storing Articles</a></li>
                </ol>
            </div>

            <h2 id="what-is-nosql">What is NoSQL?</h2>
            <p>
                Traditional databases like MySQL or PostgreSQL are called <strong>SQL databases</strong> or
                <strong>relational databases</strong>. They store data in rigid tables with predefined columns:
            </p>

            <CodeBlock filename="Traditional SQL Table" language="sql">
                {`| id | name    | email           | age |
|----|---------|-----------------|-----|
| 1  | Alice   | alice@email.com | 25  |
| 2  | Bob     | bob@email.com   | 30  |`}
            </CodeBlock>

            <p>
                <strong>NoSQL databases</strong> like MongoDB take a different approach. They're called
                "Not Only SQL" because they don't require fixed schemas. Each document can have different
                fields, which offers more flexibility.
            </p>

            <h2 id="documents">Documents and Collections</h2>
            <p>
                In MongoDB:
            </p>
            <ul>
                <li><strong>Documents</strong> are individual records, stored as JSON-like objects</li>
                <li><strong>Collections</strong> are groups of documents (similar to tables in SQL)</li>
                <li><strong>Databases</strong> contain multiple collections</li>
            </ul>

            <p>Here's what a MongoDB document looks like:</p>

            <CodeBlock filename="Example Document" language="json">
                {`{
  "_id": "507f1f77bcf86cd799439011",
  "name": "Alice",
  "email": "alice@email.com",
  "age": 25,
  "interests": ["coding", "reading", "hiking"],
  "address": {
    "city": "San Francisco",
    "state": "CA"
  }
}`}
            </CodeBlock>

            <p>
                Notice how MongoDB documents can contain:
            </p>
            <ul>
                <li><strong>Arrays</strong> — like the <code>interests</code> field with multiple values</li>
                <li><strong>Nested objects</strong> — like the <code>address</code> field containing city and state</li>
                <li><strong>Automatic IDs</strong> — MongoDB generates unique <code>_id</code> values automatically</li>
            </ul>

            <h2 id="why-mongodb">Why MongoDB for MERN?</h2>
            <p>
                MongoDB is a natural fit for JavaScript applications because:
            </p>
            <ul>
                <li><strong>JSON Everywhere</strong> — MongoDB documents look exactly like JavaScript objects</li>
                <li><strong>Flexible Schema</strong> — Add new fields anytime without migrations</li>
                <li><strong>Scalability</strong> — Designed to handle large amounts of data</li>
                <li><strong>Mongoose ODM</strong> — A popular library that makes MongoDB even easier to use with Node.js</li>
            </ul>

            <div className="notice notice-info">
                <strong>💡 Note:</strong> This wiki website is a frontend-only React application, so it doesn't
                actually use MongoDB. In a full MERN application, your Express backend would connect to MongoDB
                to store and retrieve data like user accounts, articles, or any other application data.
            </div>

            <h2 id="example">Example: Storing Articles</h2>
            <p>
                If this wiki used MongoDB, we might store articles like this:
            </p>

            <CodeBlock filename="Article Document Example" language="javascript">
                {`// Example article document in MongoDB
{
  "_id": "article_12345",
  "title": "MongoDB",
  "slug": "mongodb",
  "content": "MongoDB is a NoSQL database...",
  "author": {
    "name": "Wiki Bot",
    "id": "user_001"
  },
  "tags": ["database", "nosql", "mern"],
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-16T14:20:00Z",
  "viewCount": 1250
}`}
            </CodeBlock>

            <p>
                And we'd query it from our Express backend using <strong>Mongoose</strong>:
            </p>

            <CodeBlock filename="Mongoose Query Example" language="javascript">
                {`// Connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mernwiki');

// Define a schema
const articleSchema = new mongoose.Schema({
  title: String,
  slug: String,
  content: String,
  author: {
    name: String,
    id: String
  },
  tags: [String],
  createdAt: { type: Date, default: Date.now },
  viewCount: { type: Number, default: 0 }
});

// Create a model
const Article = mongoose.model('Article', articleSchema);

// Query: Find article by slug
const article = await Article.findOne({ slug: 'mongodb' });`}
            </CodeBlock>
        </article>
    );
}

export default MongoDB;
