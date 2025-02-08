import React, { useEffect } from "react";
import { ethers } from "ethers";

// Blockchain connection logic
const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545"); // Placeholder Besu RPC URL

export const connectBlockchain = async () => {
  try {
    await provider.ready;
    console.log("Connected to the blockchain");
    return provider;
  } catch (error) {
    console.error("Error connecting to the blockchain:", error);
  }
};

// React Component for Blockchain Page
const BlockchainPage = () => {
  useEffect(() => {
    const connect = async () => {
      const provider = await connectBlockchain();
      if (provider) {
        console.log("Blockchain connected successfully");
      }
    };

    connect();
  }, []);

  return (
    <div>
      <h1>Blockchain Connection</h1>
      <p>Connecting to Hyperledger Besu...</p>
    </div>
  );
};

export default BlockchainPage;
