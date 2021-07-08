import React, { useEffect, useState } from 'react';

const AllVoicesContent = () => {
  const [data, setData] = useState([]),
    messages = data.map((m, index) => <li key={ index } >{ m.timeStamp }</li>);

  useEffect(() => {
    fetch('https://voicy-speaker.herokuapp.com/voices')
      .then(response => response.json())
      .then(json => setData(json))
  }, []);

  const renderMessages = (count, messages) => (count < messages.length) ? messages.slice(messages.length - count, messages.length) : messages;

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