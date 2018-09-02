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

  addMovie = newMovie => {
    this.setState({
      moviesJson: this.state.moviesJson.concat(newMovie)
    });
  };

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
          addMovie={() =>
            this.addMovie({
              id: Math.random(),
              title: prompt("Movie's title :"),
              year:
                Number.isInteger(Number(prompt("Movie's release date :"))) &&
                Number(prompt("Movie's release date :")) >= 1888 &&
                Number(prompt("Movie's release date :")) <= 2019
                  ? Number(prompt("Movie's release date :"))
                  : 1888,
              imageAff: prompt("Movie's poster URL :"),
              evaluation:
                Number.isInteger(Number(prompt("Movie's rating :"))) &&
                Number(prompt("Movie's rating :")) >= 1 &&
                Number(prompt("Movie's rating :")) <= 5
                  ? Number(prompt("Movie's rating :"))
                  : 1,
              director: prompt("Movie's director's name :"),
              story: prompt("Movie's story :")
            })
          }
        />
        <MoviesList
          movies={this.state.moviesJson.filter(elt => {
            return (
              Object.values(elt).indexOf(null) === -1 &&
              elt.title.toLowerCase().indexOf(this.state.searchByName) !== -1 &&
              elt.evaluation >= this.state.minRating
            );
          })}
        />
        <div>{this.state.newMovieYear}</div>
      </div>
    );
  }
}

export default App;
