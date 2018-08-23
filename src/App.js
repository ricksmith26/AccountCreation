import React, { Component } from 'react';
import CreatePersonal from './CreatePersonal';
import CreateHome from './CreateHome';

class App extends Component {
  render() {
    return (
      <div className={'container'}>
        <header>
          <CreateHome />
        </header>
        <div className="personal">
          <CreatePersonal />
        </div>
      </div>
    );
  }
}

export default App;
