import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

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
      <div className={sidebarClasses}>sidebar</div>
      <nav className={navbarClasses}>navbar</nav>
    </div>
  );
};

export default Navbar;
