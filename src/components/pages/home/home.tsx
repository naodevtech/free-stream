import React, { useEffect, useState } from "react";

import api from "../../../utils/api";
import MoviesList from "../../molecules/moviesList/moviesList";

import "./_home.scss";

export interface IMovie {
  Title: string;
  Poster: string;
  Type: string;
  Year: string;
  imdbID: string;
}

function Home() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const moviesFetched = await api.get("/?s=inception&apikey=c3e4f26d");
        setMovies(moviesFetched.data.Search);
      } catch (error) {
        return error;
      }
    };
    getAllMovies();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <MoviesList movies={movies} />
    </div>
  );
}

export default Home;
