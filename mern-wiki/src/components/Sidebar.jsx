import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-section">
                <h3 className="sidebar-title">Navigation</h3>
                <ul className="sidebar-nav">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
                    <li><NavLink to="/overview" className={({ isActive }) => isActive ? 'active' : ''}>MERN Overview</NavLink></li>
                </ul>
            </div>

            <div className="sidebar-section">
                <h3 className="sidebar-title">The Stack</h3>
                <ul className="sidebar-nav">
                    <li><NavLink to="/mongodb" className={({ isActive }) => isActive ? 'active' : ''}>MongoDB</NavLink></li>
                    <li><NavLink to="/express" className={({ isActive }) => isActive ? 'active' : ''}>Express.js</NavLink></li>
                    <li><NavLink to="/react" className={({ isActive }) => isActive ? 'active' : ''}>React</NavLink></li>
                    <li><NavLink to="/nodejs" className={({ isActive }) => isActive ? 'active' : ''}>Node.js</NavLink></li>
                </ul>
            </div>

            <div className="sidebar-section">
                <h3 className="sidebar-title">This Website</h3>
                <ul className="sidebar-nav">
                    <li><NavLink to="/project-structure" className={({ isActive }) => isActive ? 'active' : ''}>Project Structure</NavLink></li>
                    <li><NavLink to="/components" className={({ isActive }) => isActive ? 'active' : ''}>Components</NavLink></li>
                    <li><NavLink to="/styling" className={({ isActive }) => isActive ? 'active' : ''}>Styling (CSS)</NavLink></li>
                    <li><NavLink to="/routing" className={({ isActive }) => isActive ? 'active' : ''}>Routing</NavLink></li>
                </ul>
            </div>

            <div className="sidebar-section">
                <h3 className="sidebar-title">Programming Dictionary</h3>
                <ul className="sidebar-nav">
                    <li><NavLink to="/dictionary/jsx" className={({ isActive }) => isActive ? 'active' : ''}>JSX / React</NavLink></li>
                    <li><NavLink to="/dictionary/css" className={({ isActive }) => isActive ? 'active' : ''}>CSS</NavLink></li>
                    <li><NavLink to="/dictionary/html" className={({ isActive }) => isActive ? 'active' : ''}>HTML</NavLink></li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;
