import axios from "axios";
import React from "react";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = {
    movies: [],
    searchQuery: "",
  };
  /* async componentDidMount() {
    const baseURL = "http://localhost:3008/movies";
    const response = await fetch(baseURL);
    const data = await response.json();
    console.log(data);
    this.setState({ movies: data });
  } */ /*npm install axios yapıp axios kütüphanesini yükleyip veritabanına erişicez*/
  async componentDidMount() {
    const response = await axios.get("http://localhost:3008/movies");
    this.setState({ movies: response.data });
  }

  /* deleteMovie = (movie) => { //normal silme
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState((state) => ({
      movies: newMovieList,
    }));
  }; */
  /*deleteMovie = async (movie) => { //Fetch ile olan
    const baseURL = `http://localhost:3008/movies/${movie.id}`;
    await fetch(baseURL, { method: "Delete" });
  };*/
  /*axios api */
  deleteMovie = async (movie) => {
    //async await demek adresten veriyi almadan veriyi getirmeden çalışmayacaksın anlamına geliyor.
    axios.delete(`http://localhost:3008/movies/${movie.id}`);
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState((state) => ({ movies: newMovieList }));
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
        <MovieList movies={filteredMovies} deleteMovieProp={this.deleteMovie} />
      </div>
    );
  }
}
export default App;
