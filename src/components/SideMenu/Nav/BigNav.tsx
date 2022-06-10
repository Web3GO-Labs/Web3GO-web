import { FC } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { IMenu } from '../config';
import { Flex } from '@my/ui';
import CollapseSvg from '../imgs/collapse';
const BigNav: FC<{ menuItems: IMenu[] }> = ({ menuItems }) => {
  const { pathname } = useLocation();
  return (
    <>
      <NavWrap>
        {menuItems.map((item: IMenu, index) => (
          <NavLink
            href={item.link}
            key={index}
            // onClick={() => {
            //   if (item.link.indexOf('https://') > -1) {
            //     window.open(item.link);
            //     return;
            //   }
            // }}
            active={
              (
                item.link === '/'
                  ? pathname === item.link
                  : ['/add', '/remove', '/liquidity'].find((p) => pathname.startsWith(p))
                  ? item.link === '/swap'
                  : ['/dappstake/unbind', '/dappstake/stake', '/dappstake/unstake'].find((p) => pathname.startsWith(p))
                  ? item.link === '/dappstake/stake'
                  : ['/nft/pools', '/nft/wallet/mint', '/nft/wallet/burn'].find((p) => pathname.startsWith(p))
                  ? item.link === '/nft/pools/'
                  : pathname.startsWith(item.link)
              )
                ? 't'
                : 'f'
            }
          >
            {item.text}
            {item.children?.length && <CollapseSvg />}
          </NavLink>
        ))}
      </NavWrap>
    </>
  );
};

const NavWrap = styled(Flex)`
  align-items: center;
  justify-content: flex-start;
  a:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
    svg {
      fill: ${({ theme }) => theme.colors.primaryDark};
      transform: scaleY(-1);
    }
  }
`;
const NavLink = styled.a<{ active: 't' | 'f' }>`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${({ theme, active }) => (active === 't' ? theme.colors.primary : theme.colors.text)};
  transition: all 0.3s ease;
  margin-right: 33px;
  // opacity: ${({ active }) => (active === 't' ? '0.7' : '1')};
  font-weight: bold;
  svg {
    width: 20px;
    fill: ${({ theme, active }) => (active === 't' ? theme.colors.text : theme.colors.textSubtle)};
    transform: ${({ active }) => (active === 't' ? '' : 'scaleY(-1)')};
  }
`;

export default BigNav;
