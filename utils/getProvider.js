import { ethers } from "ethers";
import { config } from "../config";

export const getProvider = () => {
    return new ethers.providers.JsonRpcProvider(config.rpcURL, "any");
}