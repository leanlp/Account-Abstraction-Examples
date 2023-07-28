require("dotenv").config();
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";


const {PRIVATE_KEY, API_URL_ALCHEMY, poligonScan} = process.env;
const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    matic: {
      url: API_URL_ALCHEMY,
      accounts: [`0x${PRIVATE_KEY}`],

    }
  },
  etherscan: {

    apiKey: poligonScan
  }


};

export default config;
