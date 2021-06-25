import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../../components/Svg";
import * as IconModule from "../icons";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel, LinkStatus } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "../types";
import MainLogo from "../../../components/Svg/Icons/MainLogo";
import { Icon, InlineIcon } from "@iconify/react";
import gitbookIcon from "@iconify-icons/simple-icons/gitbook";
import linkExternal from "@iconify-icons/fe/link-external";
import { InfoIcon } from "../../Menu/icons";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
`;

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links }) => {
  const location = useLocation();

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  return (
    <Container>
      <MainLogo />
      {links.map((entry) => {
        const Icon = Icons[entry.icon];
        const iconElement = <Icon width="24px" mr="8px" />;
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

        if (entry.items) {
          const itemsMatchIndex = entry.items.findIndex((item) => item.href === location.pathname);
          const initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;

          return (
            <Accordion
              key={entry.label}
              isPushed={isPushed}
              pushNav={pushNav}
              icon={iconElement}
              label={entry.label}
              status={entry.status}
              initialOpenState={initialOpenState}
              className={calloutClass}
              isActive={entry.items.some((item) => item.href === location.pathname)}
            >
              {isPushed &&
                entry.items.map((item) => (
                  <MenuEntry key={item.href} secondary isActive={item.href === location.pathname} onClick={handleClick}>
                    <MenuLink href={item.href}>
                      <LinkLabel isPushed={isPushed}>{item.label}</LinkLabel>
                      {item.status && (
                        <LinkStatus color={item.status.color} fontSize="14px">
                          {item.status.text}
                        </LinkStatus>
                      )}
                    </MenuLink>
                  </MenuEntry>
                ))}
            </Accordion>
          );
        }
        return (
          <MenuEntry key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
            {entry.icon === "InfoIcon" ? (
              <MenuLink href={entry.href} target="_blank" onClick={handleClick}>
                {iconElement}
                <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
                {entry.status && (
                  <LinkStatus color={entry.status.color} fontSize="14px">
                    {entry.status.text}
                  </LinkStatus>
                )}
              </MenuLink>
            ) : (
              <MenuLink href={entry.href} onClick={handleClick}>
                {iconElement}
                <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
                {entry.status && (
                  <LinkStatus color={entry.status.color} fontSize="14px">
                    {entry.status.text}
                  </LinkStatus>
                )}
              </MenuLink>
            )}
          </MenuEntry>
        );
      })}

      <div style={{ marginTop: "50px" }}>
        <MenuEntry key="ido">
          <MenuLink href="https://ido.taalswap.finance" target="_blank">
            <Icon icon={linkExternal} width="24" />
            <LinkLabel style={{ marginLeft: "8px" }} isPushed={isPushed}>
              IDO
            </LinkLabel>
          </MenuLink>
        </MenuEntry>
        <MenuEntry key="doc">
          <MenuLink href="https://taalswap.gitbook.io/taalswap-docs-v-2-0" target="_blank">
            <Icon icon={gitbookIcon} width="24" />
            <LinkLabel style={{ marginLeft: "8px" }} isPushed={isPushed}>
              Docs
            </LinkLabel>
          </MenuLink>
        </MenuEntry>
      </div>
    </Container>
  );
};

export default PanelBody;
