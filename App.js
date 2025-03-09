import React from 'react';
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import './bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import SetAvatar from './Pages/Avatar/setAvatar';

const App = () => {
  
  const selectedTheme = localStorage.getItem('theme');
  if(selectedTheme){
    document.querySelector("body").setAttribute("data-theme", selectedTheme)
  }

  return (

    <div className= "App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/setAvatar" element={<SetAvatar />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App