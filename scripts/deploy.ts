import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const PollingSys = await ethers.getContractFactory("PollingSys");
  
  // Deploy contract
  const pollingSys = await PollingSys.deploy();

  console.log("PollingSys deployed to:", pollingSys);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
