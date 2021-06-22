import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import { connectorLocalStorageKey } from "./config";
import { Login, Config } from "./types";

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
  mb: string;
}

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss, mb }) => {
  const { title, icon: Icon } = walletConfig;
  return (
    <fieldset style={{boxSizing:"border-box",width:"100%",padding:"8px 0 8px 40px",border:"1px solid #dce0e4",borderRadius:"5px",marginBottom:"16px"}}>
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
      <Text color="text" ml="16px" fontWeight='600'>
        {title}
      </Text>
      </div>
      <div style={{paddingRight:"20px"}}>
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="7px" height="10px" viewBox="0 0 7 10"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,10.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M20 75 l23 -25 -23 -25 c-30 -32 -14 -32 25 0 l30 25 -30 25 c-39 32
-55 32 -25 0z"/>
</g>
</svg>
      </div>
    </Button>
    </fieldset>
  );
};

export default WalletCard;
