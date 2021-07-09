import React, { useEffect } from 'react';

const StreamContent = ({ socket }) => {
  useEffect(() => {
    socket.on('audioMessage', function (audioChunks) {
      const audioBlob = new Blob(audioChunks);
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audio.play();
    });
    return () => socket.off('audioMessage');
  }, [socket]);

  return (
    <section className='current-control'>
      <span>Stream messages</span>
    </section>
  );
}

export default StreamContent;