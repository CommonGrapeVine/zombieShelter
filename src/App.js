import React from 'react';
import './App.css';
import Phaser from 'phaser';
import config from "./config"

const game = new Phaser.Game(config);

function App() {
  return (
    <div className="game" id="game"></div>
  );
}

export default App;
