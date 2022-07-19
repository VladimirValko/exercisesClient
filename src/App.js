import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Favorite from './pages/Favorite';
import Exercise from './pages/Exercise';
import FavoritePage from './pages/FavoritePage';
import Login from './pages/Login';
import { Registration }  from './pages/Registration';

import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/exercises/exercise/:id" element={<Exercise />} />
        <Route path="/exercises/favorite/:id" element={<FavoritePage />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/registration" element={<Registration />}/>
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App