import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className={`${styles.link} nav-link`}>
                TODO List
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/home" className={`${styles.link} nav-link`}>
                Home
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
