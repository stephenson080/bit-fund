import Web3 from "web3";
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

let web3: Web3;

if (typeof window !== "undefined" && typeof window.ethereum! !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum!.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum!);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    `https://polygon-mumbai.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`
  );
  web3 = new Web3(provider);
}

export default web3;
