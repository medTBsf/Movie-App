import React from "react";
import "../styles/MovieCard.css";

const MovieCard = () => {
  return (
    <div className="card">
      <div className="poster">
        <img
          alt="Beauty and the Beast"
          src="https://img01.mgo-images.com/image/thumbnail?id=MMV76AB07337340577B6627E7A99D2D1ADDE&ql=70&sizes=310x465"
        />
      </div>
      <div className="description">
        <div className="movie-title">
          <h2>Beauty and the Beast (2017)</h2>
        </div>

        <div className="director">Directed by Bill Condon</div>
        <div className="rating_bloc">
          <div className="rating">
            <i className="fa fa-star" hidden-area="true" />
            <i className="fa fa-star" hidden-area="true" />
            <i className="fa fa-star" hidden-area="true" />
            <i className="fa fa-star" hidden-area="true" />
            <i className="fa fa-star-o" hidden-area="true" />
          </div>
          <span>4/5</span>
        </div>
        <div className="information">
          <p>
            A selfish prince is cursed to become a monster for the rest of his
            life, unless he learns to fall in love with a beautiful young woman
            he keeps prisoner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
