import React from "react";
import "./Modal.css";
import MdlForm from "./MdlForm";

const Modal = (props) => {
  return (
    <div className="mdl-wrapper">
      <div className="modal">
        <div className="mdl-header">
          <h2 className="mdl-title">{props.title}</h2>
          <button className="mdl-x-btn" onClick={props.close}>
            X
          </button>
        </div>
        <div>
          <MdlForm addPsgr={props.addPsgr}/>
        </div>
        <div className="mdl-bottom">
          <button className="mdl-close-btn" onClick={props.close}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
