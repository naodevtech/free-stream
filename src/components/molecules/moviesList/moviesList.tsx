import React, { useState } from "react";

import Movie from "../../atoms/movie/movie";
import { IMovie } from "../../pages/home/home";

import "./_moviesList.scss";
export interface IMoviesList {
  movies: IMovie[];
}

const MoviesList = ({ movies }: IMoviesList) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container_movies">
      <input
        type="text"
        placeholder="Recherchez un film par son titre..."
        value={searchTerm}
        onChange={handleChange}
      />
      <div className="box_movies">
        {movies
          ? movies
              .filter((movie) => {
                return movie.Title.includes(searchTerm);
              })
              .map((movie, index) => {
                return (
                  <Movie
                    key={index}
                    Poster={movie.Poster}
                    Title={movie.Title}
                    Type={movie.Type}
                    Year={movie.Year}
                    imdbID={movie.imdbID}
                  />
                );
              })
          : null}
      </div>
    </div>
  );
};

export default MoviesList;
