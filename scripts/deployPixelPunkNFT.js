
const hre = require("hardhat");

async function main() {
  const PixelPunkNFT = await hre.ethers.getContractFactory("PixelPunkNFT");
  const pixelPunkNFT = await PixelPunkNFT.deploy();

  await pixelPunkNFT.deployed();

  console.log("PixelPunkNFT deployed to: ", pixelPunkNFT.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    })

