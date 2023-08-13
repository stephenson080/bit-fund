import web3 from "./web3";
import CompaignABI from "../../utils/ABI/campaign.json";

export default function CampaignInstance(address: string) {
  return new web3.eth.Contract(CompaignABI, address);
}
