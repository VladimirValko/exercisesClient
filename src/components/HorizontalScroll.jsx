import React from "react";
import ExerciseCard from "./ExerciseCard";

export const top = [
  {
    bodyPart: "waist",
    equipment: "assisted",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0011.gif",
    id: "0011",
    name: "assisted hanging knee raise",
    target: "abs",
    goalRep: "15",
    actualRep: "12",
    goalSets: "3",
    actualSets: "3",
  },
  {
    bodyPart: "waist",
    equipment: "assisted",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0010.gif",
    id: "0010",
    name: "assisted hanging knee raise with throw down",
    target: "abs",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, quae at? Fugiat, asperiores veniam accusamus, obcaecati optio laborum voluptatem temporibus unde ea quos commodi. Perferendis fuga quasi consequatur? Qui, corrupti.",
    goalRep: "15",
    actualRep: "12",
    goalSets: "3",
    actualSets: "3",
  },
  {
    bodyPart: "lower legs",
    equipment: "assisted",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1708.gif",
    id: "1708",
    name: "assisted lying calves stretch",
    target: "calves",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, quae at? Fugiat, asperiores veniam accusamus, obcaecati optio laborum voluptatem temporibus unde ea quos commodi. Perferendis fuga quasi consequatur? Qui, corrupti.",
    goalRep: "15",
    actualRep: "12",
    goalSets: "3",
    actualSets: "3",
  },
  {
    bodyPart: "upper legs",
    equipment: "assisted",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1709.gif",
    id: "1709",
    name: "assisted lying glutes stretch",
    target: "glutes",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, quae at? Fugiat, asperiores veniam accusamus, obcaecati optio laborum voluptatem temporibus unde ea quos commodi. Perferendis fuga quasi consequatur? Qui, corrupti.",
    goalRep: "15",
    actualRep: "12",
    goalSets: "3",
    actualSets: "3",
  },
  {
    bodyPart: "upper legs",
    equipment: "assisted",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1710.gif",
    id: "1710",
    name: "assisted lying gluteus and piriformis stretch",
    target: "glutes",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, quae at? Fugiat, asperiores veniam accusamus, obcaecati optio laborum voluptatem temporibus unde ea quos commodi. Perferendis fuga quasi consequatur? Qui, corrupti.",
    goalRep: "15",
    actualRep: "12",
    goalSets: "3",
    actualSets: "3",
  },
  {
    bodyPart: "waist",
    equipment: "assisted",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0012.gif",
    id: "0012",
    name: "assisted lying leg raise with lateral throw down",
    target: "abs",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, quae at? Fugiat, asperiores veniam accusamus, obcaecati optio laborum voluptatem temporibus unde ea quos commodi. Perferendis fuga quasi consequatur? Qui, corrupti.",
    goalRep: "15",
    actualRep: "12",
    goalSets: "3",
    actualSets: "3",
  },
];

const HorizontalScroll = () => {
  return (
    <div className="carousel rounded-box w-screen">
        {top.map((item, i) => (<div className="carousel-item">
                    <ExerciseCard
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
