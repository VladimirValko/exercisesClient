import React, { useEffect, useState } from "react";
import FavoriteCard from '../components/FavoriteCard'
import axios from '../utils/axios'



const HorizontalScroll = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const getFavorite = async () => {
      const favoriteExercises = await axios.get(`http://localhost:4444/favorite`);
      setExercises(favoriteExercises.data);
    }
    getFavorite();
  }, [])

  return (
    <div className="carousel rounded-box w-screen">
        {exercises?.map((item, i) => (<div className="carousel-item">
                    <FavoriteCard
                     exercise={item} 
                     key={i}
                     className='m-10'
                    />
            </div>)
            
        )}
    </div>
  );
};

export default HorizontalScroll;
