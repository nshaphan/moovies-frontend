import React, { Component } from 'react';
import Movie from '../views/movie.view';
import Dictionary from '../views/dictionary.view';
import axios from 'axios';
import { API_HOST, HEADERS, API_HOST_DICT, HEADERS_DICT } from '../../config';
import store from '../../stores';
import { getMoviesSuccess, setRandomMovie } from '../../actions/movies.actions';
import { connect } from 'react-redux';
import {
  wordsSelectionSuccess,
  setActiveWord,
  setActiveWordIndex,
  getDefinifitonssSuccess,
  setActiveDefinitionIndex,
  setActiveDefinition
} from '../../actions/dictionary.actions';
class HomeContainer extends Component {
  async componentDidMount () {
    const movies = await axios.get(API_HOST + '/schedule', { headers: HEADERS });
    const { data } = movies;
    store.dispatch(getMoviesSuccess(data));
    store.dispatch(setRandomMovie());
  }

  async getSelection (e) {
    const data = window.getSelection().toString();
    const words = data.split(' ');
    store.dispatch(wordsSelectionSuccess(words));
    store.dispatch(setActiveWordIndex(0));
    store.dispatch(setActiveWord());

    const word = (store.getState()).dictionaryState.activeWord;

    const definitions = await axios.get(API_HOST_DICT + '/define', { headers: HEADERS_DICT, params: { term: word } });
    const { list } = definitions.data;

    store.dispatch(getDefinifitonssSuccess(list));
    store.dispatch(setActiveDefinitionIndex(0));
    store.dispatch(setActiveDefinition());
  }

  render () {
    return (
      <section>
        <div className="container">
          <div className="movie">
            <Movie movie={this.props.activeMovie} getSelection={this.getSelection} />
          </div>
          <div className="dictionary">
            <Dictionary definition={this.props.activeDefinition}/>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    movies: store.movieState.movies,
    activeMovie: store.movieState.activeMovie,
    activeWord: store.dictionaryState.activeWord,
    activeDefinition: store.dictionaryState.activeDefinition
  };
};

export default connect(mapStateToProps)(HomeContainer);
