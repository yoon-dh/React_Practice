import PropTypes from "prop-types";

function Button({ text }) {
  return <button style={
    backgroundColor: "tomato"
  }>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
