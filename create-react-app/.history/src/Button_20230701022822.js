import PropTypes from "prop-types";

function Button({ text }) {
  return <button style={
    backgroundColor: "tomate"
  }>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
