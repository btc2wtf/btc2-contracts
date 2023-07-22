import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";

const config: HardhatUserConfig = {
  networks: {
    testnet: {
      url: "http://127.0.0.1:8545",
      accounts: {
        mnemonic: "", // mnemonic here
      },
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.17",
        settings: {
          optimizer: { enabled: true, runs: 1000 },
        },
      },
    ],
  },
  etherscan: {
    apiKey: "", // etherscan api key here...
  },
};

export default config;
