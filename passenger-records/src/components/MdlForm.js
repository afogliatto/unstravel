import React, { useState } from "react";

const MdlForm = (addItem) => {
  const [psgr, setPsgr] = useState({
    firstname: "",
    lastname: "",
    email: "",
    passport: "",
    frqtflyer: "",
  });

  const handleChange = (e) => {
    setPsgr({
      ...psgr,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(psgr);
  };

  return (
    <div>
      <h3>Data Entry</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name </label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          value={psgr.firstname}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="lastname">Last Name </label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          value={psgr.lastname}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email </label>
        <input
          type="email"
          name="email"
          id="email"
          value={psgr.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="passport">Passport Number </label>
        <input
          type="text"
          name="passport"
          id="passport"
          value={psgr.passport}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="frqtflyer">Frequent Flyer Number </label>
        <input
          type="text"
          name="frqtflyer"
          id="frqtflyer"
          value={psgr.frqtflyer}
          onChange={handleChange}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default MdlForm;
