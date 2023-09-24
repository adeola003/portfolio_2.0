import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import PropTypes from 'prop-types';
import "../styles/arrows.css";

const CustomPrevArrow = (props) => (
  <div className="custom-arrow custom-prev-arrow" onClick={props.onClick}>
    <FaArrowLeft />
  </div>
);

const CustomNextArrow = (props) => (
  <div className="custom-arrow custom-next-arrow" onClick={props.onClick}>
    <FaArrowRight />
  </div>
);

CustomPrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

CustomNextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};


export { CustomPrevArrow, CustomNextArrow };
