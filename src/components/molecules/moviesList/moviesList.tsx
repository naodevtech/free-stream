import React from "react";
import Movie from "../../atoms/movie/movie";
import { IMovie } from "../../pages/home/home";

export interface IMoviesList {
  movies: IMovie[];
}

const MoviesList = ({ movies }: IMoviesList) => {
  return (
    <div className="container_movies">
      <div className="box_movies">
        {movies
          ? movies.map((movie, index) => {
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
