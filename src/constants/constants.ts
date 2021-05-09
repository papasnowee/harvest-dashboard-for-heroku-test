/** This Set contains addresses of vaults that have no reward  */
export const vaultsWithoutReward = new Set<string>([])

// FARM decimals
export const farmDecimals = 18

// every price decimals
export const PRICE_DECIMALS = 18

// Etherium
export const farmAddress = '0xa0246c9032bc3a600820415ae600c6388619a14d'

export const PSAddress = '0x25550cccbd68533fa04bfd3e3ac4d09f9e00fc50'

// BSC
export const bFarmAddress = '0x4b5c23cac08a567ecf0c1ffca8372a45a5d33743'

export const outdatedVaults = new Set<string>([
  '0xf2b223eb3d2b382ead8d85f3c1b7ef87c1d35f3a',
  '0x8e298734681adbfc41ee5d17ff8b0d6d803e7098',
  '0xc3f7ffb5d5869b3ade9448d094d81b0521e8326f',
  '0xc7ee21406bb581e741fbb8b21f213188433d9f2f',
  '0xe85c8581e60d7cd32bbfd86303d2a4fa6a951dac',
  '0xc07eb91961662d275e2d285bdc21885a4db136b0',
  '0xfbe122d0ba3c75e1f7c80bd27613c9f35b81feec',
  '0x192e9d29d43db385063799bc239e772c3b6888f3',
  '0x1a9f22b4c385f78650e7874d64e442839dc32327',
  '0x63671425ef4d25ec2b12c7d05de855c143f16e3b',
  '0xb19ebfb37a936cce783142955d39ca70aa29d43c',
  '0xb1feb6ab4ef7d0f41363da33868e85eb0f3a57ee',
  '0x59258f4e15a5fc74a7284055a8094f58108dbd4f',
])
export const outdatedPools = new Set<string>([
  '0x59258f4e15a5fc74a7284055a8094f58108dbd4f',
  '0x8f5adc58b32d4e5ca02eac0e293d35855999436c',
])

export const ETHERIUM_CONTRACT_FOR_GETTING_PRICES =
  '0x48dc32eca58106f06b41de514f29780ffa59c279'

export const DEFAULT_BSC_ORACLE_CONTRACT_FOR_GETTING_PRICES =
  '0x643cF46eef91Bd878D9710ceEB6a7E6F929F2608'

export const LEGACY_BSC_ORACLE_CONTRACT_FOR_GETTING_PRICES =
  '0xE0e9F05054Ad3a2b6414AD13D768be91a84b47e8'

export const LEGACY_BSC_FACTORY = '0xbcfccbde45ce874adcb698cc183debcf17952812'

export const BSC_URL = 'https://bsc-dataseed.binance.org/'
