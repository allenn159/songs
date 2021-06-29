import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  render() {
    return <div>SongList</div>;
  }
}

// The connect returns a function then invokes it with the second paranthesis.
export default connect()(SongList);
