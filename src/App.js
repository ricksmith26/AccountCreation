import React, { Component } from 'react';
import fs from 'fs';

import './App.css';

class App extends Component {
  state = {
    firstname: '',
    lastname: '',
    screenname: '',
    workStreetNo: '',
    workStreet: '',
    workCity: '',
    workPostcode: '',
    // authentication: [],
    // calendarLink: '',
    newsPref: []
    // twitterPref: []
  };
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <input type="text" onChange={this.handleFirstnameChange} />
        <br />
        <br />
        <input type="text" onChange={this.handleLastnameChange} />
        <br />
        <br />
        <input type="text" onChange={this.handleScreennameChange} />
        <br />
        <br />
        <input type="text" onChange={this.handleWorkStreetNoChange} />
        <br />
        <br />
        <input type="text" onChange={this.handleWorkStreetChange} />
        <br />
        <br />
        <input type="text" onChange={this.handleWorkCityChange} />
        <br />
        <br />
        <input type="text" onChange={this.handleWorkPostcodeChange} />
        <br />
        <br />
        <input type="text" onKeyUp={this.handleSubmitNews} />
        <Button />
      </div>
    );
  }
  handleFirstnameChange = event => {
    this.setState({ firstname: event.target.value });
  };
  handleLastnameChange = event => {
    this.setState({ lastname: event.target.value });
  };
  handleScreennameChange = event => {
    this.setState({ screenname: event.target.value });
  };
  handleWorkStreetNoChange = event => {
    this.setState({ workStreetNo: event.target.value });
  };
  handleWorkStreetChange = event => {
    this.setState({ workStreet: event.target.value });
  };
  handleWorkCityChange = event => {
    this.setState({ workCity: event.target.value });
  };
  handleWorkPostcodeChange = event => {
    this.setState({ workPostcode: event.target.value });
  };
  handleSubmitNews = event => {
    console.log(event);
    if (event.keyCode === 13) {
      console.log('hitENter<<<<<<<<<<<<<<<<<<<<,,,');
      this.setState({ newsPref: [...this.state.newsPref, event.target.value] });
    }
  };
  handleButton = event => {
    // fs.writeFile(`./UsersFiles/userdata.json`, JSON.stringify(this.state), (error)=> {error ? console.log(`write error: ${error.message}`) ? console.log(`Sucessfull write to ${this.state.firstname}`)})
    fs.writeFile('./UsersFiles/userdata.json');
  };
}

export default App;
