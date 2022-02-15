import web3 from './web3';

const abi = [{"inputs":[{"internalType":"uint256","name":"minAmount","type":"uint256"},
{"internalType":"address","name":"creator","type":"address"}],
"stateMutability":"nonpayable","type":"constructor"},
{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],
"name":"approveRequest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contribute","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"des","type":"string"},{"internalType":"uint256","name":"val","type":"uint256"},{"internalType":"address","name":"vendor","type":"address"}],"name":"createRequest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"donors","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"donorsCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"finalizeRequest","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getSummary","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"manager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minContribution","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"requestCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"requests","outputs":[{"internalType":"string","name":"description","type":"string"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"address","name":"vendor","type":"address"},{"internalType":"bool","name":"completed","type":"bool"},{"internalType":"uint256","name":"approvedCount","type":"uint256"}],"stateMutability":"view","type":"function"}]
export default function CampaignInstance(
  address: string | string[] | undefined
) {
  return new web3.eth.Contract(abi, address);
}
