/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");
const { alchemyAPIKey, ethereumAccount, etherscanAPIKey} = require('./.secrets.json');

module.exports = {
  solidity: {
    compilers: [
  
],
overrides: {
  "contracts/TheLogFactory_flat.sol": {
    version: "0.5.16",
    settings: { }
  },
  "contracts/TheLogRouter_flat.sol": {
    version: "0.6.6",
    settings: { 
      optimizer: {
        enabled: true,
        runs: 200,
      },
    }
  },
}
},
  networks: {
    hardhat: {
    },
    rinkeby: {
      
      // On https://dashboard.alchemyapi.io/ display the key with "View Key" button
      url: alchemyAPIKey,
      // In methamask, choose "Account details", then "Export Private Key".
      accounts: [ethereumAccount]
    }
  },
  etherscan: {
    apiKey: etherscanAPIKey
  }
};