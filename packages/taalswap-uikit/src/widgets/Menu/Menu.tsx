import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import Overlay from "../../components/Overlay/Overlay";
import Flex from "../../components/Box/Flex";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "./components/Logo";
import Panel from "./components/Panel";
import UserBlock from "./components/UserBlock";
import { NavProps } from "./types";
// import Avatar from "./components/Avatar";
import { MENU_HEIGHT, SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";
import { ConnectorNames } from "../WalletModal/types";
import { useWalletModal } from "../WalletModal";
import Languages from "./Languages";
import Settings from "./Settings";
import Button from "../../components/Button/Button";
import ButtonMenu from "../../components/ButtonMenu/ButtonMenu";
import ButtonMenuItem from "../../components/ButtonMenu/ButtonMenuItem";
import NotificationDot from "../../components/NotificationDot/NotificationDot";

// import MetamaskButton from "./MetamaskButton";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  right: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 45px 0;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.nav.background};
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
  z-index: 20;
  transform: translate3d(0, 0, 0);
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)};
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    margin-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
    max-width: ${({ isPushed }) => `calc(100% - ${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px)`};
  }
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const getInitialChainId = (chainId: string | null) => {
  switch (chainId) {
    case "1":
    case "3":
    case "4":
      return 0;
    case "1001":
    case "8217":
      return 1;
    default:
      return 0;
  }
};

const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  cakePriceUsd,
  links,
  // profile,
  children,
  blockchain,
  klaytn
}) => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);
  const { onPresentConnectModal } = useWalletModal(login, logout, account, blockchain);
  const chainId = window.localStorage.getItem("chainId") ?? blockchain;
  // const [index, setIndex] = useState(chainId === "1" ? 0 : 1);
  const [index, setIndex] = useState(() => getInitialChainId(chainId));

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          // setShowMenu(true);
          setShowMenu(false);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsPushed(false);
    }
  }, [isMobile]);

  useEffect(() => {
    switch (chainId) {
      case "1":
      case "3":
      case "4":
        setIndex(0);
        break;
      case "1001":
      case "8217":
        setIndex(1);
        break;
      default:
        setIndex(0);
        break;
    }
  }, [chainId]);

  const backupChainId = (chainId: string) => {
    window.localStorage.setItem('prevChainId', chainId)
  }

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  const handleClick = (newIndex: number) => {
    const curChainId = window.localStorage.getItem('chainId')
    if (curChainId !== null) {
      backupChainId(curChainId)
    }
    if (newIndex !== index || window.localStorage.getItem('chainId') === null) {
      newIndex === 1 ? window.localStorage.setItem("chainId", klaytn) : window.localStorage.setItem("chainId", blockchain);   // Should be called before login
      window.localStorage.setItem("refresh", 'true');  // Should be called before login
      account === undefined ? onPresentConnectModal() : login(ConnectorNames.Injected);
      setIndex(newIndex)
    }
  };

  return (
    <Wrapper>
      <StyledNav showMenu={showMenu}>
        <Logo
          isPushed={isPushed}
          togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
          isDark={isDark}
          href={homeLink?.href ?? "/"}
        />
        <Flex style={{ alignItems: "center" }}>
          {/* <span style={{ cursor: "pointer", marginRight: "14px" }}>
            <MetamaskButton />
          </span> */}
          <ButtonMenu activeIndex={index} onItemClick={handleClick}>
            <ButtonMenuItem style={{ height: "30px", padding: "0 7.5px", fontSize: "14px" }}>Ethereum</ButtonMenuItem>
            <ButtonMenuItem style={{ height: "30px", padding: "0 7.5px", fontSize: "14px" }}>Klaytn</ButtonMenuItem>
          </ButtonMenu>
          <span style={{ border: "1px soild red", cursor: "pointer", padding: "12px 8px" }}>
            <Languages langs={langs} setLang={setLang} currentLang={currentLang} />
          </span>
          <span
            style={{
              border: "1px soild red",
              padding: "12px 8px",
              cursor: "pointer",
              textAlign: "center",
              marginRight: "14px",
            }}
          >
            <Settings isDark={isDark} toggleTheme={toggleTheme} />
          </span>
          <UserBlock account={account} login={login} logout={logout} blockchain={blockchain} />
        </Flex>
      </StyledNav>
      <BodyWrapper>
        <Panel
          isPushed={isPushed && isMobile}
          // isPushed={!isMobile}
          isMobile={isMobile}
          showMenu={showMenu}
          isDark={isDark}
          toggleTheme={toggleTheme}
          langs={langs}
          setLang={setLang}
          currentLang={currentLang}
          cakePriceUsd={cakePriceUsd}
          pushNav={setIsPushed}
          links={links}
        />
        <Inner isPushed={isPushed} showMenu={showMenu}>
          {children}
        </Inner>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
    </Wrapper>
  );
};

export default Menu;
