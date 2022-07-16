import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Favorite from './pages/Favorite';
import Exercise from './pages/Exercise';
import Login from './pages/Login';

import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/exercises/exercise/:id" element={<Exercise />} />
        <Route path="/login" element={<Login />}/>
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App