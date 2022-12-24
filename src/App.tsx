import React from 'react';
import "./index.css"
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import { HashRouter, Route, Routes, Navigate} from "react-router-dom"

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
