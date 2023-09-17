import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons
import PropTypes from 'prop-types';

const Hamburger = ({ isOpen, toggleMenu }) => {
  return (
    <div className="hamburger" onClick={toggleMenu}>
      {isOpen ? <FaTimes /> : <FaBars />}
    </div>
  );
};

Hamburger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default Hamburger;

