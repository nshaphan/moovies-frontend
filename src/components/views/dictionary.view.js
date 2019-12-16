import React from 'react';

const Dictionary = (props) => {
  return (
    <div>
      <div className="title">
        <h4>Dangerous</h4>
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
      <div className="title">
        <h4>Usage</h4>
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

export default Dictionary;
