import React, { Component } from 'react';
import Movie from '../views/movie.view';
import Dictionary from '../views/dictionary.view';
import axios from 'axios';
import { API_HOST, HEADERS } from '../../config';
import store from '../../stores';
import { getMoviesSuccess } from '../../actions/movies.actions';
import { connect } from 'react-redux';
class HomeContainer extends Component {
  async componentDidMount () {
    const movies = await axios.get(API_HOST + '/schedule', { headers: HEADERS });
    store.dispatch(getMoviesSuccess(movies));
  }

  render () {
    return (
      <section>
        <div className="container">
          <div className="movie">
            <Movie movies={this.props.movies}/>
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
    movies: store.movieState.movies
  };
};

export default connect(mapStateToProps)(HomeContainer);
