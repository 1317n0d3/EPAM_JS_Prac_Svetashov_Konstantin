import React from 'react';

const Content = ({ activeMode }) => {
  return (
    <section className='current-control'>Active: { activeMode }</section>
  );
}

export default Content;