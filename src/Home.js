import React, { Component } from "react";

class Home extends Component {
  render() {
    // console.log('Home', this.props)
    return (
      <div>
        <h1>This is the homepage!</h1>
        <a href="/artists">List of all artists</a> 
      </div>
    );
  }
}

export default Home;
