import React from 'react';
import { Link } from 'react-router-dom';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function RtnDocBtn() {
// function Addbutton(props) {
  return (
    <Link to="/doctors"><button type="button" className="docHome"> Return to Doctors </button></Link>
  );
}

export default RtnDocBtn;
