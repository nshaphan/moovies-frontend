import React, { Component } from 'react';
import Movie from '../views/movie.view';
import Dictionary from '../views/dictionary.view';

class HomeContainer extends Component {
  render () {
    return (
      <section>
        <div className="container">
          <div className="movie">
            <Movie />
          </div>
          <div className="dictionary">
            <Dictionary />
          </div>
        </div>
      </section>
    );
  }
}

export default HomeContainer;
