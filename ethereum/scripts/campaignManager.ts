import web3 from './web3'

const abi = [{
    "inputs": [{ "internalType": "uint256", "name": "minContribution", "type": "uint256" }],
    "name": "createCampaign", "outputs": [], "stateMutability": "nonpayable", "type": "function"
},
{
    "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "deployedContracts",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view", "type": "function"
}, {
    "inputs": [], "name": "getDeployedCampaigns",
    "outputs": [{ "internalType": "address[]", "name": "", "type": "address[]" }],
    "stateMutability": "view", "type": "function"
}]

const address = process.env.ADDRESS

const instance = new web3.eth.Contract(abi, address)

export default instance