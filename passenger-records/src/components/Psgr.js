import React from "react";

const Psgr = ({ firstname, lastname, email, passport, frqtflyer }) => {
  return (
    <div>
      <p>firstname = {firstname}</p>
      <p>lastname = {lastname}</p>
      <p>email =  {email}</p>
      <p>passport = {passport}</p>
      <p>frqtflyer = {frqtflyer}</p>
    </div>
  )
};

export default Psgr;
