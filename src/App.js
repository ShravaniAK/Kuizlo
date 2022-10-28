import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import Login from './components/Login';
import {Routes, Route} from "react-router-dom";
import GLogin from './components/GLogin';

function App() {
  return (
    <>

  
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/GLogin" element={<GLogin />} />
  </Routes>

    </>
  );
}

export default App;
