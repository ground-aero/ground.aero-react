import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/" className="link">HOME</Link></li>
          <li><Link to="/news" className="link">NEWS</Link></li>
          <li><Link to="/events" className="link">EVENTS</Link></li>
          <li><Link to="/library" className="link">LIBRARY</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
