import React from "react";
import { Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Typography
        component="p"
        variant="p"
        bgcolor="#e2f1ff"
        color="primary"
        padding="15px"
        textAlign="center"
        fontWeight="500"
        fontFamily= 'YekanBakh, Roboto, Arial'
      >
        SignUp LogIn project |{" "}
        <Link
          href="https://github.com/AliTaghawi"
          target="blank"
          underline="none"
        >
          Seyed Ali Taghawi
        </Link>
      </Typography>
    </footer>
  );
};

export default Footer;
