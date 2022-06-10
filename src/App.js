import React from 'react';
import { ethers } from "ethers";
import './App.css'
import { useEffect } from 'react';
import { useState } from 'react';

function App () {

  /*
  * Just a state variable we use to store our user's public wallet.
  */
  const [currentAccount, setCurrentAccount] = useState("");

  // const wave = () => {

  // }

  const checkIfWalletIsConnected = async () => {
    /*
    * First make sure we have access to window.ethereum
    */
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
      } else {
        console.log("We have the ethereum object", ethereum);
      }
    

      /*
      * Check if we're authorized to access the user's wallet
      */
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !==0) {
        const account = accounts[0];
        console.log("Found an authorised account:", account);
        setCurrentAccount(account)
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error);
  }
}

  /**
  * Implement your connectWallet method here
  */
   const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }
  
    /*
    * This runs our function when the page loads.
    */
    useEffect(() => {
      checkIfWalletIsConnected();
    }, [])
 
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

        <button className='waveButton' onClick={null}>
          Give me a thumbs up
        </button>

        {/*
        * If there is no currentAccount render this button
        */}
        {!currentAccount && (
          <button className="waveButton" onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
