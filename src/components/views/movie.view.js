import React from 'react';
import { createMarkup } from '../../utils/html.util';

const Movie = (props) => {
  const show = props.movie.show;

  if (show === undefined) {
    return <div className="movie-box">Loading...</div>;
  }

  return (
    <div className="movie-box">
      <div className="title">
        <h1>{ show.name }</h1>
      </div>
      <div
        className="description"
        dangerouslySetInnerHTML={createMarkup(show.summary)}
        onMouseUp={props.getSelection} />
    </div>
  );
};

export default Movie;

