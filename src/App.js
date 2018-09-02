import React, { Component } from "react";
import MoviesList from "./components/movies/MoviesList";
import moviesJson from "./MoviesInformation";
import Filtrage from "./components/filtering/FilterBloc";

class App extends Component {
  constructor() {
    super();
    this.state = {
      moviesJson: moviesJson,
      searchByName: ""
    };
  }

  searchByNameFct = e => {
    this.setState({
      searchByName: e.target.value
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <Filtrage searchByName={this.searchByNameFct} />
        <MoviesList
          movies={this.state.moviesJson.filter(elt => {
            return (
              elt.title.toLowerCase().indexOf(this.state.searchByName) !== -1
            );
          })}
        />
      </div>
    );
  }
}

export default App;
