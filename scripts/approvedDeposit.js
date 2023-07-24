const { ethers } = require("hardhat");
const { FXRootContractAbi } = require("../artifacts/FXRootContractAbi.js");
const ABI = require("../artifacts/contracts/BirdOfParadise.sol/BirdOfParadise.json");
require("dotenv").config();

async function main() {
  const networkAddress =
    "https://eth-goerli.g.alchemy.com/v2/7mXFDS2YcwySywIsk9o2lGMODBzxcT5U";
    // "https://polygon-mumbai.g.alchemy.com/v2/AXSKlnjUD7bfAoL3n0x8QLIIEcX7PlD3";
  const privateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  const wallet = new ethers.Wallet(privateKey, provider);

  
  const [signer] = await ethers.getSigners();

  
  const NFT = await ethers.getContractFactory("BirdOfParadise");
  // const nft = await NFT.attach("0x59057972F553f795275bE46bdC27De38EdBd9E1e");
  const nft = await NFT.attach("0x9093F40AeDc4094A0131866583f8B4b778F32271"); // ye change hoga as per contract address
  
  const fxRootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";

  const fxRoot = await ethers.getContractAt(FXRootContractAbi, fxRootAddress);

  
  const tokenIds = [0, 1, 2, 3, 4];

  // Approve the nfts for transfer
  const approveTx = await nft.connect(signer).setApprovalForAll(fxRootAddress, true);
  await approveTx.wait();
  console.log("Transfered Successfully!!");
  console.log("Status: Confirmed");

  // // Replace this with the actual Mumbai addresses obtained from mapping

  const receiverMumbaiAddress = '0x38bC798E8b753C88595035AaAf320b787De32131'; // Mumbai address


  for (let i = 0; i < tokenIds; i++) {
    const depositTx = await fxRoot.connect(signer).deposit(nft.address, wallet.address, tokenIds[i], "0x6566");
    await depositTx.wait();
  }

  console.log("NFT : Bird Of paradise");
  console.log("Approved and deposited");

  const nft2 = await NFT.attach('0x38bC798E8b753C88595035AaAf320b787De32131'); // idhar mera contract address jayega

  const balance = await nft.balanceOf(wallet.address);
  console.log(" NFT's Holding in wallet:",balance.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
