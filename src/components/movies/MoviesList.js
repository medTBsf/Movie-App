import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = props => {
  return (
    <div className="row">
      {props.movies.map(elt => (
        <MovieCard movie={elt} key={elt.id} />
      ))}
    </div>
  );
};

export default MoviesList;
