import { ethers } from "hardhat";

async function main() {
    const BTC2Token = await ethers.getContractFactory("BTC2Token");
    const supply = "2100000000000000"
    const btc2Token = await BTC2Token.deploy(supply);
    await btc2Token.deployed();

    console.log(`BTC2 address: ${btc2Token.address}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
