import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import { connectorLocalStorageKey } from "./config";
import { Login, Config } from "./types";
import RightArrow from "./icons/arrowIcon"

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
  mb: string;
}

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss, mb }) => {
  const { title, icon: Icon } = walletConfig;
  return (
    <fieldset style={{boxSizing:"border-box",width:"100%",padding:"8px 0 8px 20px",border:"1px solid #dce0e4",borderRadius:"5px",marginBottom:"16px"}}>
      <legend></legend>
    <Button
      width="100%"
      variant="tertiary"
      onClick={() => {
        login(walletConfig.connectorId);
        window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
        onDismiss();
      }}
      style={{ justifyContent: "space-between",background:"initial",padding:"0"}}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
      >
      <div style={{display:"flex",alignItems:'center'}}>
      <Icon width="32px" />
      <Text color="text" ml="16px" fontWeight='600' fontSize='16px'>
        {title}
      </Text>
      </div>
      <div style={{paddingRight:"20px"}}>
      <RightArrow />
      </div>
    </Button>
    </fieldset>
  );
};

export default WalletCard;
