import { ethers } from "ethers";
import { Suspense } from "react";
import { getContracts } from "../utils/getContracts"
import { getProvider } from "../utils/getProvider";
import fetch from "node-fetch"
import useData from "../utils/useData";

const fetchMarketItems = async () => {
    const provider = getProvider()
    const { Cockfighter, Market } = getContracts(provider);

    let roosters = await Market.getMarketItems();
    roosters = await Promise.all(roosters.map(async(item) => {
        const tokenURI = await Cockfighter.tokenURI(item.tokenId.toNumber());
        const bender = await fetch(tokenURI).then(data => data.json()).then( data => data).catch(err => ({}));
        
        console.log(bender)
        return {
            itemId: item.itemId,
            price: ethers.utils.formatEther(item.price),
            lastPrice: ethers.utils.formatEther(item.lastPrice),
            priceETH: item.price,
            tokenId: item.tokenId,
            seller: item.seller,
            owner: item.owner,
            name: bender.name,
            dna: bender.dna,
            image: bender.image,
            attributes: bender.attributes,
            element: bender.element
        }
    }))

    return roosters;
}

const MarketPlaceGrid = ({ id }) => {
    let items = useData('market', fetchMarketItems);
    
    return (
        <>
            <div>
                Market Place
                { items.map((item) => (
                    <div key={item.dna}>{item.name} {item.dna}</div>
                ))}
            </div>
        </>
    )
}
export default function MarketTemplate() {    
    return (
        <Suspense fallback="Loading...">
            <MarketPlaceGrid />
        </Suspense>
    )
}