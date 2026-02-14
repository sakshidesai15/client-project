import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../utils/constants';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setMobileSubmenu(null);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo">
          <img src="/transperent aethon.png" alt="Aethon Plast" />
        </Link>
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.name} className={link.dropdown ? 'has-dropdown' : ''}>
              {link.dropdown ? (
                <>
                  <div className="link-wrapper">
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        isActive || window.location.pathname.startsWith(link.path) ? 'active' : ''
                      }
                      onClick={() => setIsOpen(false)}
                      end={link.path === '/'}
                    >
                      {link.name.toUpperCase()}
                    </NavLink>
                    <span
                      className="dropdown-toggle"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setMobileSubmenu(mobileSubmenu === link.name ? null : link.name);
                      }}
                    >
                      {mobileSubmenu === link.name ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </div>
                  <ul className={`dropdown-menu ${mobileSubmenu === link.name ? 'open' : ''}`}>
                    {link.dropdown.map((subLink) => (
                      <li key={subLink.name}>
                        <Link
                          to={subLink.path}
                          onClick={() => {
                            setIsOpen(false);
                            setMobileSubmenu(null);
                          }}
                        >
                          {subLink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <NavLink
                  to={link.path}
                  className={link.name === 'Contact Us' ? 'nav-btn-highlight' : ''}
                  onClick={() => setIsOpen(false)}
                  end={link.path === '/'}
                >
                  {link.name.toUpperCase()}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
