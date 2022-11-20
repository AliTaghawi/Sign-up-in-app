import { Routes , Route, Navigate } from 'react-router-dom';
import Layout from "./components/layout/Layout";
import SignUp from "./components/SignUp";

function App() {
  return (
      <Layout>
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/*' element={<Navigate to='/signup' />} />
        </Routes>
      </Layout>
  );
}

export default App;
