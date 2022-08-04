// import MenuOne from './components/Menu';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Admin' element={<Admin/>} />
      </Routes>
    </Router>
  );
}

export default App;


