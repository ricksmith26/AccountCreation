import React, { Component } from 'react';

export default class CreateHome extends Component {
  state = {
    houseNo: '',
    street: '',
    city: '',
    postCode: '',
    created: false
  };
  render() {
    if (!this.state.created) {
      return (
        <div>
          <input type="text" onChange={this.handleNoChange} />
          <br />
          <br />
          <input type="text" onChange={this.handleStreetChange} />
          <br />
          <br />
          <input type="text" onChange={this.handleCityChange} />
          <br />
          <br />
          <input type="text" onChange={this.handlePostCodeChange} />
          <br />
          <br />
          <button onClick={this.handleButtonPress}>press</button>
        </div>
      );
    } else {
      return (
        <div>
          <h3>
            {this.state.houseNo} {this.state.street}
          </h3>

          <h3>{this.state.city} </h3>
          <h3>{this.state.postCode} </h3>
        </div>
      );
    }
  }
  handleStreetChange = event => {
    this.setState({ street: event.target.value });
  };
  handleNoChange = event => {
    this.setState({ houseNo: event.target.value });
  };
  handleCityChange = event => {
    this.setState({ city: event.target.value });
  };
  handlePostCodeChange = event => {
    this.setState({ postCode: event.target.value });
  };
  handleButtonPress = event => {
    localStorage.setItem('home', JSON.stringify(this.state));
    this.setState({ created: true });
  };
}
