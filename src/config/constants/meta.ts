import { ContextApi } from 'contexts/Localization/types';
import { PageMeta } from './types';

export const DEFAULT_META: PageMeta = {
  title: 'Web3GO',
  description: 'Web3GO',
  image: 'https://kaco.finance/images/hero.png',
};

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `Compounding | Web3GO`,
      };
    case '/farms':
      return {
        title: `Farms | Web3GO`,
      };
    case '/dappstake/stake':
      return {
        title: `Stake | Web3GO`,
      };
    case '/dappstake/unbind':
      return {
        title: `Unbind | Web3GO`,
      };
    default:
      return null;
  }
};
