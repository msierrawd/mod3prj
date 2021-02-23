import React, { useEffect, useState } from 'react';
import Blocks from './components/Blocks'
import TopNavBar from './components/TopNavBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopNavBar/>
        <Blocks/>
      </header>
    </div>
  );
}

export default App;
