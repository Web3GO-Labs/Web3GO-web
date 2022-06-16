import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | bigint | string;
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare enum CHAINKEY {
    BSC = "BSC",
    SDN = "SDN",
    ASTR = "ASTR"
}
export declare enum ChainId {
    ETH_MAINNET = 1,
    ETH_ROPSTEN = 3,
    ETH_RINKEBY = 4,
    OPTIMISTIC_MAINNET = 10,
    BSC_MAINNET = 56,
    ONTOLOGY_MAINNET = 58,
    OEC_MAINNET = 66,
    OPTIMISTIC_TESTNET = 69,
    ASTR_TESTNET = 81,
    SDN_TESTNET = 82,
    BSC_TESTNET = 87,
    XDAI_MAIN = 100,
    HECO_MAINNET = 128,
    POLYGON_MAINNET = 137,
    FANTOM_MAINNET = 250,
    BOBA_MAINNET = 288,
    SHIDEN_MAINNET = 336,
    THETA_MAINNET = 361,
    THETA_TESTNET = 365,
    ASTR_MAINNET = 592,
    SDN_MAINNET = 336,
    FANTOM_TESTNET = 4002,
    ARBITRUM_MAINNET = 42161,
    AVAX_MAIN = 43114,
    ARBITRUM_TESTNET = 421611,
    POLYGON_TESTNET = 80001,
    AVALANCH_MAINNET = 43114,
    AVALANCH_TESTNET = 43113
}
export declare const FACTORY_ADDRESS: {
    1: string;
    3: string;
    4: string;
    10: string;
    56: string;
    58: string;
    66: string;
    69: string;
    81: string;
    82: string;
    87: string;
    100: string;
    128: string;
    137: string;
    250: string;
    288: string;
    336: string;
    361: string;
    365: string;
    592: string;
    4002: string;
    42161: string;
    43114: string;
    421611: string;
    80001: string;
    43113: string;
};
export declare const INIT_CODE_HASH: {
    1: string;
    3: string;
    4: string;
    10: string;
    56: string;
    58: string;
    66: string;
    69: string;
    81: string;
    82: string;
    87: string;
    100: string;
    128: string;
    137: string;
    250: string;
    288: string;
    336: string;
    361: string;
    365: string;
    592: string;
    4002: string;
    42161: string;
    43114: string;
    421611: string;
    80001: string;
    43113: string;
};
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const FEES_NUMERATOR: JSBI;
export declare const FEES_DENOMINATOR: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
