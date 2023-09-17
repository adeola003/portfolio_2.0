import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons

const Hamburger = ({ isOpen, toggleMenu }) => {
  return (
    <div className="hamburger" onClick={toggleMenu}>
      {isOpen ? <FaTimes /> : <FaBars />}
    </div>
  );
};

export default Hamburger;
