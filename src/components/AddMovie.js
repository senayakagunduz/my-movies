import React from "react";

export default class AddMovie extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-9">
              <label className="form-label">Name</label>
              <input type="text" class="form-control" aria-label="First name" />
            </div>
            <div className="col-3">
              <label className="form-label">Rating</label>
              <input type="text" className="form-control" />
            </div>
          </div>

          <div class="mb-3">
            <label className="form-label">Image URL</label>
            <input className="form-control" id="exampleFormControlInput1" />
          </div>
          <div class="mb-3">
            <label class="form-label">Overview</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div>
            <button type="button" className="btn btn-danger">
              Add Movie
            </button>
          </div>
        </div>
      </div>
    );
  }
}
