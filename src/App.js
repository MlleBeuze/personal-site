import React from "react";
import theme from "./theme";
import { ThemeProvider, Toolbar, makeStyles, Fab } from "@material-ui/core";
import TopBar from "./layout/TopBar/TopBar";
import ScrollTop from "./layout/ScrollTop/ScrollTop";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <TopBar />
        <Toolbar id="back-to-top-anchor" />

        <ScrollTop {...props}>
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </ThemeProvider>
    </div>
  );
}

export default App;
