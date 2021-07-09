import React, { useEffect, useState } from 'react';

const AllVoicesContent = () => {
  const [data, setData] = useState([]),
    messages = data.map((message, index) => <li key={ index }>
        <span>{message.timeStamp.slice(4, 21)}</span>
        <audio controls src={ createAudioUrl(message.audioBlob[0].data) } type="audio/wav"></audio>
      </li>);

  useEffect(() => {
    let isMounted = true;
    
    fetch('https://voicy-speaker.herokuapp.com/voices')
    .then(response => response.json())
    .then(json => { if(isMounted) setData(json) })

    return () => { isMounted = false }
  }, []);

  function createAudioUrl(audioChunks) {
    const buff = new Int8Array(audioChunks).buffer;
    const audioBlob = new Blob([buff], {type : 'audio/wav'});
    const audioUrl = URL.createObjectURL(audioBlob);
    return audioUrl;
  }

  const renderMessages = (count, messages) => (count < messages.length) ?
    messages.slice(messages.length - count, messages.length) : messages;

  return (
    <section className='current-control all-voices'>
      <ul>
        { renderMessages(5, messages) }
      </ul>
    </section>
  );
}

export default AllVoicesContent;