import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <Link to="/" className="logo">
                    <div className="logo-icon">M</div>
                    <div>
                        <div className="logo-text">MERN Wiki</div>
                        <div className="logo-tagline">The Self-Documenting Encyclopedia</div>
                    </div>
                </Link>
                <div className="search-box">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search MERN Wiki..."
                    />
                    <button className="search-btn">Search</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
