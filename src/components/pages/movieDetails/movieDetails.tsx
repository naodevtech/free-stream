import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../../utils/api";
import { IMovie } from "../home/home";

import "./_movieDetail.scss";

function MovieDetails() {
  let { id } = useParams();
  const [movie, setMovie] = useState<IMovie>();

  useEffect(() => {
    const getMovieById = async () => {
      try {
        const movieFetched = await api.get(
          `/?i=${id}&apikey=${process.env.REACT_APP_API_KEY}`
        );
        setMovie(movieFetched.data);
      } catch (error) {
        return error;
      }
    };
    getMovieById();
  }, []);
  return (
    <div className="container_movie_detail">
      <img src={movie?.Poster} alt="poster_movie" />
      <div className="box_infos m-1">
        <h1 className="title-1 mt-1">{movie?.Title}</h1>
        <h3 className="title-3 mt-1">{movie?.Year}</h3>
        <h4 className="title-3 mt-1">{movie?.Director}</h4>
        <h5 className="title-3 mt-1">{movie?.Plot}</h5>
      </div>
    </div>
  );
}

export default MovieDetails;
