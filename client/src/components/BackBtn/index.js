import React from 'react';
import { Link } from 'react-router-dom';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function BackBtn() {
// function Addbutton(props) {
  return (
    <Link to="/medications"><button type="button" className="return"> Return to Medications </button></Link>
  );
}

export default BackBtn;
