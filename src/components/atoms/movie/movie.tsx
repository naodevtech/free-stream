import React from "react";
import { IMovie } from "../../pages/home/home";

const Movie = ({ Poster, Title, Type, Year, imdbID }: IMovie) => {
  return <h1>{Title}</h1>;
};

export default Movie;
