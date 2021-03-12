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
      address: '0xaDc6be3924dCd725E6fEa75f02459370e29226DB',
      abi: lemond
    }
  }, 
  pool: {
    okt_pool: {
      address: '0xcbDe0843F69F587D77316dd88ADb240BBd56875F',
      abi: oktPool
    }
  }
}