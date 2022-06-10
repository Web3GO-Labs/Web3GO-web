import { FC } from 'react';
import styled from 'styled-components';
import { Flex } from '@my/ui';
import Logo from 'components/SideMenu/Logo';
import Nav from 'components/SideMenu/Nav';
import UserWidget from 'components/SideMenu/UserWidget';
const HomeHeader: FC<{ className?: string; setCollapsed: (collapsed: boolean) => void; collapsed: boolean }> = ({
  className,
  collapsed,
}) => {
  return (
    <HomeHeaderStyled>
      <div className="inner">
        <FlFlex>
          <Logo collapsed={collapsed} />
          <div className="right">
            <Nav collapsed={collapsed} />
            <UserWidget />
          </div>
        </FlFlex>
      </div>
    </HomeHeaderStyled>
  );
};
const FlFlex = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const HomeHeaderStyled = styled.div`
  width: 100%;
  transition: all 0.3s ease;
  z-index: 10;
  padding: 40px 20px;
  .inner {
    max-width: ${({ theme }) => theme.siteWidth}px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${({ theme }) => theme.mediaQueries.md} {
      padding: 16px 20px;
      border-radius: 8px;
      background: #ffffff;
      border: 3px solid #000000;
      box-shadow: 4px 4px 0 0 #000000;
    }
    .right {
      display: flex;
      justify-content: end;
    }
  }
`;
export default HomeHeader;
