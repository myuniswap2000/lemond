// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require('hardhat')
const { ethers, upgrades } = require('hardhat')
const BigNumber = require('bignumber.js')
const web3 = require('web3')

const FakeDai = artifacts.require("./FakeDai")
const FakeCDai = artifacts.require("./FakeCDai")
const FakeCEther = artifacts.require("./FakeCEther")
const FakeComptroller = artifacts.require("./FakeComptroller")
const FakeCDaiInterestRateModel = artifacts.require("./FakeCDaiInterestRateModel")
const FakeCEtherInterestRateModel = artifacts.require("./FakeCEtherInterestRateModel")

async function main() {
  await hre.run('compile')

  this.deployer = (await ethers.getSigners())[0].address
  console.log('deployer address',this.deployer)

  // 1. Deploy DAI token contract
  this.fakeDai = await FakeDai.new()
  console.log('FakeDai', this.fakeDai.address)

  // 2. Deploy Interest Model contracts for cDAI and cETH
  this.fakeCDaiInterestRateModel = await FakeCDaiInterestRateModel.new()
  console.log("FakeCDaiInterestRateModel",this.fakeCDaiInterestRateModel.address)
  this.fakeCEtherInterestRateModel = await FakeCEtherInterestRateModel.new()
  console.log("FakeCEtherInterestRateModel",this.fakeCEtherInterestRateModel.address)

  // 3. Deploy Comptroller contract
  this.fakeComptroller = await FakeComptroller.new()
  console.log("FakeComptroller",this.fakeComptroller.address)

  // 4. Deploy cDAI contract
  // this.fakeCDai = await FakeCDai.new( 
  //   fakeDai.address, 
  //   fakeComptroller.address, 
  //   fakeCDaiInterestRateModel.address
  // )
  // console.log("FakeCDai",this.fakeCDai.address)

  // // 5. Deploy cEther contract
  // this.fakeCEther = await FakeCEther.new(
  //   fakeComptroller.address, 
  //   fakeCEtherInterestRateModel.address
  // )
  // console.log("FakeCEther",this.fakeCEther.address)

  // // 6. Activate cToken markets
  // this.fakeComptroller._supportMarket(this.fakeCDai.address)
  // this.fakeComptroller._supportMarket(this.fakeCEther.address)
  // console.log("SupportMarket Finish")

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
