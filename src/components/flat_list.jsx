import React, { Component } from 'react';
import Flat from './flat';

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {props.flats.map(flat => <Flat id={flat.id} key={flat.key} src={flat.imageUrl} />)}
    </div>
  );
};

export default FlatList;
