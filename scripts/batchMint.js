const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const privateKey = process.env.PRIVATE_KEY;

  const networkAddress =
    "https://eth-goerli.g.alchemy.com/v2/7mXFDS2YcwySywIsk9o2lGMODBzxcT5U";

  const provider = new ethers.providers.JsonRpcProvider(networkAddress);
  const signer = new ethers.Wallet(privateKey, provider);

  const contractAddress = "0x919a50c80ab3de90613D8031B90457b2922968CF";

   
  const BirdOfParadise = await ethers.getContractFactory("BirdOfParadise", signer);
  const contract = await BirdOfParadise.attach(contractAddress);

  const numberOfTokensToMint = 5;

  await contract.mint(numberOfTokensToMint);

  
  console.log("Minted 5 Love bird's NFT's");
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
