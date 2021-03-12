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
      address: '0x69267aa879f0CFce6FE906579258e56cAD6a1E1F',
      abi: lemond
    }
  }, 
  pool: {
    okt_pool: {
      address: '0x9a00A2a6d1b7DE4b59CbFBB69C960Ce23dD9F341',
      abi: oktPool
    }
  }
}