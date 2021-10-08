import { Contract } from "ethers";
import hre, { ethers } from "hardhat";
const network = hre.network.name;
const fs = require('fs');
const dotenv = require('dotenv');
const envConfig = dotenv.parse(fs.readFileSync())
for (const k in envConfig) {
    process.env[k] = envConfig[k]
}

async function main() {
    const accounts = await hre.ethers.getSigners();
    const sender = accounts[0].address;
    console.log("ERC20 Sender address: ", sender);

    const ERC20 = await hre.ethers.getContractFactory("ERC20");
    let erc20 = await ERC20.deploy();

    console.log(`ERC20  smart contract has been deployed to: ${erc20.address}`);
}
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });