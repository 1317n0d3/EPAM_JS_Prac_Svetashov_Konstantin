import React, { useEffect } from 'react';

const StreamContent = () => {
  useEffect(() => {
    fetch('https://voicy-speaker.herokuapp.com/voices')
      .then(response => response.json())
      .then(json => console.log(json))
  }, []);

  return (
    <div>
      <span>Active: stream</span>
    </div>
  );
}

export default StreamContent;