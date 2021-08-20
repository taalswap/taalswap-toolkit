import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import LinkExternal from "../../components/Link/LinkExternal";
import Flex from "../../components/Box/Flex";
import { Modal } from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import { connectorLocalStorageKey } from "./config";
import CloseBtn from "./icons/closeBtn"

interface Props {
  account: string;
  logout: () => void;
  onDismiss?: () => void;
}

const AccountModal: React.FC<Props> = ({ account, logout, onDismiss = () => null }) => (
  <Modal title="Your wallet" onDismiss={onDismiss} style={{position:'relative'}}>
    <div style={{position:"absolute",right:"20px",top:'20px',cursor:'pointer'}}>
      <CloseBtn onClick={onDismiss}/>
    </div>
    <div style={{ display: "flex"}}>
      <Text
        fontSize="20px"
        bold
        style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px", width: "90%",float: "left" }}
      >
        {account}
      </Text>
      <CopyToClipboard toCopy={account}></CopyToClipboard>
    </div>
    <Flex mb="32px">
      <LinkExternal small href={`https://rinkeby.etherscan.io/address/${account}`} mr="16px">
        View on Etherscan
      </LinkExternal>
      <LinkExternal small href={`#`} mr="16px">
        View on Klaytnscope
      </LinkExternal>
    </Flex>
    <Flex justifyContent="space-between">
   
      <Button
        scale="sm"
        variant="secondary"
        style={{ minWidth: "88px",
          minHeight:"40px", 
          backgroundColor: "#00AB55", 
          color:"#fff", 
          fontSize:"10px", 
          marginRight:"10px",
          lineHeight:"1.2",
      }}
      >
        Ethereum<br/>
        Mainnet
      </Button>
      <Button
        scale="sm"
        variant="secondary"
        style={{  minWidth: "88px", 
          minHeight:"40px", 
          backgroundColor: "#00AB55", 
          color:"#fff", 
          fontSize:"10px",
          lineHeight:"1.2",
          marginRight:"auto"
        }}
      >
        Klaytn<br/>
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
        style={{ minWidth: "88px", 
          height:'auto', 
          minHeight:"40px", 
          fontSize:"14px" }}
      >
        Logout
      </Button>
    </Flex>
  </Modal>
);

export default AccountModal;
