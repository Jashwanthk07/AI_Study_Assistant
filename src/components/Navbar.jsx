import { Link, useLocation } from 'react-router-dom';
import '../styles/global.css';

function Navbar() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  if (isAuthPage) return null;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/dashboard" className="navbar-logo">
          <span className="logo-icon">🤖</span>
          <span className="logo-text">AI Study Assistant</span>
        </Link>
        
        <div className="navbar-menu">
          <Link to="/dashboard" className="navbar-link">
            Dashboard
          </Link>
          <Link to="/upload" className="navbar-link">
            Upload
          </Link>
        </div>
        
        <div className="navbar-actions">
          <button className="navbar-button logout">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
