import { ChainId } from '..';
/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export declare class Currency {
    readonly decimals: number;
    readonly symbol?: string;
    readonly name?: string;
    /**
     * The only instance of the base class `Currency`.
     */
    static readonly ETHER: {
        1: Currency;
        3: Currency;
        4: Currency;
        10: Currency;
        56: Currency;
        58: Currency;
        66: Currency;
        69: Currency;
        81: Currency;
        82: Currency;
        87: Currency;
        100: Currency;
        128: Currency;
        137: Currency;
        250: Currency;
        288: Currency;
        336: Currency;
        361: Currency;
        365: Currency;
        592: Currency;
        4002: Currency;
        42161: Currency;
        43114: Currency;
        421611: Currency;
        80001: Currency;
        43113: Currency;
    };
    /**
     * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
     * @param decimals decimals of the currency
     * @param symbol symbol of the currency
     * @param name of the currency
     */
    protected constructor(decimals: number, symbol?: string, name?: string);
}
declare const ETHER: {
    1: Currency;
    3: Currency;
    4: Currency;
    10: Currency;
    56: Currency;
    58: Currency;
    66: Currency;
    69: Currency;
    81: Currency;
    82: Currency;
    87: Currency;
    100: Currency;
    128: Currency;
    137: Currency;
    250: Currency;
    288: Currency;
    336: Currency;
    361: Currency;
    365: Currency;
    592: Currency;
    4002: Currency;
    42161: Currency;
    43114: Currency;
    421611: Currency;
    80001: Currency;
    43113: Currency;
};
export { ETHER };
