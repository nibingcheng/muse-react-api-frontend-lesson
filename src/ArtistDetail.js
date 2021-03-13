import React, { Component } from 'react';
import './App.css';



class ArtistDetail extends Component {
    handleCreateSongs = (e) => {
        e.preventDefault();
        console.log('Add song:', e.target.newTitle.value);
        this.props.createSongs(this.props.match.params.id, e.target.newTitle.value);
    }
    render() {
       
        let artist = this.props.artists.find(item => item.id == this.props.match.params.id);          
        let listOfSongs = [];
        listOfSongs = artist.Songs.map(item => { //list of each Song's title
        return (
            <div className="Songs" key={item.id}>
                <li>{item.title}</li>
            </div>
            );
        });
        
        
        return (
            
            <div>
                <p>Artist detail page!!!</p>
                <div className="artistName">
                    <h2>{artist.name}</h2>
                </div>
                <div>
                    {listOfSongs}
                </div>
                   
                <form onSubmit={this.handleCreateSongs}>
                    Enter title: <input type="text" name='newTitle'/>
                    <input type="submit" />
                </form>

            </div>
        );
    }
}



export default ArtistDetail;