import React, { Component } from 'react';
import './App.css';
import Home from "./Home";
import { Route, Link, Switch } from "react-router-dom";
import AllArtists from './AllArtists';
import axios from "axios";
import ArtistDetail from './ArtistDetail';

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      artists: [],
    }
  }
  componentDidMount() {
    axios.get(`http://localhost:3000/api/artists`, {
      headers: {
        Accept: 'application/json'
      }
    })
    .then(response => { 
      this.setState({
        artists:response.data.artists
      });
    })
    .catch(err => {
      console.error(err)
    })
  }

  addArtist = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    await axios.post(`http://localhost:3000/api/artists`, { name });
    // await this.getAllArtists()
  }

  async addSong(id, data) {
    await axios.post(`http://localhost:3000/api/artists/${id}/newsong`, { data } );
  }




  render() {
    // console.log(this.state.artists)
    return (
      
      <div className="App">
  
        <Switch>  
          <Route exact path="/" render={routerProps => 
          <Home {...routerProps} {...this.state}/>
          }/>
          
          <Route exact path="/artists" render={routerProps => 
          <AllArtists createArtists={this.addArtist} {...routerProps} {...this.state}/>
          }/>

          <Route path="/artists/:id" render={routerProps => 
          <ArtistDetail createSongs={this.addSong} {...routerProps} {...this.state}/>
          }/>
          
        </Switch>
  
      </div>
  
    );
  }
}

export default App;
