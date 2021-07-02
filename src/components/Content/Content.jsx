import React from 'react';
import './Content.sass';


const Content = ({ activeMode }) => {
  return (
    <section className='current-control'>Active: { activeMode }</section>
  );
}

export default Content;