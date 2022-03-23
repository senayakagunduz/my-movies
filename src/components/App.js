import axios from "axios";
import React from "react";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import AddMovie from "./AddMovie";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends React.Component {
  state = {
    movies: [],
    searchQuery: "",
  };
  async componentDidMount() {
    const response = await axios.get("http://localhost:3003/movies");
    this.setState({ movies: response.data });
  }
  deleteMovie = async (movie) => {
    axios.delete(`http://localhost:3003/movies/${movie.id}`);
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState((state) => ({
      movies: newMovieList,
    }));
  };
  searchMovie = (event) => {
    //console.log(event.target.value);
    this.setState({ searchQuery: event.target.value });
  };
  render() {
    let filteredMovies = this.state.movies.filter((movie) => {
      return (
        movie.name
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1
      );
    });
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SearchBar searchMovieProp={this.searchMovie} />
          </div>
        </div>
        <div>
          <MovieList
            movies={filteredMovies}
            deleteMovieProp={this.deleteMovie}
          />
        </div>
        <div>
          <AddMovie />
        </div>
      </div>
    );
  }
}
