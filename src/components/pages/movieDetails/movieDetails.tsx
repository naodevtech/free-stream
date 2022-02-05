import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../../utils/api";
import { IMovie } from "../home/home";

function MovieDetails() {
  let { id } = useParams();
  const [movie, setMovie] = useState<IMovie>();

  useEffect(() => {
    const getMovieById = async () => {
      try {
        const movieFetched = await api.get(`/?i=${id}&apikey=c3e4f26d`);
        console.log(movieFetched);
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
      <h1>{movie?.Title}</h1>
      <h3>{movie?.Year}</h3>
      <h4>{movie?.Director}</h4>
      <h5>{movie?.Plot}</h5>
    </div>
  );
}

export default MovieDetails;
