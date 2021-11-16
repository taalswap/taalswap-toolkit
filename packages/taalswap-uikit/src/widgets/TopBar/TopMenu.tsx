import React, { JSXElementConstructor, MutableRefObject, RefObject, useEffect, useReducer, useRef } from "react";
import Link from "../../components/Link/Link";
import { Icon, InlineIcon } from "@iconify/react";
import gitbookIcon from "@iconify-icons/simple-icons/gitbook";
import linkExternal from "@iconify-icons/fe/link-external";
import { marginRight } from "styled-system";
import { Login, useWalletModal } from "../WalletModal";
import { Button } from "../../components/Button";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  blockchain: string;
  klaytn: string;
}

interface modalPros {
  account?: string;
  onConnectModal: () => void;
  onClose: () => void;
}

const frontendBaseUrl = process.env.REACT_APP_FRONTEND || "http://localhost:3001";
const interfaceBaseUrl = process.env.REACT_APP_INTERFACE || "http://localhost:3000";

const TopMenu: React.FC<Props> = ({ account, login, logout, blockchain, klaytn }) => {
  const modalEl = useRef<HTMLDivElement>(null);
  const [showResults, setShowResults] = React.useState(Boolean);
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account, blockchain, klaytn);

  const onClose = () => {
    setShowResults(false);
  };

  const onClick = () => {
    const result = showResults;
    console.log(`result : ${result}`);
    console.log(`showResults : ${showResults}`);
    setShowResults(!result);
  };

  const handleClickOutside = ({ target }: any) => {
    if (showResults) {
      setShowResults(false);
    }
    // if(showResults && !modalEl.current(target)) setShowResults(false)
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <input type="button" onClick={onClick} className="mobilenav_icon" />
      {/* {showResults ? <Results ref={modalEl} /> : null} */}
      {showResults && (
        <Results ref={modalEl} account={account} onConnectModal={onPresentConnectModal} onClose={onClose} />
      )}
    </div>
  );
};

const Results = React.forwardRef<HTMLDivElement, modalPros>(({ account, onConnectModal, onClose }) => (
  <div className="hide_menu" id="results">
    <span className="arrow_box">-</span>
    <ul style={{ listStyle: "none" }}>
      <li>
        <Link href={`${frontendBaseUrl}`} style={{ color: "#00ab55", textDecoration: "none" }}>
          <span className="home_icon">home_icon</span>Home
        </Link>
      </li>
      <li>
        <Link href={`${interfaceBaseUrl}/#/swap`} style={{ textDecoration: "none" }}>
          <span className="swap_icon">swap_icon</span>X-Swap
        </Link>
      </li>
      <li>
        <Link href={`${interfaceBaseUrl}/#/liquidity`} style={{ textDecoration: "none" }}>
          <span className="liquidity_icon">liquidity_icon</span>Liquidity
        </Link>
      </li>
      <li>
        <Link href={`${frontendBaseUrl}/farms`} style={{ textDecoration: "none" }}>
          <span className="farms_icon">Farms_icon</span>Farms
        </Link>
      </li>
      <li>
        <Link href={`${frontendBaseUrl}/staking`} style={{ textDecoration: "none" }}>
          <span className="liquidity_icon">liquidity_icon</span>Staking
        </Link>
      </li>

      {!account && (
        <li>
          <Link
            onClick={() => {
              onConnectModal();
              onClose();
            }}
            style={{ textDecoration: "none" }}
          >
            <span className="connect_icon">connect_icon</span>Connect Wallet
          </Link>
        </li>
      )}

      <li>
        <Link href="https://taalswap.info/home" style={{ textDecoration: "none" }}>
          <span className="info_icon">info_icon</span>Info
        </Link>
      </li>
      <li>
        <Link href="https://ido.taalswap.finance" style={{ textDecoration: "none" }}>
          <Icon icon={linkExternal} width="22" style={{ marginRight: "6px", color: "#637381", padding: "0" }} />
          IDO
        </Link>
      </li>
      <li>
        <Link href="https://taalswap.gitbook.io/taalswap-docs-v-2-0" style={{ textDecoration: "none" }}>
          <Icon icon={gitbookIcon} width="20" style={{ marginRight: "8px", color: "#637381" }} />
          Docs
        </Link>
      </li>
    </ul>
  </div>
));

export default TopMenu;
