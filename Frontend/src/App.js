import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from "./Home";
import Info from "./Info";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home />} ></Route>
          <Route path="/info" element={< Info />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
