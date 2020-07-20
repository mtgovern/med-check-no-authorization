import React from 'react';
import { Link } from 'react-router-dom';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function RtnApptBtn() {
  return (
    <Link to="/appointments"><button type="button" className="apptHome"> Return to Appointments </button></Link>
  );
}

export default RtnApptBtn;