import React, { useEffect, useState } from "react";
import  ExerciseCard  from '../components/ExerciseCard';
import axios from '../utils/axios';
import { useNavigate } from "react-router-dom";



const HorizontalScroll = () => {
  const [exercises, setExercises] = useState([]);
  console.log(exercises);
  const navigate = useNavigate();

  const addToFavorite = async (exercise) => {
    const { data } = await axios.post(
      `http://localhost:4444/exercises/exercise/${exercise._id}`,
      { ...exercise }
    );
    console.log(data, 'ADDED TO FAVORITE');
    window.alert("Exercise added to your Favorits!");
  };

  const onClickCard  = (link) => {
    navigate(`/exercises/exercise/${link}`)
  };

  useEffect(() => {
    const getTop = async () => {
      const TopExercises = await axios.get(`http://localhost:4444/`);
      setExercises(TopExercises.data);
      console.log(TopExercises);
    }
    getTop();
  }, [])

  return (
    <div className="carousel rounded-box w-screen">
        {exercises?.map((item, i) => (<div className="carousel-item">
                    <ExerciseCard
                      onClick={() => onClickCard(item._id)}
                      exercise={item} 
                      key={i}
                      className='m-10'
                      action={addToFavorite}
                      text={"Add to Favorite"}
                    />
            </div>)
            
        )}
    </div>
  );
};

export default HorizontalScroll;
