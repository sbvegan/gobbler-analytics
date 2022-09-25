import { 
    EF_GOO_BALANCE_UPDATED,
    EF_GOBBLER_CLAIMED,
    EF_GOBBLER_PURCHASED,
    EF_LEGENDARY_GOBBLER_MINTED,
    EF_RESERVED_GOBBLERS_MINTED,
    EF_GOBBLERS_REVEALED,
    EF_ART_GOBBLED,
    EF_PAGE_PURCHASED,
    EF_COMMUNITY_PAGES_MINTED
} from "./constants";
import { Network, Alchemy } from 'alchemy-sdk';
import dotenv from "dotenv"
dotenv.config()

async function main() {
    /**
     * Using the Alchemy websocket because it automatically retries on 
     * failure without any configuration. So that's nice :)
     * https://docs.alchemy.com/reference/subscription-api#alchemy-sdks-event-types
     * */ 
    const settings = {
        apiKey: process.env.ALCHEMY_ETH_MAINNET_WS_KEY, 
        network: Network.ETH_MAINNET, 
    };
    const alchemy = new Alchemy(settings);  // provider
    
    /**
     * This should log the Art Gobblers events that are emitted. 
     * It excludes the events pertaining to Chainlink's randomness.
     * */

    alchemy.ws.on(EF_GOO_BALANCE_UPDATED, (log) => {
        console.log(log)
    })

    alchemy.ws.on(EF_GOBBLER_CLAIMED, (log) => {
        console.log(log)
    })

    alchemy.ws.on(EF_GOBBLER_PURCHASED, (log) => {
        console.log(log)
    })

    alchemy.ws.on(EF_LEGENDARY_GOBBLER_MINTED, (log) => {
        console.log(log)
    })

    alchemy.ws.on(EF_RESERVED_GOBBLERS_MINTED, (log) => {
        console.log(log)
    })

    alchemy.ws.on(EF_GOBBLERS_REVEALED, (log) => {
        console.log(log)
    })

    alchemy.ws.on(EF_ART_GOBBLED, (log) => {
        console.log(log)
    })

    /**
     * This should log the Pages events that are emitted. 
     * */

    alchemy.ws.on(EF_PAGE_PURCHASED, (log) => {
        console.log(log)
    })

    alchemy.ws.on(EF_COMMUNITY_PAGES_MINTED, (log) => {
        console.log(log)
    })
}

main();