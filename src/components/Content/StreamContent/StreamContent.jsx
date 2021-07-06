import React, { useEffect } from 'react';

const StreamContent = () => {
  useEffect(() => {
    fetch('https://voicy-speaker.herokuapp.com/voices')
      .then(response => response.json())
      .then(json => console.log(json))
  }, []);

  return (
    <section className='current-control'>
      <span>Active: stream</span>
    </section>
  );
}

export default StreamContent;