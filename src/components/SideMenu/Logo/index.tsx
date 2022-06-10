import React, { FC } from 'react';
import styled from 'styled-components';
const Logo: FC<{ collapsed: boolean }> = ({ collapsed }) => {
  return (
    <LogoStyle href="/">
      <img src={collapsed ? '/images/logo.webp' : '/images/logo.webp'} alt="logo png" />
    </LogoStyle>
  );
};
const LogoStyle = styled.a`
  display: block;
  margin-right: 0;
  height: 36px;
  ${({ theme }) => theme.mediaQueries.md} {
    margin-top: 0;
    margin-right: 48px;
  }
  img {
    display: block;
    max-width: none;
    padding-left: 8px;
    height: 36px;
    ${({ theme }) => theme.mediaQueries.md} {
      padding-left: 0;
    }
  }
`;
export default Logo;
