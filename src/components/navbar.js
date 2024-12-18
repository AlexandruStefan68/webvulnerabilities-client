import React from 'react';
import { Link } from 'react-router-dom';
import '../components_css/navbar.css';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Securitate Web
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/learn">
                Mediu de învățare
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/analyze">
                Analizare fișiere
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/logs">
                Loguri
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rules">
                Reguli de securitate
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
