import React from 'react';
import Hero from '../components/Hero';
import Top from '../components/Top';
import Search from '../components/Search';

const Home = () => {

  const token = window.localStorage.getItem('token');
  
  return (
    <div>
        <Hero />
        <Top />
        <Search />
    </div>
  )
}

export default Home