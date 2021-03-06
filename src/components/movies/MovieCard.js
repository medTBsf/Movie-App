import React from "react";
import "../styles/MovieCard.css";
import Rating from "../rating/Rating";

const MovieCard = ({ movie }) => {
  return (
    <div className="card col-md-3 col-sm-3 col-xs-4 mb-3">
      <div className="poster">
        <img
          alt=""
          src={
            movie.imageAff
              ? movie.imageAff
              : "https://dev-patel.net/news/wp-content/uploads/2017/04/Filmography_NoPoster.jpg"
          }
        />
      </div>
      <div className="description">
        <div className="movie-title">
          <h2>
            {movie.title ? movie.title : "********"} ({movie.year})
          </h2>
        </div>

        <div className="director">
          Directed by {movie.director ? movie.director : "John Doe"}
        </div>
        <div className="rating_bloc">
          <Rating rating={movie.evaluation} searchByRating={() => {}} />
          <span>
            {movie.evaluation}
            /5
          </span>
        </div>
        <div className="information">
          <p>{movie.story ? movie.story : "Story not available"}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
