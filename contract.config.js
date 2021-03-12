import oktPool from './abi/OKTPool.json'
import lemond from './abi/LEMD.json'

export default {
  stake:{
    okt: {
      name: "LEMD Genesis Pool",
      description: "Get OKT Token",
      icon: "icon_domo_eth",
      link: "https://gitter.im/okexchain-testnet/faucet",
      address: '0x2c91AA5F6586e9E13D4EC50dA16b336beC448BCf',
      abi: oktPool,
      speed: "Genesis"
    }
  },
  token: {
    lemond: {
      address: '0x5A49b0104C4d11e13c51D3bD1357b7B4BfCEc544',
      abi: lemond
    }
  }, 
  pool: {
    okt_pool: {
      address: '0x0C497bEDb5e7d6C88d0cA308Fc22561a9EaB7BE2',
      abi: oktPool
    }
  }
}