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
  Director?: string;
  Plot?: string;
}

function Home() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const moviesFetched = await api.get(
          `/?s=inception&apikey=${process.env.REACT_APP_API_KEY}`
        );
        setMovies(moviesFetched.data.Search);
      } catch (error) {
        return error;
      }
    };
    getAllMovies();
  }, []);

  return (
    <div className="container_home">
      <MoviesList movies={movies} />
    </div>
  );
}

export default Home;
