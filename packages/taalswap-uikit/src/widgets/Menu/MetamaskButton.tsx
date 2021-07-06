import clsx from "clsx";
import PropTypes from "prop-types";
import ThemeMode from "./ThemeMode";
import React, { useState } from "react";
import { Icon, InlineIcon } from "@iconify/react";
import closeFill from "@iconify-icons/eva/close-fill";
// import settings2Fill from '@iconify-icons/eva/settings-2-fill';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Box, Drawer, Divider, Typography, IconButton } from "@material-ui/core";
// import { MIconButton } from 'src/theme';
import { Link } from "../../components/Link";
import TaalIcon from "../TopBar/images/taalswap.png";
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

const MetamaskButton = () => {
  return (
    <div>
      <Link onClick={() => console.log("icon")}>
        <img width="23" height="23" src={TaalIcon} />
      </Link>
    </div>
  );
};
export default MetamaskButton;
