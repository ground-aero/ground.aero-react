import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer>
      <nav>
        <ul>
          <li><Link to="/" className="active-link">HOME</Link></li>
          <li><Link to="/news" className="link">NEWS</Link></li>
          <li><Link to="/events" className="link">EVENTS</Link></li>
          <li><Link to="/library" className="link">LIBRARY</Link></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
