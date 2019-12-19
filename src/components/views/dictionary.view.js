import React from 'react';

const Dictionary = (props) => {
  if (props.definition === '') {
    return (<div className="dict-box">
      <div><h3 className="title">Dictionary</h3></div>
      <h5>No word selected</h5>
    </div>);
  }

  return (
    <div className="dict-box">
      <div><h3 className="title">Dictionary</h3></div>
      <div className="title">
        <h4>{ props.definition.word }</h4>
      </div>
      <div className="description">
        <p>
          { props.definition.definition.replace('[', ' ').replace(']', ' ') }
        </p>
      </div>
      <div className="title">
        <h4>Usage</h4>
      </div>
      <div className="description">
        <p>
          { props.definition.example }
        </p>
      </div>
    </div>
  );
};

export default Dictionary;
