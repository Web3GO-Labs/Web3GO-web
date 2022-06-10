import { FC } from 'react';
import { menuItemsDefault } from '../config';
import BigNav from './BigNav';
const Nav: FC<{ collapsed: boolean }> = ({ collapsed }) => {
  return collapsed ? null : <BigNav menuItems={menuItemsDefault} />;
};
export default Nav;
