import React from "react";
import MinRating from "../rating/Rating";
import "../styles/Filtering.css";

const FilterBloc = props => {
  return (
    <div className="row mt-3 mb-3 p-3 formulaire">
      <div className="col-md-6">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" role="img" aria-label="search">
              &#x1F50D;
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            id="inlineFormInputGroup"
            placeholder="Search a movie"
            onChange={props.searchByName}
          />
        </div>
      </div>
      <div className="col-md-4">
        <div className="min-rating-filter">
          <span>Minimu Rating :</span>
          <MinRating
            rating={props.minRating}
            searchByRating={update => props.searchByRating(update)}
          />
        </div>
      </div>
      <div className="col-md-2 button">
        <button
          type="button"
          className="btn btn-danger"
          onClick={newMovie => props.addMovie(newMovie)}
        >
          Add Movie
        </button>
      </div>
    </div>
  );
};

export default FilterBloc;
