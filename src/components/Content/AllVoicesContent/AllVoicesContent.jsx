import React, { useEffect, useState } from 'react';

const AllVoicesContent = () => {
  const [data, setData] = useState([]),
    messages = data.map((m, index) => <li key={ index } >{ m.timeStamp }</li>);

  // const convertToAudio = () => {
  //   if(data.length > 1){
  //     const audioBlob = new Blob(data[3].audioBlob[0].data, {type: 'text/plain'});
  //     const audioUrl = URL.createObjectURL(audioBlob);
  //     const audio = new Audio(audioUrl);
  //     return audio;
  //   }
  // }

  useEffect(() => {
    fetch('https://voicy-speaker.herokuapp.com/voices')
      .then(response => response.json())
      .then(json => setData(json))
  }, []);

  const renderMessages = (count, messages) => messages.slice(messages.length - count, messages.length);

  return (
    <section className='current-control'>
      <span>Active: all devices</span>
      <ul>
        { renderMessages(5, messages) }
      </ul>
    </section>
  );
}

export default AllVoicesContent;