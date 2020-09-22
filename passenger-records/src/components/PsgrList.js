import React from "react";
import Psgr from "./Psgr";

const PsgrList = ({ arrPsgrs }) => {
  return (
    <div>
      {arrPsgr.map((psgr, index) => {
        return (
          <Psgr
            key={index}
            firstname={psgr.firstname}
            lastname={psgr.lastname}
            email={psgr.email}
            passport={psgr.passport}
            frqtflyer={psgr.frqtflyer}
          ></Psgr>
        );
      })}
    </div>
  );
};

export default PsgrList;
