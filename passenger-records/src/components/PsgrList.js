import React from "react";
import Psgr from "./Psgr";

const PsgrList = ({ arrPsgr }) => {
  return (
    <div>
      {arrPsgr.map((psgr, index) => {
        return (
          <div>
            <Psgr
              key={index}
              firstname={psgr.firstname}
              lastname={psgr.lastname}
              email={psgr.email}
              passport={psgr.passport}
              frqtflyer={psgr.frqtflyer}
            ></Psgr>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
};

export default PsgrList;
