import React, { Component } from "react";
import MoviesList from "./components/movies/MoviesList";
import moviesJson from "./MoviesInformation";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <MoviesList movies={moviesJson} />
      </div>
    );
  }
}

export default App;
