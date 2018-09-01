import React, { Component } from "react";
import MoviesList from "./components/movies/MoviesList";
import moviesJson from "./MoviesInformation";
import Filtrage from "./components/filtering/FilterBloc";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Filtrage />
        <MoviesList movies={moviesJson} />
      </div>
    );
  }
}

export default App;
