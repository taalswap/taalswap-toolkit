import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Box, Grid, Radio, Paper, RadioGroup, CardActionArea, FormControlLabel } from "@material-ui/core";

const CACHE_KEY = "IS_DARK";

interface Props {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  })
);

const ThemeMode: React.FC<Props> = ({ isDark, toggleTheme }) => {
  const classes = useStyles();

  const [themeMode, setThemeMode] = useState(isDark ? "dark" : "light");

  useEffect(() => {
    console.log(`isDark : ${isDark}`);
    setThemeMode(isDark ? "dark" : "light");
  }, [isDark]);
  // let themeMode = isDark ? "dark" : "light";

  return (
    <RadioGroup name="themeMode" className={clsx(classes.root)}>
      <Grid container spacing={2}>
        {["light", "dark"].map((mode) => (
          <Grid item xs={6} key={mode}>
            <Paper
              sx={{
                overflow: "hidden",
                bgcolor: mode === "dark" ? "grey.900" : "common.white",
              }}
              onChange={() => {
                themeMode === "dark" && mode === "light" && toggleTheme(false);
                themeMode === "light" && mode === "dark" && toggleTheme(true);
                // if (themeMode === "light") {
                //   mode === "light" ? null : toggleTheme(true);
                // } else {
                //   mode === "dark" ? toggleTheme(false) : null;
                // }
              }}
            >
              <CardActionArea>
                <Box sx={{ pt: 2, pb: 1, px: 1.5, mb: 4 }}>
                  <Box
                    key="1"
                    sx={{
                      mb: 0.75,
                      height: 48,
                      borderRadius: 0.75,
                      opacity: 0.72,
                      backgroundColor: themeMode === mode ? "#00ab55" : "grey.500",
                    }}
                  />

                  <Box
                    key="2"
                    sx={{
                      mb: 0.75,
                      height: 32,
                      borderRadius: 0.75,
                      opacity: 0.32,
                      backgroundColor: themeMode === mode ? "#00ab55" : "grey.500",
                    }}
                  />
                  <Box
                    key="3"
                    sx={{
                      mb: 0.75,
                      height: 20,
                      borderRadius: 0.75,
                      opacity: 0.16,
                      backgroundColor: themeMode === mode ? "#00ab55" : "grey.500",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    mb: 1,
                    mx: "auto",
                    height: 4,
                    width: "32%",
                    borderRadius: 1,
                    backgroundColor: "grey.500",
                  }}
                />
                <FormControlLabel
                  label=""
                  value={mode}
                  control={<Radio />}
                  sx={{
                    top: 0,
                    margin: 0,
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    "& .MuiRadio-root": { display: "none" },
                  }}
                />
              </CardActionArea>
            </Paper>

            <Box
              sx={{
                border: "1px soild red",
                marginTop: 2,
                mx: "auto",
                borderRadius: "50%",
                backgroundColor: "#00ab55",
                width: themeMode === mode ? 10 : 0,
                height: themeMode === mode ? 10 : 0,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </RadioGroup>
  );
};

export default ThemeMode;
