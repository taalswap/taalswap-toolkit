import React from "react";
import styled from "styled-components";
import { CogIcon } from "../../../components/Svg";
import IconButton from "../../../components/Button/IconButton";
import { MENU_ENTRY_HEIGHT } from "../config";
import { PanelProps, PushedProps } from "../types";
import CakePrice from "./CakePrice";
import ThemeSwitcher from "./ThemeSwitcher";
import SocialLinks from "./SocialLinks";
import LangSelector from "./LangSelector";
import Text from "../../../components/Text/Text";
import Link from "../../../components/Link/Link";
import TwIcon from "./images/tw_icon.svg"
import PageIcon from "./images/page_icon.svg"
import MessageIcon from "./images/message_icon.svg"

interface Props extends PanelProps, PushedProps {}

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  background-color: ${({ theme }) => theme.nav.background};
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 8px;
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 0 58px;
`;

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  cakePriceUsd,
  currentLang,
  langs,
  setLang,
}) => {
  if (!isPushed) {
    return (
      <Container>
      <Text color="rgb(145, 158, 171)" style={{fontSize:"14px",margin:"20px 0 48px",textAlign:"center"}}>&copy; All rights reserved.</Text>
      <SocialEntry>
        <Link style={{marginRight:"36px",cursor:"pointer"}}><img src={TwIcon} alt="tw_icon" /></Link>
        <Link style={{marginRight:"36px",cursor:"pointer"}}><img src={PageIcon} alt="tw_icon" /></Link>
        <Link style={{cursor:"pointer"}}><img src={MessageIcon} alt="tw_icon" /></Link>
      </SocialEntry>
    </Container>
    );
  }

  return (
    <Container>
      <Text color="rgb(145, 158, 171)" style={{fontSize:"14px",margin:"20px 0 48px",textAlign:"center"}}>&copy; All rights reserved.</Text>
      <SocialEntry>
        <Link style={{marginRight:"36px",cursor:"pointer"}}><img src={TwIcon} alt="tw_icon" /></Link>
        <Link style={{marginRight:"36px",cursor:"pointer"}}><img src={PageIcon} alt="tw_icon" /></Link>
        <Link style={{cursor:"pointer"}}><img src={MessageIcon} alt="tw_icon" /></Link>
      </SocialEntry>
    </Container>
  );
};

export default PanelFooter;
