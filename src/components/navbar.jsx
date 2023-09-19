import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaTrash } from 'react-icons/fa';
import Hamburger from './hamburger';
import "../styles/navbar.css"

const Navbar = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);
  const [isPhoneScreen, setIsPhoneScreen] = useState(window.innerWidth <= 368)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    const handlePhoneSize = () => {
        setIsPhoneScreen(window.innerWidth <= 368)
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('resize', handlePhoneSize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', handlePhoneSize);
    };
  }, []);

  const navbarClasses = classNames('navbar', {
    'navbar-hidden': isLargeScreen,
  });

  const sidebarClasses = classNames('sidebar', {
    'sidebar-hidden': !isLargeScreen,
  });

  const hamburgerClasses = classNames('hamburger', {
    'hambuger-hidden' : !isPhoneScreen
  });

  const iconStyle = {
    marginRight: '10px',
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={sidebarClasses}>
        
        <ul className='side-links'>
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
        <div className='nav-logo my-logo'>Adeola</div>
        <>
        {(window.innerWidth <= 368) ? (

<div className='mobile-menu-container'>

<Hamburger className={hamburgerClasses} isOpen={isMenuOpen} toggleMenu={toggleMenu} />
{isMenuOpen && (
  <ul className='nav-links mobile-menu'>
     <li>
    <NavLink exact to="/" onClick={toggleMenu}>
        Home
    </NavLink>
</li>
<li>
    <NavLink exact to="/about" onClick={toggleMenu}>
        About
    </NavLink>
</li>
<li>
    <NavLink exact to="/portfolio" onClick={toggleMenu}>
        Portfolio
    </NavLink>
</li>
<li>
    <NavLink exact to="/contact" onClick={toggleMenu}>
        Contact
    </NavLink>
</li>
<li>
    <NavLink exact to="/trash" onClick={toggleMenu}>
        Trash
    </NavLink>
</li>
  </ul>
)}
</div>
) : (
<>
<ul className='nav-links'>
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
</>
)}

 </>
      </nav>
    </>
  );
};

export default Navbar;
