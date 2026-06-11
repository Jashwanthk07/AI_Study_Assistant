import { Link, useLocation } from 'react-router-dom';
import '../styles/global.css';

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', icon: '📊', label: 'Dashboard' },
    { path: '/upload', icon: '📤', label: 'Upload PDF' },
    { path: '/documents', icon: '📚', label: 'Documents' },
    { path: '/settings', icon: '⚙️', label: 'Settings' }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-container">
        <nav className="sidebar-nav">
          <ul className="sidebar-menu">
            {menuItems.map((item) => (
              <li key={item.path} className="sidebar-item">
                <Link
                  to={item.path}
                  className={`sidebar-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  <span className="sidebar-icon">{item.icon}</span>
                  <span className="sidebar-label">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="sidebar-footer">
          <div className="user-info">
            <div className="user-avatar">👤</div>
            <div className="user-details">
              <p className="user-name">John Doe</p>
              <p className="user-email">john@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
