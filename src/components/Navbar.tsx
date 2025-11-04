'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav">
      <a href="#" className="logoLink">
        <span className="logo">SS</span>
      </a>
      
      <button className="menuButton" onClick={toggleMenu}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isMenuOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </>
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </>
          )}
        </svg>
      </button>

      <div className={`links ${isMenuOpen ? 'open' : ''}`}>
        <a href="#pitch" className="link" onClick={() => setIsMenuOpen(false)}>
          Pitch
        </a>
        <a href="#team" className="link" onClick={() => setIsMenuOpen(false)}>
          Team
        </a>
        <a href="#apk" className="link" onClick={() => setIsMenuOpen(false)}>
          APK
        </a>
        <a href="#diagrams" className="link" onClick={() => setIsMenuOpen(false)}>
          Diagrams
        </a>
        <a href="#video" className="link" onClick={() => setIsMenuOpen(false)}>
          Video
        </a>
        <a href="#project" className="link contact" onClick={() => setIsMenuOpen(false)}>
          Project
        </a>
      </div>
    </nav>
  );
}
