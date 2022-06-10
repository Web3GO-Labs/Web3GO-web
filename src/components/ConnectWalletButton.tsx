import { Button, useWalletModal } from '@my/ui';
import useAuth from 'hooks/useAuth';

const ConnectWalletButton = (props) => {
  const { login, logout } = useAuth();
  const { onPresentConnectModal } = useWalletModal(login, logout);

  return (
    <Button variant="primary" onClick={onPresentConnectModal} width="120px" {...props}>
      Wallet
    </Button>
  );
};
export default ConnectWalletButton;
