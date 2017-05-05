import React from 'react';
import './SideBar.css';

export const SideBar = (props) => {
  const { type, brand, color } = props.data;
  return (
    <div className="content">
      <div className="content-inner">
        <h3>Vehicle: </h3>
        <p>{ type }</p>
        <h3>brand: </h3>
        <p>{ brand }</p>
        <h3>color: </h3>
        <p>{ color }</p>
      </div>
    </div>
  )
};
