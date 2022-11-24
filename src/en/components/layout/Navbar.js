import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { langContext } from "../../../App";
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  Typography,
  MenuItem,
  Menu,
  IconButton,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { Box } from "@mui/system";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { lang, setLang } = useContext(langContext);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const clickHandeler = (lang) => {
    handleClose();
    setLang(lang);
  };

  return (
    <div>
      <AppBar position="sticky">
        <Container maxWidth="lg">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Typography
                component="span"
                variant="h6"
                sx={{ fontSize: "13px", mr: "2px" }}
              >
                {lang}
              </Typography>
              <LanguageIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => clickHandeler("EN")}
                {...(lang === "EN" && { disabled: true })}
              >
                EN
              </MenuItem>
              <MenuItem
                onClick={() => clickHandeler("FA")}
                {...(lang === "FA" && { disabled: true })}
              >
                FA
              </MenuItem>
            </Menu>
            <Box component="div">
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button
                  variant="text"
                  color="inherit"
                  sx={{ fontWeight: "bold", fontSize: "15px" }}
                >
                  Sign Up
                </Button>
              </Link>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button
                  variant="text"
                  color="inherit"
                  sx={{ fontWeight: "bold", fontSize: "15px" }}
                >
                  LogIn
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
