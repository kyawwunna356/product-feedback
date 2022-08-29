import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
  const {user} = useSelector(store => store.auth)
  return (
   <div>
  
    <Routes>
      <Route path="/" element={user ? <Dashboard /> : <Navigate to='/login' replace/>}></Route>
      <Route path="/login" element={user ? <Navigate to='/' replace /> : <Login/>}></Route>
      <Route path="/register" element={user ? <Navigate to='/' replace /> : <Register/>}></Route>
    </Routes>
   </div>
  );
}

export default App;
