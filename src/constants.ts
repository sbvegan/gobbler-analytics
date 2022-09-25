import { Utils } from 'alchemy-sdk';

// ADDRESSES - todo: update when available
export const ART_GOBBLERS_ADDRESS: string = ''; 
export const GOO_ADDRESS: string = '';
export const PAGES_ADDRESS: string = '';
export const TEAM_ADDRESS: string = '';
export const COMMUNITY_ADDRESS: string = '';
// SUPPLY
export const MAX_SUPPLY: number = 10000;
export const MINTLIST_SUPPLY: number = 2000;
export const LEGENDARY_SUPPLY: number = 10;
export const RESERVED_SUPPLY: number = (MAX_SUPPLY - MINTLIST_SUPPLY - LEGENDARY_SUPPLY) / 5;
export const MAX_MINTABLE = MAX_SUPPLY - MINTLIST_SUPPLY - LEGENDARY_SUPPLY - RESERVED_SUPPLY;
// METADATA CONSTANTS
export const UNREVEALED_URI: string = '';
export const BASE_URI: string = '';
// ART GOBBLER EVENT FILTERS
interface Filter {
    address: string;
    topics: Array<string>;
}
export const EF_GOO_BALANCE_UPDATED: Filter = {
    address: ART_GOBBLERS_ADDRESS,
    topics: [
        Utils.id("GooBalanceUpdated(address,uint256)")
    ]
} 
export const EF_GOBBLER_CLAIMED: Filter = {
    address: ART_GOBBLERS_ADDRESS,
    topics: [
        Utils.id("GobblerClaimed(address,uint256)")
    ]
}
export const EF_GOBBLER_PURCHASED: Filter = {
    address: ART_GOBBLERS_ADDRESS,
    topics: [
        Utils.id("GobblerPurchased(address,uint256,uint256)")
    ]
}
export const EF_LEGENDARY_GOBBLER_MINTED: Filter = {
    address: ART_GOBBLERS_ADDRESS,
    topics: [
        Utils.id("LegendaryGobblerMinted(address,uint256,uint256[])")
    ]
}
export const EF_RESERVED_GOBBLERS_MINTED: Filter = {
    address: ART_GOBBLERS_ADDRESS,
    topics: [
        Utils.id("ReservedGobblersMinted(address,uint256,uint256)")
    ]
}
export const EF_GOBBLERS_REVEALED: Filter = {
    address: ART_GOBBLERS_ADDRESS,
    topics: [
        Utils.id("GobblersRevealed(address,uint256,uint256)")
    ]
}
export const EF_ART_GOBBLED: Filter = {
    address: ART_GOBBLERS_ADDRESS,
    topics: [
        Utils.id("ArtGobbled(address,uint256,address,uint256)")
    ]
}
// PAGES EVENTS
export const EF_PAGE_PURCHASED: Filter = {
    address: PAGES_ADDRESS,
    topics: [
        Utils.id("PagePurchased(address,uint256,uint256)")
    ]
}
export const EF_COMMUNITY_PAGES_MINTED: Filter = {
    address: PAGES_ADDRESS,
    topics: [
        Utils.id("CommunityPagesMinted(address,uint256,uint256)")
    ]
}