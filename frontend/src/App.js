import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/utils/Layout";

import Dashboard from "./pages/Dashboard";
import FeedbackDetail from "./pages/FeedbackDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
  const {user} = useSelector(store => store.auth)
  return (
   <Layout>
    <Routes>
      <Route path="/" element={user ? <Dashboard /> : <Navigate to='/login' replace/>}></Route>
      <Route path="/detail/:id" element={user ? <FeedbackDetail /> : <Navigate to='/login' replace/>}></Route>
      <Route path="/login" element={user ? <Navigate to='/' replace /> : <Login/>}></Route>
      <Route path="/register" element={user ? <Navigate to='/' replace /> : <Register/>}></Route>
    </Routes>
   </Layout>
  );
}

export default App;
