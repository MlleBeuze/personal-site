import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import MenuIcon from "@material-ui/icons/Menu";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  topBar: {
    justifyContent: "space-between",
  },
  title: {
    textTransform: "uppercase",
    letterSpacing: "2px",
    fontWeight: 800,
  },
  list: {
    width: 250,
    textTransform: "uppercase",
  },
  menuIcon: {
    // color: theme.palette.black,
  },
}));

export default function TopBar() {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawer(open);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["About me", "Skills", "Experience", "Education"].map(
          (text, index) => (
            <ListItem
              button
              key={text}
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index)}
            >
              <ListItemIcon>
                {index === 0 && <EmojiPeopleIcon />}
                {index === 1 && <CodeIcon />}
                {index === 2 && <WorkIcon />}
                {index === 3 && <SchoolIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  return (
    <AppBar color="secondary" position="fixed">
      <Toolbar className={classes.topBar}>
        <Typography variant="h4" className={classes.title}>
          I'm Mélissa BEUZE
        </Typography>
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon color="primary" className={classes.menuIcon} />
        </Button>
        <SwipeableDrawer
          anchor="right"
          open={drawer}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
      </Toolbar>
    </AppBar>
  );
}
