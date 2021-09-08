import React from "react";
import Button from "../../../components/Button/Button";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";
import styled from "styled-components";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  blockchain: string;
}

const UserButton = styled(Button)`
  
  @media screen and ( max-width:500px ){
    max-width: 84px;  
    font-size: 12px;
  }
`;


const UserBlock: React.FC<Props> = ({ account, login, logout, blockchain }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account, blockchain);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <div>
      {account ? (
        <UserButton
          scale="sm"
          variant="tertiary"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </UserButton>
      ) : (
        <UserButton
          scale="sm"
          onClick={() => {
            onPresentConnectModal();
          }}
          style={{ backgroundColor: "#00ab55",padding:"6px 16px",borderRadius:"8px",fontSize:"14px",height:"36px" }}
        >
          Connect Wallet
        </UserButton>
      )}
    </div>
  );
};

export default React.memo(UserBlock, (prevProps, nextProps) => prevProps === nextProps);
