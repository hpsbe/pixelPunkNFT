require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");
const { task } = require("hardhat/config");

dotenv.config();

task("accounts", "Prints the list of the accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigner();

  for (const account of accounts) {
    console.log(account.address);
  }
})

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: process.env.REACT_PUBLIC_POLYGON_MUMBAI_RPC,
      accounts: [`0x${process.env.REACT_PUBLIC_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: process.env.REACT_APP_POLYGONSCAN_KEY
  }
}