import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { Button, Svg } from '@my/ui';
import ConnectWalletButton from '../../ConnectWalletButton';
import useAuth from 'hooks/useAuth';
const WalletAccountInfo = () => {
  const { logout } = useAuth();
  const { account } = useWeb3React();

  return (
    <>
      {account ? (
        <Button scale="sm" width="160px" padding="0" onClick={logout}>
          {/* <img className="head_icon" src={karsierNft} alt="header_default" /> */}
          {account ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}` : ''}
          {/* <LogoutIcon /> */}
          <Svg viewBox="0 0 24 24" marginLeft="10px" fill="#83FFC1">
            <path
              fill="#83FFC1"
              d="M16.3 8.09014C15.91 8.48014 15.91 9.10014 16.3 9.49014L18.2 11.3901H9C8.45 11.3901 8 11.8401 8 12.3901C8 12.9401 8.45 13.3901 9 13.3901H18.2L16.3 15.2901C15.91 15.6801 15.91 16.3001 16.3 16.6901C16.69 17.0801 17.31 17.0801 17.7 16.6901L21.29 13.1001C21.68 12.7101 21.68 12.0801 21.29 11.6901L17.7 8.09014C17.31 7.70014 16.69 7.70014 16.3 8.09014ZM4 19.3901H11C11.55 19.3901 12 19.8401 12 20.3901C12 20.9401 11.55 21.3901 11 21.3901H4C2.9 21.3901 2 20.4901 2 19.3901V5.39014C2 4.29014 2.9 3.39014 4 3.39014H11C11.55 3.39014 12 3.84014 12 4.39014C12 4.94014 11.55 5.39014 11 5.39014H4V19.3901Z"
            />
          </Svg>
        </Button>
      ) : (
        <ConnectWalletButton scale="sm" />
      )}
    </>
  );
};
export default WalletAccountInfo;
