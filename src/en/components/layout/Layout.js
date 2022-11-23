import React from "react";
import { Container } from "@mui/material";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container
        maxWidth="lg"
        sx={{ minHeight: "calc(100vh - 115px)"}}
      >
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
