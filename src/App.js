import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Toys from "./Pages/Toys/Toys/Toys";
import Footer from "./Pages/Shared/Footer/Footer";
import NotFound from "./Pages/NotFound/NotFound";
import Header from "./Pages/Shared/Header/Header";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Cart from "./Pages/Cart/Cart";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/toys" element={<Toys />} />
            <Route path="/addToCart/:toyId" element={<PrivateRoute><Cart /></PrivateRoute>} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
