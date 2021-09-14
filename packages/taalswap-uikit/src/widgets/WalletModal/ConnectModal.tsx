import React from "react";
import styled from "styled-components";
import { Link } from "../../components/Link";
import { HelpIcon } from "../../components/Svg";
import { Modal } from "../Modal";
import WalletCard from "./WalletCard";
import config from "./config";
import { Config, Login, ConnectorNames } from "./types";
import CloseBtn from "./icons/closeBtn";
import { useMatchBreakpoints } from "../../hooks";
import Talken from "./icons/Talken";

interface Props {
  login: Login;
  onDismiss?: () => void;
}

const HelpLink = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 24px;
  color: #637381;
`;

const talkenConnector: Config = {
  title: "Talken",
  icon: Talken,
  connectorId: ConnectorNames.Injected,
};

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => {
  const { isXs, isSm, isMd, isLg, isXl } = useMatchBreakpoints();

  return (
    <Modal title="CONNECT TO A WALLET" onDismiss={onDismiss} style={{ position: "relative" }}>
      <div style={{ position: "absolute", right: "20px", top: "20px", cursor: "pointer" }}>
        <CloseBtn onClick={onDismiss} />
      </div>
      {(isXs || isSm) && (
        <WalletCard key="talken" login={login} walletConfig={talkenConnector} onDismiss={onDismiss} mb="8px" />
      )}
      {config.map((entry, index) => (
        <WalletCard
          key={entry.title}
          login={login}
          walletConfig={entry}
          onDismiss={onDismiss}
          mb={index < config.length - 1 ? "8px" : "0"}
        />
      ))}
      {/* <HelpLink href="https://docs.pancakeswap.finance/help/faq#how-do-i-connect-my-wallet-to-pancakeswap" external>
    <HelpIcon color="#637381" mr="6px" />
      Learn how to connect
    </HelpLink> */}
    </Modal>
  );
};

export default ConnectModal;
