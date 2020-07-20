import React from 'react';
import { Link } from 'react-router-dom';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function AddMedBtn() {
// function Addbutton(props) {
  return (
    <Link to="/addmed"><button type="button" className="addMedBtn"> Add Medication </button></Link>
  );
}

export default AddMedBtn;
