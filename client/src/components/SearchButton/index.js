import React from 'react';
import { Link } from 'react-router-dom';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SearchButton() {
// function Addbutton(props) {
  return (
    <Link to="/searchmed"><button type="button" className="searchBtn"> Search </button></Link>
  );
}

export default SearchButton;
