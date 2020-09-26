import React, { Component } from 'react';
import FlatList from './flat_list';

class App extends Component {
  render () {
    return (
      <div className="container">
        <div className="left-scene">
          <FlatList />
        </div>
        <div className="rigth-scene"></div>
      </div>
    );
  }
}

export default App;
