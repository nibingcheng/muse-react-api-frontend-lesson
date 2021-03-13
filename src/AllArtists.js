import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class AllArtists extends Component {    
  
    render() {
        
        let artists = this.props.artists;
        let listOfArtists = [];
        listOfArtists = artists.map(item => { //list of each artist's name
        return (
            <div className="AllArtists" key={item.id}>
                <p>
                <Link to={`/artists/${item.id}`}>{item.name}</Link>
                </p>
              </div>
            );
        });
        // console.log('AllArtists', this.props.artists);
        // console.log('AllArtists', listOfArtists);
        return (
            <div className="AllArtists">
                <h1>All Artists</h1>
                <div>{listOfArtists}</div>

                <form onSubmit={(e) => this.props.createArtists(e)}>
                Add a new name: <input placeholder='name' name='name' />
                </form>

            </div>
        );
    }
}

export default AllArtists;