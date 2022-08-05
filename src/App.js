import MenuOne from './components/Menu';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Products from "./pages/Products";
import SingleProduct from './pages/SingleProduct';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MenuOne/>} />
        <Route path='/Products' element={<Products/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Product/:id' element={<SingleProduct />} />
        <Route path='/Admin' element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;


