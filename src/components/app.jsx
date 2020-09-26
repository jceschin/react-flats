import React, { Component } from 'react';
import FlatList from './flat_list';
import flats from './flats';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: flats
    };
  }

  render () {
    return (
      <div className="container">
        <div className="left-scene">
          <FlatList flats={this.state.flats} />
        </div>
        <div className="rigth-scene"></div>
      </div>
    );
  }
}

export default App;
