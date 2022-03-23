import React from "react";

class SearchBar extends React.Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="row">
          <div className="col-10">
            <input
              onChange={this.props.searchMovieProp}
              type="text"
              className="form-control"
              placeholder="search a movie"
              style={{ display: "inline" }}
            />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-md btn-danger"
              style={{ float: "right" }}
            >
              Add movie
            </button>
          </div>
        </div>
      </form>
    );
  }
}
export default SearchBar;
