import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { Button, LogoutIcon } from '@my/ui';
import ConnectWalletButton from '../../ConnectWalletButton';
import useAuth from 'hooks/useAuth';
const WalletAccountInfo = () => {
  const { logout } = useAuth();
  const { account } = useWeb3React();

  return (
    <>
      {account ? (
        <Button variant="tertiary" scale="sm" width="160px" padding="0">
          {/* <img className="head_icon" src={karsierNft} alt="header_default" /> */}
          {account ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}` : ''}
          <LogoutIcon onClick={logout} marginLeft="10px" />
          {/* add kaco header img */}
        </Button>
      ) : (
        <ConnectWalletButton scale="sm" />
      )}
    </>
  );
};
export default WalletAccountInfo;
