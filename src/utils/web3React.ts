import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { BscConnector } from '@binance-chain/bsc-connector';
import { ConnectorNames } from '@my/ui';
import { ethers } from 'ethers';
import getNodeUrl from './getRpcUrl';
import { chainId } from 'config/constants/tokens';

const POLLING_INTERVAL = 12000;
const rpcUrl = getNodeUrl();
// supportedChainIds
const supportedChainIds = [
  1, 3, 4, 5, 42, 52, 56, 81, 82, 87, 97, 100, 137, 226, 336, 592, 1337, 1887, 31337, 71393, 80001, 1666700000,
  1666600000, 1666600001, 1666600002, 1666600003,
];
const injected = new InjectedConnector({
  supportedChainIds: supportedChainIds,
});

const walletconnect = new WalletConnectConnector({
  rpc: { [chainId]: rpcUrl },
  bridge: 'https://pancakeswap.bridge.walletconnect.org/',
  qrcode: true,
  // pollingInterval: POLLING_INTERVAL,
});

const bscConnector = new BscConnector({ supportedChainIds: supportedChainIds });

export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
  [ConnectorNames.BSC]: bscConnector,
};

export const getLibrary = (provider): ethers.providers.Web3Provider => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
};

/**
 * BSC Wallet requires a different sign method
 * @see https://docs.binance.org/smart-chain/wallet/wallet_api.html#binancechainbnbsignaddress-string-message-string-promisepublickey-string-signature-string
 */
export const signMessage = async (provider: any, account: string, message: string): Promise<string> => {
  if (window.BinanceChain) {
    const { signature } = await window.BinanceChain.bnbSign(account, message);
    return signature;
  }

  /**
   * Wallet Connect does not sign the message correctly unless you use their method
   * @see https://github.com/WalletConnect/walletconnect-monorepo/issues/462
   */
  if (provider.provider?.wc) {
    const wcMessage = ethers.utils.hexlify(ethers.utils.toUtf8Bytes(message));
    const signature = await provider.provider?.wc.signPersonalMessage([wcMessage, account]);
    return signature;
  }

  return provider.getSigner(account).signMessage(message);
};
