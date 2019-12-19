import React, { Component } from 'react';
import Movie from '../views/movie.view';
import Dictionary from '../views/dictionary.view';
import axios from 'axios';
import { API_HOST, HEADERS } from '../../config';
import store from '../../stores';
import { getMoviesSuccess, setRandomMovie } from '../../actions/movies.actions';
import { connect } from 'react-redux';
class HomeContainer extends Component {
  async componentDidMount () {
    const movies = await axios.get(API_HOST + '/schedule', { headers: HEADERS });
    const { data } = movies;
    store.dispatch(getMoviesSuccess(data));
    store.dispatch(setRandomMovie());
  }

  getSelection (e) {
    const data = window.getSelection().toString();
    console.log(data);
  }

  render () {
    return (
      <section>
        <div className="container">
          <div className="movie">
            <Movie movie={this.props.activeMovie} getSelection={this.getSelection} />
          </div>
          <div className="dictionary">
            <Dictionary />
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    movies: store.movieState.movies,
    activeMovie: store.movieState.activeMovie
  };
};

export default connect(mapStateToProps)(HomeContainer);
