import React from "react";
import PropTypes from "prop-types"

const Button = ({ children, version, type, isDisabled }) => {
  return (
    <div type={type} disabled={isDisabled} className={`btn btn-${version}`} >
      {children}
    </div>
  );
};
//  the version prop is used to deternine what css values you want for the button
Button.defaultProps ={
  version:"primary",
  type:"button",
  isDisabled:"false"
}

Button.propTypes={
  children: PropTypes.node.isRequired,
  version:PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool
}

export default Button;
