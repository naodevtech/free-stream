import React from "react";
import { useNavigate } from "react-router-dom";

import { IMovie } from "../../pages/home/home";

import NoImage from "../../../assets/illustrations/background_noimage.png";
import "./_movie.scss";

const Movie = ({ Poster, Title, Type, Year, imdbID }: IMovie) => {
  let navigate = useNavigate();

  const showDetailMovie = () => {
    navigate(`/movie/${imdbID}`);
  };

  return (
    <div className="box_movie d-flex flex-column justify-content-center align-items-center">
      <img
        className="poster m-2"
        src={Poster! !== "N/A" ? Poster : NoImage}
        alt="poster_movie"
      />
      <h1 className="title-1">{Title}</h1>
      <h3 className="title-3 m-1">{Year}</h3>
      <button className="btn btn--rounded" onClick={() => showDetailMovie()}>
        EN VOIR PLUS
      </button>
    </div>
  );
};

export default Movie;
