import React, { Component, useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

class App extends Component {
  state = {
    showModal: false,
  };

  closeHandler = () => {
    this.setState({
      showModal: false,
    });
  };

  openHandler = () => {
    this.setState({
      showModal: true,
    });
  };
  const [arrPsgr, setArrPsgr] = useState([]);

  render() {

    const addPsgr = (psgr) => {
      setArrPsgr([
        ...arrPsgr,
        {
          firstname: psgr.firstname,
          lastname: psgr.lastname,
          email: psgr.email,
          passport: psgr.passport,
          frqtflyer: psgr.frqtflyer,
        },
      ]);
    };
    return (
      <div className="App" addPsgr={addPsgr} arrPsgr={arrPsgr}>
        {this.state.showModal ? (
          <Modal title="Your Bookings are: " close={this.closeHandler}></Modal>
        ) : null}
        <button onClick={this.openHandler}>Show</button>
      </div>
    );
  }
}
export default App;
