import React, { Component } from 'react';
import ALSET_Game from './modules/ALSET-game/index.jsx';

class App extends Component {
  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <ALSET_Game key={0} gameId={0} />
      </div>
    );
  }
}

export default App;
