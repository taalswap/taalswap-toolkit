import React from "react";
import Button from "../../../components/Button/Button";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  blockchain: string;
}

const UserBlock: React.FC<Props> = ({ account, login, logout, blockchain }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account, blockchain);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <div>
      {account ? (
        <Button
          scale="sm"
          variant="tertiary"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <Button
          scale="sm"
          onClick={() => {
            onPresentConnectModal();
          }}
          style={{ backgroundColor: "#00ab55",padding:"6px 16px",borderRadius:"8px",fontSize:"14px",height:"36px" }}
        >
          Connect Wallet
        </Button>
      )}
    </div>
  );
};

export default React.memo(UserBlock, (prevProps, nextProps) => prevProps === nextProps);
