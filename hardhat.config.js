require('@nomiclabs/hardhat-waffle')
require('hardhat-abi-exporter')
require('@openzeppelin/hardhat-upgrades')
require('@nomiclabs/hardhat-truffle5')

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async () => {
  const accounts = await ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    hardhat: {
      allowUnlimitedContractSize: true,
    },
    okexchain: {
      url: 'https://a.qpxue.com',
      accounts: [mnemonic]
    },
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/3970ae72d3db40f6a6dfad8544b4da1c',
      accounts: [mnemonic]
    },
  },
  solidity: {
    compilers: [
      {
        version: '0.6.2',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: '0.5.8',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      // {
      //   version: '0.4.24',
      //   settings: {
      //     optimizer: {
      //       enabled: true,
      //       runs: 200,
      //     },
      //   },
      // },
    ],
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
  mocha: {
    timeout: 20000,
  },
  abiExporter: {
    path: './abi',
    clear: true,
    flat: true,
    // only: ['ERC20'],
  },
}
