# METACRAFTERS-POLYGON-MODULE-1

### Building with Polygon Bridge
# Project
- For this project, I will deploy an NFT collection on the Ethereum blockchain
- Map the collection to Polygon
- Transfer assets over via the Polygon Bridge.

## Dependencies
- Generate a 5-item collection using DALLE 2 or Midjourney
- Store items on IPFS using pinata.cloud
- Deploy an ERC721 or ERC1155 to the Goerli Ethereum Testnet
- You should have a promptDescription function on the contract that returns the prompt you used to generate the images
- Map Your NFT Collection using Polygon network token mapper. Note: this isn’t necessary but helpful for visualization.
- Write a hardhat script to batch mint all NFTs. Hint: ERC721A is optimal here.
- Write a hardhat script to batch transfer all NFTs from Ethereum to Polygon Mumbai using the FxPortal Bridge
- Approve the NFTs to be transferred
- Deposit the NFTs to the Bridge
- Test balanceOf on Mumbai

### Contract deployement and Program Execution
1. clone the repository :
 ```sh
git clone https://github.com/gmchad/zardkat
 ```
2. Run following commands after changeing directory
```sh
npm i
 ```
3. Add your environment variables in `.env` file.
  
4. This will generate a contract address that will get written in contractAddress.js in metadata folder. Paste that address into `batchMint.js` and also in `approveDeposit.js`
``` shell
npx hardhat run scripts/deploy.js --network goerli 
```

5. This will batch Mint all the nfts stored in pinata cloud
``` shell
npx hardhat run scripts/batchMint.js --network goerli
```

#### Time to map network and set bridging in motion
Go to https://mapper.polygon.technology/map and use deployed contract address to Map. Approve the mapping by paying required gas fee.

`Wait for a good 20-30 minute for mapping to complete ` view it here: https://mapper.polygon.technology/

6.
```shell
npx hardhat run scripts/approveDeposit.js --network goerli
```
Running this will first approve the transfer to FxPortal bridge and then will transfer to Polygon Mumbai 
Finaly all the BirdOfParadise NFT's will be transfered from Ethereum to Polygon Network usiing fxPortal Bridge.

And Balance in Eth will become 0 and in Polygon Mumbai 5 NFT's

# Visualization and Links

![image](https://github.com/ShivamGupta92/METACRAFTERS-POLYGON-MODULE-1/assets/70855458/1a4cdd15-fc63-4e49-b41e-5b87f757b8b8)

![image](https://github.com/ShivamGupta92/METACRAFTERS-POLYGON-MODULE-1/assets/70855458/8db6c62a-0005-4234-ae3c-de32f2259e79)

![image](https://github.com/ShivamGupta92/METACRAFTERS-POLYGON-MODULE-1/assets/70855458/74f1a9be-04e7-423c-a675-0b3c5792bcaf)

![image](https://github.com/ShivamGupta92/METACRAFTERS-POLYGON-MODULE-1/assets/70855458/451948bb-b58c-4174-986e-0bb6c67ccfa7)

https://goerli.etherscan.io/address/0x919a50c80ab3de90613d8031b90457b2922968cf
https://mumbai.polygonscan.com/token/0xfc8e8c05329432f9604897dc2cf6c263a8f947ca

## Author
Shivam Gupta
