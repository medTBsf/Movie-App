import React, { Component } from "react";
import MoviesList from "./components/movies/MoviesList";
import moviesJson from "./MoviesInformation";
import Filtrage from "./components/filtering/FilterBloc";

class App extends Component {
  constructor() {
    super();
    this.state = {
      moviesJson: moviesJson,
      searchByName: "",
      minRating: 0
    };
  }

  searchByNameFct = e => {
    this.setState({
      searchByName: e.target.value
    });
  };

  searchByMinRatingFct = updateRating => {
    this.setState({
      minRating: updateRating
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <Filtrage
          searchByName={this.searchByNameFct}
          minRating={this.state.minRating}
          searchByRating={update => this.searchByMinRatingFct(update)}
        />
        <MoviesList
          movies={this.state.moviesJson.filter(elt => {
            return (
              elt.title.toLowerCase().indexOf(this.state.searchByName) !== -1 &&
              elt.evaluation >= this.state.minRating
            );
          })}
        />
      </div>
    );
  }
}

export default App;
