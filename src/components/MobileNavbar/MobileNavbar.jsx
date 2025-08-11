// src/components/MobileNavbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './MobileNavbar.css';

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken') || localStorage.getItem('token');
    setIsLoggedIn(Boolean(token));
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    const onClick = (e) => {
      if (open && menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('token');
    // redirect to home or refresh
    window.location.href = '/';
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/blogs', label: 'Blogs' },
    { to: '/shelter', label: 'Shelter' },
    { to: '/resources', label: 'Resources' },
    { to: '/gallery', label: 'Gallery' },
  ];

  return (
    <div className="mobile-navbar">
      <div className="mobile-top">
        <Link to="/" className="mobile-logo">Taara</Link>
        <button
          className="mobile-toggle"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? '✖' : '☰'}
        </button>
      </div>

      {open && (
        <div className="mobile-menu" ref={menuRef}>
          <ul>
            {navLinks.map((n) => (
              <li key={n.to}>
                <Link to={n.to} onClick={() => setOpen(false)}>{n.label}</Link>
              </li>
            ))}

            {!isLoggedIn ? (
              <>
                <li><Link to="/signup" onClick={() => setOpen(false)}>Sign Up</Link></li>
                <li><Link to="/login" onClick={() => setOpen(false)}>Login</Link></li>
              </>
            ) : (
              <>
                <li><Link to="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link></li>
                <li><button className="logout-btn" onClick={() => { handleLogout(); setOpen(false); }}>Logout</button></li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
export default MobileNavbar;
