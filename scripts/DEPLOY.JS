
const hre = require("hardhat");



async function main() {
    const [deployer] = await ethers.getSigners();
  
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