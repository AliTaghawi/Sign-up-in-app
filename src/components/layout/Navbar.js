import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Container, Button } from "@mui/material";

const Navbar = () => {
  return (
    <div>
      <AppBar position="sticky">
        <Container maxWidth="lg">
          <Toolbar dir="rtl">
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
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
