import React from 'react';
import { ethers } from "ethers";
import './App.css'

function App () {

  const wave = () => {

  }
 
  return (
    <div className='mainContainer'>

      <div className='dataContainer'>
        <div className='header'>
          👋 Hey there!
        </div>

        <div className='bio'>
          I am Aniekan and I have worked on Front end applications and they are so lit. Connect your ethereum wallet to check them out, and give me a thumbs up. 
          
          No worries its safe. Am only testing this out. 
        </div>

        <button className='waveButton' onClick={wave}>
          Give me a thumbs up
        </button>
      </div>
    </div>
  );
}

export default App;
