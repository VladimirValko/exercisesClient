import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Top from '../components/Top';
import Search from '../components/Search';

const Home = () => {
  return (
    <div>
        <Hero />
        <Top />
        <Search />
    </div>
  )
}

export default Home