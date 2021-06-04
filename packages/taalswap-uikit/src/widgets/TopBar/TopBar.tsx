import React from "react";
import Link from "../../components/Link/Link";
import TopMenu from "./TopMenu";
import logo_img from "./images/TAAL_Logo.png";
import Button from "../../components/Button/Button";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
}

const TopBar: React.FC<Props> = ({ account, login, logout }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;

  return (
    <div className="tabbar_wrap">
      <div>
        <Link href="http://localhost:3001">
          <img src={logo_img} alt="logo_img" className="top_logo" />
        </Link>
      </div>
      <div className="top_menu">
        <div>
          <Link href="http://localhost:3001" style={{ color: "#212b36", textDecoration: "none" }}>
            Home
          </Link>
        </div>
        <div style={{ marginLeft: "30px" }}>
          <Link href="http://localhost:3000/#/swap" style={{ color: "#212b36", textDecoration: "none" }}>
            Swap
          </Link>
        </div>
        <div style={{ marginLeft: "30px" }}>
          <Link href="http://localhost:3000/#/pool" style={{ color: "#212b36", textDecoration: "none" }}>
            Pools
          </Link>
        </div>
        <div style={{ marginLeft: "30px" }}>
          <Link href="http://localhost:3001/farms" style={{ color: "#212b36", textDecoration: "none" }}>
            Farming
          </Link>
        </div>
        <div style={{ marginLeft: "30px" }}>
          <Link href="http://localhost:3001/pools" style={{ color: "#212b36", textDecoration: "none" }}>
            Staking
          </Link>
        </div>
        <div style={{ marginLeft: "30px" }}>
          <Link href="https://taalswap.finance" target="_blank" style={{ color: "#212b36", textDecoration: "none" }}>
            IDO
          </Link>
        </div>
        <div style={{ marginLeft: "30px" }}>
          <Link
            href="https://taalswap.gitbook.io/taalswap-documents"
            target="_blank"
            style={{ color: "#212b36", textDecoration: "none" }}
          >
            Docs
          </Link>
        </div>
        {/* <div>
          <input type="button" value="Connect Wallet" className="connect_btn" />
        </div> */}
        <div>
          {!account && (
            <Button
              scale="sm"
              onClick={() => {
                onPresentConnectModal();
              }}
              style={{ backgroundColor: "#00ab55" }}
              className="connect_btn"
            >
              Connect Wallet
            </Button>
          )}
        </div>
      </div>
      <div className="mobile_menu" style={{ cursor: "pointer" }}>
        <TopMenu />
      </div>
    </div>
  );
};

export default TopBar;
