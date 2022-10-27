// scripts/deploy.js
const { ethers } = require("hardhat");

async function main() {
  const NBAX = await ethers.getContractFactory("NBAX");
  const instance = await NBAX.deploy();
  await instance.deployed();
  console.log("NBAX Token deployed to:", instance.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });