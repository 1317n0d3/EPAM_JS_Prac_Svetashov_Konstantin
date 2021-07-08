import React, { useEffect } from 'react';

const StreamContent = ({ socket }) => {
  useEffect(() => {
    socket.on('audioMessage', function (audioChunks) {
      const audioBlob = new Blob(audioChunks);
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      console.log('listen');
      audio.play();
    });
  }, [socket]);

  return (
    <section className='current-control'>
      <span>Active: stream</span>
    </section>
  );
}

export default StreamContent;