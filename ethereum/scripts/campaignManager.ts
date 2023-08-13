import web3 from "./web3";
import ManagerAbi from "../../utils/ABI/campaignManager.json";

const address = "0xfa5a75ac7bd19e0c46380428dab8005df038b17b";

const instance = new web3.eth.Contract(ManagerAbi, address);

export default instance;
