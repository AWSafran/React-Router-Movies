import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    console.log(movie.id);
    console.log(this.state.savedList.filter(film => film.id === movie.id))

    if([] === []){
      console.log("empty = empty");
    }

    if(this.state.savedList.filter(film => film.id === movie.id).length === 0){
      savedList.push(movie);
      console.log("Logic should have worked");
    }


 
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component = {MovieList}/>
        <Route path='/movies/:movieId' render={props => <Movie {...props} addToSavedList={this.addToSavedList} />}/>
      </div>
    );
  }
}
