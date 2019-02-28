import React, { Component } from "react";

export default class MovieCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        title: "",
        director: "",
        metascore: "",
        stars: []
      }
    };
  }
  render() {
    return (
      <form>
        <input
          type="text"
          name="title"
          value={this.state.movie.title}
          placeholder="Title"
          //   onChange={props.handleChanges}
        />
        <input
          type="text"
          name="director"
          value={this.state.movie.director}
          placeholder="Director"
          //   onChange={props.handleChanges}
        />
        <input
          type="text"
          name="metascore"
          value={this.state.movie.metascore}
          placeholder="Metascore"
          //   onChange={props.handleChanges}
        />
        <input
          type="text"
          name="stars"
          value={this.state.movie.stars}
          placeholder="Stars"
          //   onChange={props.handleChanges}
        />
        <button>Add Movie</button>
      </form>
    );
  }
}
