import React from 'react';
import { Link } from 'react-router-dom';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function HomeButton() {
// function Addbutton(props) {
  return (
    <Link to="/home"><button type="button" className="homeBtn"> Home </button></Link>
  );
}

export default HomeButton;
