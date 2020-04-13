import React from 'react';
import './App.css';
import Phaser from 'phaser';

const game = new Phaser.Game({});

function App() {
  return (
    <div className="game" id="game"></div>
  );
}

export default App;
