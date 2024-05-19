require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks:{
    sepolia:{
      url: 'https://eth-sepolia.g.alchemy.com/v2/ro4yqKFYygz-ejUhIhwxhNUs4e62vc0M',
      accounts: ['a18a454a81a6474ca4084b544a114c711c569fb283e011df14931b8d09008ec6']
    }
  }
};
