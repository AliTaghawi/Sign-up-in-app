import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

import { ThemeProvider } from "@mui/material";
import faTheme from "../mui/faTheme";

const Fa = () => {
  return (
    <ThemeProvider theme={faTheme}>
      <Layout>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/*" element={<Navigate to="/signup" />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};

export default Fa;
