# Art Gobbler Analytics

**CURRENTLY UNTESTED**

Simple server to monitor the Art Gobblers project activity. It logs the events that the `ArtGobblers.sol` contract emits. The `src/constants.ts` file will need to be updated when the contracts are deployed and the addresses are available.

This project can be extended to record these events to a database to make retriving the projects analytics easier.

It could also be extended to add a REST API for to read information about the smart contracts. To retrieve information about holders, gobblers, etc.
