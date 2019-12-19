import React from 'react';

export default (props) => {
  return (
    <div className="app">
      <main>
        <header>
          <div className="logo">
            <h1>Moovies</h1>
          </div>
        </header>
        { props.children }
      </main>
    </div>
  );
};
