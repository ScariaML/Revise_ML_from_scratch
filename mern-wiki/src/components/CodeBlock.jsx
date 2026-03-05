function CodeBlock({ filename, language, children }) {
    return (
        <div className="code-block">
            {filename && (
                <div className="code-header">
                    <span className="code-filename">{filename}</span>
                    <span className="code-language">{language}</span>
                </div>
            )}
            <pre><code>{children}</code></pre>
        </div>
    );
}

export default CodeBlock;
