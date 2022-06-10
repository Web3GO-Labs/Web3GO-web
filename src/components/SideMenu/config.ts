import { CHAINKEY } from '@my/sdk';
import IconMarkets from './imgs/iconMarkets';
import IconMyWallet from './imgs/iconMyWallet';

export const chainKey: CHAINKEY = CHAINKEY.SDN;

export interface IMenu {
  text: string;
  link?: string;
  collapsed?: boolean;
  children?: IMenuDetail[] | undefined;
}
export interface IMenuDetail {
  text: string;
  link: string;
  img: any;
  detail: string;
}
export const NFTPathConfig: IMenuDetail[] = [
  {
    text: 'Markets',
    img: IconMarkets,
    link: '/nft/pools',
    detail: 'You can buy and sell your NFT at our Web3GO platform',
  },
  {
    text: 'My Wallet',
    img: IconMyWallet,
    link: '/nft/wallet',
    detail: 'All of your NFT assets are in your Web3GO wallet',
  },
];
export const MorePathConfig: IMenuDetail[] = [
  {
    text: 'Audited By Certik',
    img: IconMarkets,
    link: 'https://www.certik.com/projects/Web3GO',
    detail: 'The Web3GO platform has been officially audited by Certik',
  },
  {
    text: 'Receive NFT in Galaxy',
    img: IconMyWallet,
    link: 'https://galaxy.eco/Web3GO',
    detail: 'All Web3GO NFT works can be freely traded on the Galaxy platform at the same time',
  },
];

export const menuItemsDefault = [
  {
    text: 'Incubator',
    link: '#Incubator',
  },
  {
    text: 'Community',
    link: '#Community',
  },
  {
    text: 'Education',
    link: '#Education',
  },
];
