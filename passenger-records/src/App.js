import React, { Component } from "react";
import "./App.css";
import Modal from "./components/Modal";
import PsgrList from './components/PsgrList'

class App extends Component {
  state = {
    showModal: false,
    arrPsgr: []
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
  
  addPsgr = (psgr) => {
    this.setState(
      {
        arrPsgr:
          [...this.state.arrPsgr,
            {
              firstname: psgr.firstname,
              lastname: psgr.lastname,
              email: psgr.email,
              passport: psgr.passport,
              frqtflyer: psgr.frqtflyer
            }
          ] 
      }
    )
  };

  render() {
    return (
      <div className="App">
        <PsgrList arrPsgr={this.state.arrPsgr}></PsgrList>
        {this.state.showModal ? (
          <Modal title="Your Bookings are: " close={this.closeHandler} addPsgr={this.addPsgr}></Modal>
        ) : null}
        <button onClick={this.openHandler}>Show</button>
      </div>
    );
  }
}
export default App;
