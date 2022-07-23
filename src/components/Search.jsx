import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import ReactPaginate from "react-paginate";
import axios from "../utils/axios";
import ExerciseCard from "./ExerciseCard";

const Search = () => {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 9;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(exercises.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(exercises.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, exercises]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % exercises.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const addToFavorite = async (exercise) => {
    const { data } = await axios.post(
      `http://localhost:4444/exercises/exercise/${exercise._id}`,
      { ...exercise }
    );
    console.log(data, "ADDED TO FAVORITE");
    window.alert("Exercise added to your Favorits!");
  };

  const handleSearch = async () => {
    if (search) {
      const exercises = await axios.get(
        `http://localhost:4444/exercises/${search}`
      );

      const searchedExercises = exercises.data.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (

    // ПОИСК
    
    <div>
      <div className=" w-screen flex flex-col justify-center items-center text-center mt-32">
        <h2 className="text-4xl font-black w-[600px] text-primary">
          We have more than 1200 exercises Find your favorite one !
        </h2>
        <div className="flex gap-2 items-center justify-center mb-24 mt-12">
          <input
            id="search"
            type="text"
            placeholder="Search for your favorite exercises"
            className="input input-bordered input-secondary w-[900px] shadow-md"
            onChange={(e) => {
              setSearch(e.target.value.toLocaleLowerCase());
            }}
          />
          <button
            onClick={() => handleSearch()}
            class="btn btn-outline btn-primary shadow-sm"
          >
            Search
          </button>
        </div>

        {/* РЕЗУЛЬТАТ ПОИСКА */}

        <div className="flex flex-wrap gap-4 justify-center items-center">
          {currentItems &&
            currentItems.map((exercise, i) => (
              <ExerciseCard
                exercise={exercise}
                key={i}
                action={addToFavorite}
                text={"Add to Favorite"}
              />
            ))}
        </div>
      </div>

      {/* ПАГИНАЦИЯ */}

      <div className=" flex justify-center">
        <Link
          activeClass="active"
          to="search"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            className="flex gap-6 mt-10 mb-24 font-bold text-center text-xl capitalize"
          />
        </Link>
      </div>
    </div>
  );
};

export default Search;
