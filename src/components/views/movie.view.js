import React from 'react';

const Movie = (props) => {
  console.log(props.movies);
  return (
    <div>
      <div className="title">
        <h1>12 Monkeys</h1>
      </div>
      <div className="description">
        <p>
            By now you’ve probably noticed that as you separate your
            Container and Presentational Components, many of your
            Presentational ones just have a render method.
            In these cases, React now allows the component
            to be written as a single function
        </p>
      </div>
    </div>
  );
};

export default Movie;

