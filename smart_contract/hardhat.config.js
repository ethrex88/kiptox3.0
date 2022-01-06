
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity:'0.8.0',
  networks:{
    ropsten : {
      url : 'https://eth-ropsten.alchemyapi.io/v2/OS3VQuIjBV95SFnBJ2YkQJkL_rDw2WZ6',
      accounts: ['18d444142940d2d3959fdbdbaa09deb8ca7599ab5edb66f96eb9d2c9ebf5964c']
    }
  }
}