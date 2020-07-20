import React from 'react';
import { Link } from 'react-router-dom';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function AddDocBtn() {
// function Addbutton(props) {
  return (
    <Link to="/adddoc"><button type="button" className="addDocBtn"> Add Doctor </button></Link>
  );
}

export default AddDocBtn;
