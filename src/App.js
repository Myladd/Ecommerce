import Admin from "pages/Admin";
import Existence from "pages/Existence";
import Home from "pages/Home";
import Login from "pages/Login";
import Orders from "pages/Orders";
import Payment from "pages/Payment";
import Products from "pages/Products";
import SingleProduct from "pages/SingleProduct";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./pages/Cart";
import SuccessfulPayment from "./pages/SuccessfulPayment";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Products" element={<Products />} />
        <Route path="/Existence" element={<Existence />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/checkout" element={<Payment/>} />
        <Route path="/products/:id" element={<SingleProduct/>} />
        <Route path="/successful" element={<SuccessfulPayment/>} />
      </Routes>
    </Router>
  );
}

export default App;


