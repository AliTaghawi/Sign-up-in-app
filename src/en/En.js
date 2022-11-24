import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";


const En = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/*" element={<Navigate to="/signup" />} />
      </Routes>
    </Layout>
  );
};

export default En;