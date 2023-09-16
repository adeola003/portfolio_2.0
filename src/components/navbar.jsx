import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaTrash } from 'react-icons/fa';
import "../styles/navbar.css"

const Navbar = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navbarClasses = classNames('navbar', {
    'navbar-hidden': isLargeScreen,
  });

  const sidebarClasses = classNames('sidebar', {
    'sidebar-hidden': !isLargeScreen,
  });

  const iconStyle = {
    marginRight: '10px',
  };

  return (
    <div>
      <div className={sidebarClasses}>
        <div className='side-logo logo'>Adeola</div>
        <ul className='side-links'>
            <li>
            </li>
            <li>
            <NavLink exact to="/" activeClassName='active-link'>
              <FaHome style={iconStyle} /> {/* Icon */}
              <span className="link-text">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/about" activeClassName='active-link'>
              <FaUser style={iconStyle} /> {/* Icon */}
              <span className="link-text">About</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/portfolio" activeClassName='active-link'>
              <FaBriefcase style={iconStyle} /> {/* Icon */}
              <span className="link-text">Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName='active-link'>
              <FaEnvelope style={iconStyle} /> {/* Icon */}
              <span className="link-text">Contact</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/trash" activeClassName='active-link'>
              <FaTrash style={iconStyle} /> {/* Icon */}
              <span className="link-text">Trash</span>
            </NavLink>
          </li>
        </ul></div>
      <nav className={navbarClasses}>
        <div className='nav-logo logo'>Adeola</div>
        <ul className='nav-links'>
            <li>
            </li>
            <li>
                <NavLink exact to="/">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink exact to="/about">
                    About
                </NavLink>
            </li>
            <li>
                <NavLink exact to="/portfolio">
                    Portfolio
                </NavLink>
            </li>
            <li>
                <NavLink exact to="/contact">
                    Contact
                </NavLink>
            </li>
            <li>
                <NavLink exact to="/trash">
                    Trash
                </NavLink>
            </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
