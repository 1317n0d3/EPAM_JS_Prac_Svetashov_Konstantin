import React from 'react';

const MicrophoneContent = () => {
  return (
    <section className='current-control'>
      <input type="file" accept="audio/*" capture></input>
      <audio id="player" controls></audio>
    </section>
  );
}

export default MicrophoneContent;