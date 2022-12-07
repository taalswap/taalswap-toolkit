import React, { useState, useEffect } from "react";
import Link from "../../components/Link/Link";
import TopMenu from "./TopMenu";
import logo_img from "./images/TAAL_Logo.png";
import logo_img_white from "./images/TAAL_Logo_A_bg.svg";
import logo_imgChange from "./images/TAAL_Logo.svg";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";
import { useTheme } from "styled-components";
import Button from "../../components/Button/Button";
import Languages from "../Menu/Languages";
import { Language } from "../Menu";
import Settings from "../Menu/Settings";
import TaalIcon from "./images/taalswap.png";
import { MetamaskIcon } from "../../components/Svg";
import MetamaskButton from "../Menu/MetamaskButton";
import ButtonMenu from "../../components/ButtonMenu/ButtonMenu";
import ButtonMenuItem from "../../components/ButtonMenu/ButtonMenuItem";
import NotificationDot from "../../components/NotificationDot/NotificationDot";

// import MetamaskButton from "../Menu/MetamaskButton";


interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  langs: Language[];
  setLang: (language: Language) => void;
  currentLang: string;
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
  blockchain: string;
  klaytn: string;
  binance: string;
  polygon: string;
}

const TopBar: React.FC<Props> = ({
  account,
  login,
  logout,
  langs,
  setLang,
  currentLang,
  isDark,
  toggleTheme,
  blockchain,
  klaytn,
  binance,
  polygon
}) => {
  const theme = useTheme();
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account, blockchain, klaytn, binance, polygon);
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

          <Link href='/'>
            <img src={logo_img_white} alt="logo_img" className="top_logo" />
            <img src={logo_imgChange} alt="logo_img" className="top_logochange" />
          </Link>
        </div>
        <div className="top_menu">
          {/*<div>*/}
          {/*  <ButtonMenu>*/}
          {/*    <ButtonMenuItem  style={{ height: '30px', padding: '0 7.5px', fontSize: '14px' }}>*/}
          {/*      Ethereum*/}
          {/*    </ButtonMenuItem>*/}
          {/*    <NotificationDot>*/}
          {/*      <ButtonMenuItem  style={{ height: '30px',padding: '0 7.5px', fontSize: '14px' }}>*/}
          {/*        Klaytn*/}
          {/*      </ButtonMenuItem>*/}
          {/*    </NotificationDot>*/}
          {/*  </ButtonMenu>*/}
          {/*</div> */}
          <div>
            <Link href='/' style={{ color: "#00ab55", textDecoration: "none", fontSize: "14px" }}>
              Home
            </Link>
          </div>
          <div style={{ marginLeft: "30px" }}>
            {/*<Link href={`${interfaceBaseUrl}/#/xswap`} style={{ textDecoration: "none", fontSize: "14px" }}>*/}
            {/*  X-Swap*/}
            {/*</Link>*/}
            <Link href='/xswap' style={{ textDecoration: "none", fontSize: "14px" }}>
              X-Swap
            </Link>
          </div>
          <div style={{ marginLeft: "30px" }}>
            {/*<Link href={`${interfaceBaseUrl}/#/liquidity`} style={{ textDecoration: "none", fontSize: "14px" }}>*/}
            {/*  Liquidity*/}
            {/*</Link>*/}
            <Link href='/liquidity' style={{ textDecoration: "none", fontSize: "14px" }}>
              Liquidity
            </Link>
          </div>
          {/*<div style={{ marginLeft: "30px" }}>*/}
          {/*  <Link href='/farms' style={{ textDecoration: "none", fontSize: "14px" }}>*/}
          {/*    Farms*/}
          {/*  </Link>*/}
          {/*</div>*/}
          {/*<div style={{ marginLeft: "30px" }}>*/}
          {/*  <Link href='/staking' style={{ textDecoration: "none", fontSize: "14px" }}>*/}
          {/*    Staking*/}
          {/*  </Link>*/}
          {/*</div>*/}
          <div style={{ marginLeft: "30px" }}>
            <Link href="https://taalswap.info/home" style={{ textDecoration: "none", fontSize: "14px" }}>
              Info
            </Link>
          </div>
          <div style={{ marginLeft: "30px" }}>
            <Link href="https://ido.taalswap.finance/" style={{ textDecoration: "none", fontSize: "14px" }}>
              IDO
            </Link>
          </div>
          <div style={{ marginLeft: "30px" }}>
            <Link
              href="https://docs.taalswap.finance/taalswap-docs"
              style={{ textDecoration: "none", fontSize: "14px" }}
            >
              Docs
            </Link>
          </div>
          {/* <div style={{ marginLeft: "30px" }}>
            <MetamaskButton />
          </div> */}
          <div style={{ marginLeft: "20px" }}>
            <Languages langs={langs} setLang={setLang} currentLang={currentLang} />
          </div>
          <div style={{ marginLeft: "10px" }}>
            <Settings isDark={isDark} toggleTheme={toggleTheme} />
          </div>
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
          <div style={{ marginRight: "10px" }}>
            <Languages langs={langs} setLang={setLang} currentLang={currentLang} />
          </div>
          <div style={{ marginRight: "10px" }}>
            <Settings isDark={isDark} toggleTheme={toggleTheme} />
          </div>
          <TopMenu account={account} login={login} logout={logout} blockchain={blockchain} klaytn={klaytn} binance={binance} polygon={polygon}/>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
