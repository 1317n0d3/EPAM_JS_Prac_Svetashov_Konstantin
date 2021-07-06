import React, { useEffect, useState } from 'react';

const AllVoicesContent = ({ socket }) => {
  const [data, setData] = useState([]);

  const messages = data.map(m => <li>{ m.timeStamp }</li>);

  useEffect(() => {
    fetch('https://voicy-speaker.herokuapp.com/voices')
      .then(response => response.json())
      .then(json => setData(json))
  }, []);

  return (
    <section className='current-control'>
      <span>Active: all devices</span>
      <ul>
        { messages[messages.length - 1] }
      </ul>
    </section>
  );
}

export default AllVoicesContent;