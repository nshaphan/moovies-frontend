import React from 'react';

export default (props) => {
  return (
    <div className="app">
      <main>
        { props.children }
      </main>
    </div>
  );
};
