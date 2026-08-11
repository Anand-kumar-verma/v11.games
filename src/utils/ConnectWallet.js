import React, { useState } from 'react';
import { ethers } from 'ethers'; // Import ethers here

const ConnectWallet = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request access to the wallet
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        // Get the signer (user's wallet)
        const signer = provider.getSigner();
        const address = await signer.getAddress();

        // Set wallet address
        setWalletAddress(address);
      } catch (error) {
        setErrorMessage('Failed to connect to wallet');
        console.error(error);
      }
    } else {
      setErrorMessage('No wallet found. Please install Trust Wallet or MetaMask.');
    }
  };

  return (
    <div>
      <h1>Connect Trust Wallet</h1>
      <button onClick={connectWallet}>Connect Wallet</button>
      {walletAddress && <p>Connected Wallet Address: {walletAddress}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default ConnectWallet;
