import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

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
    const responseGoogle = response => {
      console.log(response);
    };
    console.log(this.state);
    return (
      <div className="App">
        <h1>Create your account</h1>
        <br />

        <p>Firstname: </p>
        <input type="text" onChange={this.handleFirstnameChange} />

        <br />
        <p>Lastname: </p>
        <input type="text" onChange={this.handleLastnameChange} />

        <br />
        <p>Screenname: </p>
        <input type="text" onChange={this.handleScreennameChange} />

        <br />
        <h3>Work/School address </h3>
        <p>Street No: </p>
        <input type="text" onChange={this.handleWorkStreetNoChange} />

        <br />
        <p>Street: </p>
        <input type="text" onChange={this.handleWorkStreetChange} />
        <br />
        <br />
        <p>City: : </p>
        <input type="text" onChange={this.handleWorkCityChange} />

        <br />
        <p>Postcode: </p>
        <input type="text" onChange={this.handleWorkPostcodeChange} />

        <br />

        <p>Add subjects to your news feed: </p>
        {this.state.newsPref.forEach(function(n) {
          return <p>{n}</p>;
        })}
        <input type="text" onKeyUp={this.handleSubmitNews} />

        <br />
        <br />
        <button onClick={this.handleButtonSubmit}>Submit</button>
        <button onClick={this.handleButtonPress}>press</button>
        <button onCLick={() => {}} />
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
    if (event.keyCode === 13) {
      console.log('hitENter<<<<<<<<<<<<<<<<<<<<,,,');
      this.setState({ newsPref: [...this.state.newsPref, event.target.value] });
    }
  };
  handleButtonSubmit = event => {
    console.log('hit function');
    localStorage.setItem(this.state.firstname, JSON.stringify(this.state));
  };

  handleButtonPress = event => {
    console.log('hit button func');

    console.log(JSON.parse(localStorage.Rick));
  };
}

export default App;
