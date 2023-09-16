import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
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

  return (
    <div>
      <div className={sidebarClasses}>
        <div className='side-logo logo'>Adeola</div>
        <ul className='side-links'>
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
