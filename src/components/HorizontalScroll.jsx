import React, { useEffect, useState } from "react";
import  ExerciseCard  from '../components/ExerciseCard'
import axios from '../utils/axios'



const HorizontalScroll = () => {
  const [exercises, setExercises] = useState([]);
  console.log(exercises);

  useEffect(() => {
    const getFavorite = async () => {
      const TopExercises = await axios.get(`http://localhost:4444/`);
      setExercises(TopExercises.data);
    }
    getFavorite();
  }, [])

  return (
    <div className="carousel rounded-box w-screen">
        {exercises?.map((item, i) => (<div className="carousel-item">
                    <ExerciseCard
                      link={`/exercises/exercise/${item._id}`}
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
