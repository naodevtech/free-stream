import React, { FC } from "react";
import Movie from "../../atoms/movie/movie";
import { IMovie } from "../../pages/home/home";

export interface MoviesList {
  movies: IMovie[];
}

const MoviesList = ({ movies }: MoviesList) => {
  return (
    <div className="container_movies">
      <div className="box_movies">
        {movies
          ? movies.map((movie) => {
              return (
                <Movie
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
