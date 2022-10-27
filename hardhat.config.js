// hardhat.config.js
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {},
    matic: {
      url: "https://polygon-rpc.com",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};