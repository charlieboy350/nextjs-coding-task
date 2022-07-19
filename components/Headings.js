import React from "react";
import PropTypes from "prop-types";
import Cn from "classnames";

export default function Headings({ type, className = '', children, ...props }) {
  const classNames = Cn("headings", className);
  
  if ( type === 'h1' ) {
    return (
      <h1 className={classNames}>
        {children}
      </h1>
    );
  }

  if ( type === 'h2' ) {
    return (
      <h2 className={classNames}>
        {children}
      </h2>
    );
  }

  if ( type === 'h3' ) {
    return (
      <h3 className={classNames}>
        {children}
      </h3>
    );
  }


  if ( type === 'h4' ) {
    return (
      <h4 className={classNames}>
        {children}
      </h4>
    );
  }


  if ( type === 'h5' ) {
    return (
      <h5 className={classNames}>
        {children}
      </h5>
    );
  }

  if ( type === 'h6' ) {
    return (
      <h6 className={classNames}>
        {children}
      </h6>
    );
  }

  return <></>
  
}

Headings.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};
