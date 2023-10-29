import './App.css';
import React from 'react';
import {
  Routes, Route
} from "react-router-dom";
import BaseLayout from './components/BaseLayout'
import Home from './pages/Home'

function App() {
  return (
      <Routes>
        <Route path="/" element={<BaseLayout/>}>
          <Route index element={<Home />} />
          <Route path="location/:id" element={<Home/>} />
        </Route>
      </Routes>
  );
}
export default App;
