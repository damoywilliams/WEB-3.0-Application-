
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url:   'https://eth-goerli.g.alchemy.com/v2/sO78-YCUYdvIsLCAnPbLxAqL2B1o0emd', //this our acramy http key 
     
      accounts:['82c8ddd94c8b90a2e19ccd09cc0f7cce92aa32c84b188725c34cbe92cdc3dff2']   //our metamask privste key 
    }
  }
}




//https://eth-mainnet.g.alchemy.com/v2/YMdNHz0A3ZLqVV6h3xlXL9FAS5njHgUA

//Transactions address:  0x49A0dB645E009d710D569531D221e3EF111190A7