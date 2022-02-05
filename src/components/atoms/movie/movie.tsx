import React from "react";
import { useNavigate } from "react-router-dom";

import { IMovie } from "../../pages/home/home";

import "./_movie.scss";

const Movie = ({ Poster, Title, Type, Year, imdbID }: IMovie) => {
  let navigate = useNavigate();

  const showDetailMovie = () => {
    navigate(`/movie/${imdbID}`);
  };

  return (
    <>
      <img src={Poster} alt="poster_movie" />
      <h1>{Title}</h1>
      <h3>{Year}</h3>
      <button onClick={() => showDetailMovie()}>Show detail</button>
    </>
  );
};

export default Movie;
