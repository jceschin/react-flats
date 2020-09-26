import React, { Component } from 'react';

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {props.flats.map(flat => <Flat id={flat.id} key={flat.key} />)}
    </div>
  );
};

export default FlatList;
