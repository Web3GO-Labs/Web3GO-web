import React from 'react';
import styled from 'styled-components';
import { Flex } from '@my/ui';
import WalletAccountInfo from './WalletAccount';
const UserWidget = () => {
  return (
    <User>
      <WalletAccountInfo />
    </User>
  );
};
const User = styled(Flex)`
  flex-direction: column;
  align-items: center;
`;

export default UserWidget;
