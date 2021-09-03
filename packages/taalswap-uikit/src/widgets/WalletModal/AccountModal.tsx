import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import LinkExternal from "../../components/Link/LinkExternal";
import Flex from "../../components/Box/Flex";
import { Modal } from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import { connectorLocalStorageKey } from "./config";
import { ConnectorNames, Login } from "./types";
import CloseBtn from "./icons/closeBtn";

interface Props {
  account: string;
  logout: () => void;
  login: Login;
  onDismiss?: () => void;
  blockchain: string;
  klaytn: string;
}

const renderExplorer = (account: string) => {
  const chainId = parseInt(window.localStorage.getItem("chainId") ?? "1")
  let url
  let explorer
  switch(chainId) {
    case 1:
      url = 'https://etherscan.io/address'
      break
    case 3:
      url = 'https://ropsten.etherscan.io/address'
      break
    case 4:
      url = 'https://rinkeby.etherscan.io/address'
      break
    case 1001:
      url = 'https://baobab.scope.klaytn.com/account'
      break
    case 8217:
      url = 'https://scope.klaytn.com/account'
      break
    default:
      break
  }
  if (chainId > 1000) {
    explorer = 'View on Scope'
  } else {
    explorer = 'View on Etherscan'
  }
  return (
    <LinkExternal small href={`${url}/${account}`} mr="16px">
      {`${explorer}`}
    </LinkExternal>
  )
}

const AccountModal: React.FC<Props> = ({ account, login, logout, blockchain, klaytn, onDismiss = () => null }) => (
  <Modal title="Your wallet" onDismiss={onDismiss} style={{ position: "relative" }}>
    <div style={{ position: "absolute", right: "20px", top: "20px", cursor: "pointer" }}>
      <CloseBtn onClick={onDismiss} />
    </div>
    <div style={{ display: "flex" }}>
      <Text
        fontSize="20px"
        bold
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          marginBottom: "8px",
          width: "90%",
          float: "left",
        }}
      >
        {account}
      </Text>
      <CopyToClipboard toCopy={account}></CopyToClipboard>
    </div>
    <Flex mb="32px">
      { renderExplorer(account) }
    </Flex>
    <Flex justifyContent="space-between">
      <Button
        scale="sm"
        variant="secondary"
        style={{
          minWidth: "88px",
          minHeight: "40px",
          backgroundColor: "#00AB55",
          color: "#fff",
          fontSize: "10px",
          marginRight: "10px",
          lineHeight: "1.2",
        }}
        onClick={() => {
          window.localStorage.setItem("chainId", blockchain);
          login(ConnectorNames.Injected);
          onDismiss();
        }}
      >
        Ethereum
        <br />
        Mainnet
      </Button>
      <Button
        scale="sm"
        variant="secondary"
        style={{
          minWidth: "88px",
          minHeight: "40px",
          backgroundColor: "#00AB55",
          color: "#fff",
          fontSize: "10px",
          lineHeight: "1.2",
          marginRight: "auto",
        }}
        onClick={() => {
          window.localStorage.setItem("chainId", klaytn);
          login(ConnectorNames.Injected);
          onDismiss();
        }}
      >
        Klaytn
        <br />
        Cypress
      </Button>
      <Button
        scale="sm"
        variant="secondary"
        onClick={() => {
          logout();
          window.localStorage.removeItem(connectorLocalStorageKey);
          onDismiss();
        }}
        style={{ minWidth: "88px", height: "auto", minHeight: "40px", fontSize: "14px" }}
      >
        Logout
      </Button>
    </Flex>
  </Modal>
);

export default AccountModal;
