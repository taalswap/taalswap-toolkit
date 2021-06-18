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
import { useLocation } from "react-router-dom";

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 260;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    drawer: {
      zIndex: 1999,
    },
    drawerPaper: {
      width: DRAWER_WIDTH,
    },
    isHome: {
      color: theme.palette.text.primary,
    },
    isDesktopActive: {
      //   color: theme.palette.primary.black,
      border: "1px solid black",
    },
  })
);

// ----------------------------------------------------------------------

const SettingIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      width="23"
      height="23"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      color="#637381"
      style={{ transform: "rotate(360deg)" }}
    >
      <g fill="currentColor">
        <circle cx="12" cy="12" r="1.5"></circle>
        <path d="M20.32 9.37h-1.09c-.14 0-.24-.11-.3-.26a.34.34 0 0 1 0-.37l.81-.74a1.63 1.63 0 0 0 .5-1.18a1.67 1.67 0 0 0-.5-1.19L18.4 4.26a1.67 1.67 0 0 0-2.37 0l-.77.74a.38.38 0 0 1-.41 0a.34.34 0 0 1-.22-.29V3.68A1.68 1.68 0 0 0 13 2h-1.94a1.69 1.69 0 0 0-1.69 1.68v1.09c0 .14-.11.24-.26.3a.34.34 0 0 1-.37 0L8 4.26a1.72 1.72 0 0 0-1.19-.5a1.65 1.65 0 0 0-1.18.5L4.26 5.6a1.67 1.67 0 0 0 0 2.4l.74.74a.38.38 0 0 1 0 .41a.34.34 0 0 1-.29.22H3.68A1.68 1.68 0 0 0 2 11.05v1.89a1.69 1.69 0 0 0 1.68 1.69h1.09c.14 0 .24.11.3.26a.34.34 0 0 1 0 .37l-.81.74a1.72 1.72 0 0 0-.5 1.19a1.66 1.66 0 0 0 .5 1.19l1.34 1.36a1.67 1.67 0 0 0 2.37 0l.77-.74a.38.38 0 0 1 .41 0a.34.34 0 0 1 .22.29v1.09A1.68 1.68 0 0 0 11.05 22h1.89a1.69 1.69 0 0 0 1.69-1.68v-1.09c0-.14.11-.24.26-.3a.34.34 0 0 1 .37 0l.76.77a1.72 1.72 0 0 0 1.19.5a1.65 1.65 0 0 0 1.18-.5l1.34-1.34a1.67 1.67 0 0 0 0-2.37l-.73-.73a.34.34 0 0 1 0-.37a.34.34 0 0 1 .29-.22h1.09A1.68 1.68 0 0 0 22 13v-1.94a1.69 1.69 0 0 0-1.68-1.69zM12 15.5a3.5 3.5 0 1 1 3.5-3.5a3.5 3.5 0 0 1-3.5 3.5z"></path>
      </g>
    </svg>
  );
};

interface Props {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
}
const Settings: React.FC<Props> = ({ isDark, toggleTheme }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const handleOpenSettings = () => {
    setOpen(true);
  };

  const handleCloseSettings = () => {
    setOpen(false);
  };

  return (
    <div className={clsx(classes.root)}>
      <IconButton onClick={handleOpenSettings}>
        <SettingIcon />
        {/* {landingPage === true ? (
          <Icon
            className={clsx({
              [classes.isHome]: isHome,
            })}
            icon={settings2Fill}
            width={23}
            height={23}
          />
        ) : (
          <Icon icon={settings2Fill} width={23} height={23} />
        )} */}
      </IconButton>

      <Drawer
        open={open}
        anchor="right"
        onClose={handleCloseSettings}
        classes={{
          root: classes.drawer,
          paper: classes.drawerPaper,
        }}
      >
        <Box
          sx={{
            py: 2,
            pr: 1,
            pl: 2.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="subtitle1">Settings</Typography>
          <IconButton onClick={handleCloseSettings}>
            <Icon icon={closeFill} width={20} height={20} />
          </IconButton>
        </Box>
        <Divider />

        <Box sx={{ p: 2.5 }}>
          <Typography variant="subtitle2" gutterBottom>
            Mode
          </Typography>
          <ThemeMode isDark={isDark} toggleTheme={toggleTheme} />

          <Box sx={{ my: 3 }} />
        </Box>
      </Drawer>
    </div>
  );
};
export default Settings;
