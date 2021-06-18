import React, { useState, useEffect } from "react";
import Link from "../../components/Link/Link";
import TopMenu from "./TopMenu";
import logo_img from "./images/TAAL_Logo.png";
import logo_imgChange from "./images/TAAL_Logo.svg";
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
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <div className={scrollPosition < 50 ? "original_header" : "change_header"}>
      <div className="tabbar_wrap">
        <div>
          <Link href="/">
            <img src={logo_img} alt="logo_img" className="top_logo" />
            <img src={logo_imgChange} alt="logo_img" className="top_logochange" />
          </Link>
        </div>
        <div className="top_menu">
          <div>
            <Link href="/" style={{ color: "#00ab55", textDecoration: "none", fontSize: "14px" }}>
              Home
            </Link>
          </div>
          <div style={{ marginLeft: "30px" }}>
            <Link href="http://localhost:3000/#/swap" style={{ textDecoration: "none", fontSize: "14px" }}>
              Swap
            </Link>
          </div>
          <div style={{ marginLeft: "30px" }}>
            <Link href="http://localhost:3000/#/pool" style={{ textDecoration: "none", fontSize: "14px" }}>
              Liquidity
            </Link>
          </div>
          <div style={{ marginLeft: "30px" }}>
            <Link href="/farms" style={{ textDecoration: "none", fontSize: "14px" }}>
              Farms
            </Link>
          </div>
          <div style={{ marginLeft: "30px" }}>
            <Link href="/pools" style={{ textDecoration: "none", fontSize: "14px" }}>
              Staking
            </Link>
          </div>
          <div style={{ marginLeft: "30px" }}>
            <Link href="/" style={{ textDecoration: "none", fontSize: "14px" }}>
              IDO
            </Link>
          </div>
          <div>
            <input type="button" value="Connect Wallet" className="connect_btn" />
          </div>
        </div>
        <div className="mobile_menu" style={{ cursor: "pointer" }}>
          <TopMenu />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
