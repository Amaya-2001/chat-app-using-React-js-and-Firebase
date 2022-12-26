import logo from "./logo.svg";
import "./App.css";
import Register from "./pages/Register.js";
import Login from "./pages/Login.js";
import Home from "./pages/Home.js";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {
  const { currentUser } = useContext(AuthContext);
  //console.log(currentUser);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to={"/login"}></Navigate>;
    }
    return children;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home></Home>
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login></Login>} />
          <Route path="register" element={<Register></Register>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
