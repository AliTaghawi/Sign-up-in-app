import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
      <ToastContainer />
    </Layout>
  );
}

export default App;
