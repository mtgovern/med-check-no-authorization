import React from 'react';
import { Link } from 'react-router-dom';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function AddApptBtn() {
// function Addbutton(props) {
  return (
    <Link to="/addappt"><button type="button" className="addApptBtn"> Add Appt </button></Link>
  );
}

export default AddApptBtn;