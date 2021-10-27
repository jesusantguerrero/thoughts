import { ethers } from "ethers";
import { config } from "../config";

import MARKET from "../contracts/Market/MarketViews.sol/MarketViews.json";
import NFT from "../contracts/NFT/CockFighterNFT.sol/CockFighterNFT.json";

export const getContracts = (provider) => {
    if (!config.marketAddress) return {}
    const Market = new ethers.Contract(config.marketAddress, MARKET.abi, provider);
    const Cockfighter = new ethers.Contract(config.roosterAddress, NFT.abi, provider);

    return {
        Market,
        Cockfighter,
    }
}