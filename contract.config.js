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
      address: '0x7D720E522A4019fAEFd7ccfe894a0D54577Ce138',
      abi: lemond
    }
  }, 
  pool: {
    okt_pool: {
      address: '0x45c5EC65F604fd031e93149fE0a4A871478C5233',
      abi: oktPool
    }
  }
}