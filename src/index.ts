// const ethers = require("ethers");
const artGobblersABI = require("./abis/art-gobblers.json"); 
import { ART_GOBBLERS_ADDRESS } from "./constants";
require("dotenv").config()
const { Alchemy, Network } = require("@alch/alchemy-web3");

async function main() {
    const settings = {
        apiKey: "demo", // Replace with your Alchemy API Key.
        network: Network.ETH_MAINNET, // Replace with your network.
    };
      
    const alchemy = new Alchemy(settings);
    // https://docs.alchemy.com/reference/subscription-api#alchemy-sdks-event-types
    // todo: add filter
    // todo: add subscriptions:
    // alchemy.ws.on("", () => {

    // })
}

main();