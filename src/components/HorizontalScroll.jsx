import React, { useEffect, useState } from "react";
import  ExerciseCard  from '../components/ExerciseCard';
import axios from '../utils/axios';
import { useNavigate } from "react-router-dom";



const HorizontalScroll = () => {
  const [exercises, setExercises] = useState([]);
  console.log(exercises);
  const navigate = useNavigate()

  const onClickCard  = (link) => {
    navigate(`/exercises/exercise/${link}`)
  }

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
                      onClick={() => onClickCard(item._id)}
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
