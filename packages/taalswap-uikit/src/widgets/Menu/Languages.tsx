import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Box, MenuItem, ListItemIcon, ListItemText, Popover, IconButton } from "@material-ui/core";
import EnglishImg from "./images/ic_flag_en.svg";
import KoreanImg from "./images/ic_flag_kr.svg";
import { Language } from "./types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(2),
    },
  })
);

interface Props {
  currentLang: string;
  langs: Language[];
  setLang: (lang: Language) => void;
}

const Languages: React.FC<Props> = ({ setLang, currentLang, langs }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <IconButton onClick={handleClick}>
        {currentLang === "ko" ? <img src={KoreanImg} /> : <img src={EnglishImg} />}
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Box sx={{ py: 1, width: "200px", maxWidth: "100%" }}>
          {langs.map((lang) => (
            <MenuItem
              key={lang.locale}
              onClick={() => {
                setLang(lang);
                setAnchorEl(null);
              }}
              sx={{ py: 1, px: 2.5 }}
            >
              <ListItemIcon>
                {lang.code === "ko" ? (
                  <Box component="img" src={KoreanImg} />
                ) : (
                  <Box component="img" src={EnglishImg} />
                )}
              </ListItemIcon>

              <ListItemText primaryTypographyProps={{ variant: "body2" }}>{lang.language}</ListItemText>
            </MenuItem>
          ))}
        </Box>
      </Popover>
    </div>
  );
};

export default Languages;
