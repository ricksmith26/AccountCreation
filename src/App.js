import React, { Component } from 'react';
import CreatePersonal from './CreatePersonal';
import CreateHome from './CreateHome';

class App extends Component {
  render() {
    return (
      <div>
        <CreateHome />
        <CreatePersonal />
      </div>
    );
  }
}

export default App;
