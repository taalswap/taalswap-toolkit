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
// import MetamaskButton from "../Menu/MetamaskButton";

const frontendBaseUrl = process.env.REACT_APP_FRONTEND || "http://localhost:3001";
const interfaceBaseUrl = process.env.REACT_APP_INTERFACE || "http://localhost:3000";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  langs: Language[];
  setLang: (language: Language) => void;
  currentLang: string;
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
}

const TopBar: React.FC<Props> = ({ account, login, logout, langs, setLang, currentLang, isDark, toggleTheme }) => {
  const theme = useTheme();
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
          <Link href={`${frontendBaseUrl}`}>
            <img src={logo_img_white} alt="logo_img" className="top_logo" />
            <img src={logo_imgChange} alt="logo_img" className="top_logochange" />
          </Link>
        </div>
        <div className="top_menu">
          <div>
            <Link href={`${frontendBaseUrl}`} style={{ color: "#00ab55", textDecoration: "none", fontSize: "14px" }}>
              Home
            </Link>
          </div>
          <div style={{ marginLeft: "30px" }}>
            <Link href={`${interfaceBaseUrl}/#/swap`} style={{ textDecoration: "none", fontSize: "14px" }}>
              Swap
            </Link>
          </div>
          <div style={{ marginLeft: "30px" }}>
            <Link href={`${interfaceBaseUrl}/#/liquidity`} style={{ textDecoration: "none", fontSize: "14px" }}>
              Liquidity
            </Link>
          </div>
          {/* <div style={{ marginLeft: "30px" }}>
            <Link href={`${frontendBaseUrl}/farms`} style={{ textDecoration: "none", fontSize: "14px" }}>
              Farms
            </Link>
          </div>
          <div style={{ marginLeft: "30px" }}>
            <Link href={`${frontendBaseUrl}/staking`} style={{ textDecoration: "none", fontSize: "14px" }}>
              Staking
            </Link>
          </div> */}
          <div style={{ marginLeft: "30px" }}>
            <Link
              href="https://ido.taalswap.finance/"
              target="_blank"
              style={{ textDecoration: "none", fontSize: "14px" }}
            >
              IDO
            </Link>
          </div>
          <div style={{ marginLeft: "30px" }}>
            <Link
              href="https://taalswap.gitbook.io/taalswap-docs-v-2-0"
              target="_blank"
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
          <TopMenu account={account} login={login} logout={logout} />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
