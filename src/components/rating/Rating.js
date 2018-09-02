import React from "react";

const Rating = props => {
  let tab = [];
  for (let i = 0; i < 5; i++) {
    if (i < props.rating) {
      tab.push(
        <i
          className="fa fa-star"
          hidden-area="true"
          key={i}
          onClick={() => props.searchByRating(i + 1)}
        />
      );
    } else {
      tab.push(
        <i
          className="fa fa-star-o"
          hidden-area="true"
          key={i}
          onClick={() => props.searchByRating(i + 1)}
        />
      );
    }
  }
  return <div className="rating">{tab}</div>;
};

export default Rating;
