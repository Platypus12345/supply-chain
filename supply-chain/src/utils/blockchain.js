import { ethers } from "ethers";

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