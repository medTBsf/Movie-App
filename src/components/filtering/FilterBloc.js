import React from "react";
import MinRating from "../rating/Rating";
import "../styles/Filtering.css";

const FilterBloc = () => {
  return (
    <div className="row mt-3 mb-3 p-3 formulaire">
      <div className="col-md-6">
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text">&#x1F50D;</div>
          </div>
          <input
            type="text"
            class="form-control"
            id="inlineFormInputGroup"
            placeholder="Search a movie"
          />
        </div>
      </div>
      <div className="col-md-4">
        <div className="min-rating-filter">
          <span>Minimu Rating :</span>
          <MinRating />
        </div>
      </div>
      <div className="col-md-2 button">
        <button type="button" className="btn btn-danger">
          Add Movie
        </button>
      </div>
    </div>
  );
};

export default FilterBloc;
