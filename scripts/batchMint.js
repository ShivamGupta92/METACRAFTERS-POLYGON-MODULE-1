const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const privateKey = process.env.PRIVATE_KEY;

  const networkAddress =
    "https://eth-goerli.g.alchemy.com/v2/7mXFDS2YcwySywIsk9o2lGMODBzxcT5U";
    // "https://polygon-mumbai.g.alchemy.com/v2/AXSKlnjUD7bfAoL3n0x8QLIIEcX7PlD3";


  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  
  const signer = new ethers.Wallet(privateKey, provider);

  
  const contractAddress = "0x9093F40AeDc4094A0131866583f8B4b778F32271";
  //Update the deployement address here

  
  const IndianNFT = await ethers.getContractFactory("BirdOfParadise", signer);
  const contract = await IndianNFT.attach(contractAddress);

  
  await contract.mint(5);

  
  console.log("Minted 5 Love bird's NFT's");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
