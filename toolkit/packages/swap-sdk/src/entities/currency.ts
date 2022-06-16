import JSBI from 'jsbi'
import { ChainId } from '..'

import { SolidityType } from '../constants'
import { validateSolidityTypeInstance } from '../utils'

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export class Currency {
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string

  /**
   * The only instance of the base class `Currency`.
   */
  public static readonly ETHER = {
    [ChainId.ETH_MAINNET]: new Currency(18, 'ETH', 'ETH Coin'),
    [ChainId.ETH_ROPSTEN]: new Currency(18, 'ETH', 'ETH Coin'),
    [ChainId.ETH_RINKEBY]: new Currency(18, 'ETH', 'ETH Coin'),
    [ChainId.OPTIMISTIC_MAINNET]: new Currency(18, 'OPTIMISTIC', 'OPTIMISTIC Coin'),
    [ChainId.BSC_MAINNET]: new Currency(18, 'BSC', 'BSC Coin'),
    [ChainId.ONTOLOGY_MAINNET]: new Currency(18, 'ONTOLOGY', 'ONTOLOGY Coin'),
    [ChainId.OEC_MAINNET]: new Currency(18, 'OEC', 'OEC Coin'),
    [ChainId.OPTIMISTIC_TESTNET]: new Currency(18, 'OPTIMISTIC', 'OPTIMISTIC Coin'),
    [ChainId.ASTR_TESTNET]: new Currency(18, 'ASTR', 'ASTR Coin'),
    [ChainId.SDN_TESTNET]: new Currency(18, 'SDN', 'SDN Coin'),
    [ChainId.BSC_TESTNET]: new Currency(18, 'BSC', 'BSC Coin'),
    [ChainId.XDAI_MAIN]: new Currency(18, 'XDAI', 'XDAI Coin'),
    [ChainId.HECO_MAINNET]: new Currency(18, 'HECO', 'HECO Coin'),
    [ChainId.POLYGON_MAINNET]: new Currency(18, 'POLYGON', 'POLYGON Coin'),
    [ChainId.FANTOM_MAINNET]: new Currency(18, 'FANTOM', 'FANTOM Coin'),
    [ChainId.BOBA_MAINNET]: new Currency(18, 'BOBA', 'BOBA Coin'),
    [ChainId.SHIDEN_MAINNET]: new Currency(18, 'SHIDEN', 'SHIDEN Coin'),
    [ChainId.THETA_MAINNET]: new Currency(18, 'THETA', 'THETA Coin'),
    [ChainId.THETA_TESTNET]: new Currency(18, 'THETA', 'THETA Coin'),
    [ChainId.ASTR_MAINNET]: new Currency(18, 'ASTR', 'ASTR Coin'),
    [ChainId.SDN_MAINNET]: new Currency(18, 'SDN', 'SDN Coin'),
    [ChainId.FANTOM_TESTNET]: new Currency(18, 'FANTOM', 'FANTOM Coin'),
    [ChainId.ARBITRUM_MAINNET]: new Currency(18, 'ARBITRUM', 'ARBITRUM Coin'),
    [ChainId.AVAX_MAIN]: new Currency(18, 'AVAX', 'AVAX Coin'),
    [ChainId.ARBITRUM_TESTNET]: new Currency(18, 'ARBITRUM', 'ARBITRUM Coin'),
    [ChainId.POLYGON_TESTNET]: new Currency(18, 'POLYGON', 'POLYGON Coin'),
    [ChainId.AVALANCH_MAINNET]: new Currency(18, 'AVALANCH', 'AVALANCH Coin'),
    [ChainId.AVALANCH_TESTNET]: new Currency(18, 'AVALANCH', 'AVALANCH Coin'),
  }

  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  protected constructor(decimals: number, symbol?: string, name?: string) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8)

    this.decimals = decimals
    this.symbol = symbol
    this.name = name
  }
}

const ETHER = Currency.ETHER
export { ETHER }
