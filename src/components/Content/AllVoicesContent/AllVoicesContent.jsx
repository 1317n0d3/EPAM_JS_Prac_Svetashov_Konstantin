import React, { useEffect, useState } from 'react';

const AllVoicesContent = () => {
  const [data, setData] = useState([]),
    messages = data.map((message, index) => <li key={ index }>
        <span>{message.timeStamp.slice(4, 21)}</span>
        <audio controls loop src={ createAudioUrl(message.audioBlob[0].data) } type="audio/mpeg"></audio>
      </li>);

  useEffect(() => {
    fetch('https://voicy-speaker.herokuapp.com/voices')
      .then(response => response.json())
      .then(json => setData(json))
  }, []);

  function createAudioUrl(audioChunks) {
    const audioBlob = new Blob(audioChunks, {type : 'audio/ogg'});
    const audioUrl = URL.createObjectURL(audioBlob);
    // const audio = new Audio(audioUrl);
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