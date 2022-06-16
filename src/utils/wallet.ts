// Set of helper functions to facilitate wallet setup

import { ChainId } from '@my/sdk';
import { BASE_BSC_SCAN_URL, BASE_URL, chainKey } from 'config';
import { chainId } from 'config/constants/tokens';

/**
 * Prompt the user to add BSC as a network on Metamask, or switch to BSC if the wallet is on a different network
 * @returns {boolean} true if the setup succeeded, false otherwise
 */

const wallet_config = {
  [ChainId.ETH_MAINNET]: {
    chainName: 'Ethereum Mainnet',
    chainId: `0x${ChainId.ETH_MAINNET.toString(16)}`,
    blockExplorerUrl: 'https://etherscan.io',
    nativeCurrency: { name: 'ETH', symbol: 'eth', decimals: 18, address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE' },
    rpcUrls: ['https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
  },
  [ChainId.ETH_ROPSTEN]: {
    chainName: 'Ethereum Ropsten',
    chainId: `0x${ChainId.ETH_ROPSTEN.toString(16)}`,
    blockExplorerUrl: 'https://ropsten.etherscan.io',
    nativeCurrency: { name: 'ETH', symbol: 'eth', decimals: 18, address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE' },
    rpcUrls: ['https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
  },
  [ChainId.ETH_RINKEBY]: {
    chainName: 'Ethereum Rinkeby',
    chainId: `0x${ChainId.ETH_RINKEBY.toString(16)}`,
    blockExplorerUrl: 'https://rinkeby.etherscan.io',
    nativeCurrency: { name: 'ETH', symbol: 'eth', decimals: 18, address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE' },
    rpcUrls: ['https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
  },
  [ChainId.OPTIMISTIC_MAINNET]: {
    chainName: 'Optimism',
    chainId: `0x${ChainId.OPTIMISTIC_MAINNET.toString(16)}`,
    blockExplorerUrl: 'https://optimism.io',
    nativeCurrency: {
      name: 'OETH',
      symbol: 'oeth',
      decimals: 18,
      address: '0x0000000000000000000000000000000000000000',
    },
    rpcUrls: ['https://mainnet.optimism.io'],
  },
  [ChainId.BSC_MAINNET]: {
    chainId: `0x${ChainId.BSC_MAINNET.toString(16)}`,
    chainName: 'Binance Smart Chain Mainnet',
    nativeCurrency: {
      name: 'BNB Token',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: ['https://bsc-dataseed.binance.org'],
    blockExplorerUrls: [`${BASE_BSC_SCAN_URL}/`],
  },
  [ChainId.ONTOLOGY_MAINNET]: {
    chainId: `0x${ChainId.ONTOLOGY_MAINNET.toString(16)}`,
    nativeCurrency: {
      name: 'ONG Token',
      symbol: 'ONG',
      decimals: 18,
    },
    rpcUrls: ['https://dappnode1.ont.io:10339'],
    blockExplorerUrls: [`https://explorer.ont.io`],
  },
  [ChainId.OEC_MAINNET]: {
    chainId: `0x${ChainId.OEC_MAINNET.toString(16)}`,
    chainName: 'OEC Mainnet',
    nativeCurrency: {
      name: 'OKT',
      symbol: 'okt',
      decimals: 18,
    },
    rpcUrls: ['https://exchainrpc.okex.org'],
    blockExplorerUrls: ['https://www.oklink.com/okexchain/'],
  },
  [ChainId.OPTIMISTIC_TESTNET]: {
    chainName: 'Optimism TESTNET',
    chainId: `0x${ChainId.OPTIMISTIC_TESTNET.toString(16)}`,
    blockExplorerUrl: 'https://kovan.optimism.io',
    nativeCurrency: {
      name: 'OETH',
      symbol: 'oeth',
      decimals: 18,
      address: '0x0000000000000000000000000000000000000000',
    },
    rpcUrls: ['https://rpc.testnet.fantom.network'],
  },
  [ChainId.ASTR_TESTNET]: {
    chainId: `0x${ChainId.ASTR_TESTNET.toString(16)}`,
    chainName: 'Shibuya Testnet',
    nativeCurrency: {
      name: 'SBY Token',
      symbol: 'SBY',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.shibuya.astar.network:8545'],
    blockExplorerUrls: [`${BASE_BSC_SCAN_URL}/`],
  },

  [ChainId.SDN_TESTNET]: {
    chainId: `0x${ChainId.ASTR_TESTNET.toString(16)}`,
    chainName: 'Shibuya Testnet',
    nativeCurrency: {
      name: 'SBY Token',
      symbol: 'SBY',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.shibuya.astar.network:8545'],
    blockExplorerUrls: [`${BASE_BSC_SCAN_URL}/`],
  },

  [ChainId.BSC_TESTNET]: {
    chainId: `0x${ChainId.BSC_TESTNET.toString(16)}`,
    chainName: 'Binance Smart Chain Testnet',
    nativeCurrency: {
      name: 'BNB Token',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
    blockExplorerUrls: [`${BASE_BSC_SCAN_URL}/`],
  },

  [ChainId.XDAI_MAIN]: {
    chainId: `0x${ChainId.XDAI_MAIN.toString(16)}`,
    chainName: 'Gnosis Mainnet',
    nativeCurrency: {
      name: 'xDai Token',
      symbol: 'xDai',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.xdaichain.com/'],
    blockExplorerUrls: ['https://blockscout.com/poa/xdai/tx/'],
  },

  [ChainId.HECO_MAINNET]: {
    chainId: `0x${ChainId.HECO_MAINNET.toString(16)}`,
    chainName: 'Heco Mainnet',
    nativeCurrency: {
      name: 'HT Token',
      symbol: 'HT',
      decimals: 18,
    },
    rpcUrls: ['https://http-mainnet-node.huobichain.com'],
    blockExplorerUrls: ['https://hecoinfo.com/tx/'],
  },
  [ChainId.POLYGON_MAINNET]: {
    chainId: `0x137`,
    chainName: 'Polygon Mainnet',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'matic',
      decimals: 18,
      address: '0x0000000000000000000000000000000000001010',
    },
    rpcUrls: ['https://rpc-mainnet.maticvigil.com'],
    blockExplorerUrls: [`https://polygonscan.com`],
  },
  [ChainId.FANTOM_MAINNET]: {
    chainId: `0xfa`, // 250
    chainName: 'Fantom Mainnet',
    nativeCurrency: {
      name: 'FTM',
      symbol: 'ftm',
      decimals: 18,
    },
    rpcUrls: ['https://rpcapi.fantom.network'],
    blockExplorerUrls: ['https://ftmscan.com/'],
  },
  [ChainId.BOBA_MAINNET]: {
    chainId: `0x120`, // 288
    chainName: 'Boba Mainnet',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'eth',
      decimals: 18,
    },
    rpcUrls: ['https://mainnet.boba.network'],
    blockExplorerUrls: ['https://blockexplorer.boba.network'],
  },
  [ChainId.SHIDEN_MAINNET]: {
    chainId: `0x${ChainId.SHIDEN_MAINNET.toString(16)}`,
    chainName: 'Shiden Network Mainnet',
    nativeCurrency: {
      name: 'SDN Token',
      symbol: 'SDN',
      decimals: 18,
    },
    rpcUrls: ['https://evm.shiden.astar.network'],
    // rpcUrls: ['https://shiden.api.onfinality.io/public'],
    blockExplorerUrls: [`${BASE_BSC_SCAN_URL}/`],
  },
  [ChainId.THETA_MAINNET]: {
    chainId: `0x${ChainId.SDN_MAINNET.toString(16)}`,
    chainName: 'Theta Mainnett',
    nativeCurrency: {
      name: 'TFUEL Token',
      symbol: 'TFUEL',
      decimals: 18,
    },
    rpcUrls: ['https://eth-rpc-api.thetatoken.org/rpc'],
    blockExplorerUrls: [``],
  },
  [ChainId.ASTR_MAINNET]: {
    // [ChainId.ASTR_MAINNET]: {
    chainId: `0x${ChainId.ASTR_MAINNET.toString(16)}`,
    chainName: 'Astar Network Mainnet',
    nativeCurrency: {
      name: 'ASTR Token',
      symbol: 'ASTR',
      decimals: 18,
    },
    rpcUrls: ['https://astar.api.onfinality.io/public'],
    blockExplorerUrls: [`${BASE_BSC_SCAN_URL}/`],
  },
  [ChainId.ARBITRUM_MAINNET]: {
    chainId: `0x${ChainId.ARBITRUM_MAINNET.toString(16)}`,
    chainName: 'Arbitrum',
    nativeCurrency: {
      name: 'AETH Token',
      symbol: 'AETH',
      decimals: 18,
    },
    rpcUrls: ['https://arb1.arbitrum.io/rpc'],
    blockExplorerUrls: [`https://arbiscan.io/`],
  },
  [ChainId.AVAX_MAIN]: {
    chainId: `0xa86a`, // 43114
    chainName: 'Avalanche',
    nativeCurrency: {
      name: 'AVAX',
      symbol: 'avax',
      decimals: 18,
      address: '0x0000000000000000000000000000000000000000',
    },
    rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
    blockExplorerUrl: 'https://cchain.explorer.avax.network',
  },
  [ChainId.AVALANCH_MAINNET]: {
    chainId: `0x${ChainId.AVALANCH_MAINNET.toString(16)}`,
    chainName: 'Avalanche C-Chain',
    nativeCurrency: {
      name: 'AVAX Token',
      symbol: 'AVAX',
      decimals: 18,
    },
    rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
    blockExplorerUrls: [`https://snowtrace.io`],
  },
  245022934: {
    chainId: `0x245022934`,
    chainName: 'Solana Mainnet',
    nativeCurrency: {
      name: 'SOL Token',
      symbol: 'SOL',
      decimals: 18,
    },
    rpcUrls: ['https://proxy.mainnet.neonlabs.org/solana'],
    blockExplorerUrls: [``],
  },
};

export const setupNetwork = async () => {
  const provider = window.ethereum;
  if (provider) {
    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [wallet_config[chainId]],
      });
      return true;
    } catch (error) {
      console.error('Failed to setup the network in Metamask:', error);
      return false;
    }
  } else {
    console.error("Can't setup the BSC network on metamask because window.ethereum is undefined");
    return false;
  }
};

/**
 * Prompt the user to add a custom token to metamask
 * @param tokenAddress
 * @param tokenSymbol
 * @param tokenDecimals
 * @returns {boolean} true if the token has been added, false otherwise
 */
export const registerToken = async (tokenAddress: string, tokenSymbol: string, tokenDecimals: number) => {
  const tokenAdded = await window.ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20',
      options: {
        address: tokenAddress,
        symbol: tokenSymbol,
        decimals: tokenDecimals,
        image: `${BASE_URL[chainKey]}/images/tokens/${chainKey}/${tokenAddress.toLocaleLowerCase()}.svg`,
      },
    },
  });

  return tokenAdded;
};
