import React, { useEffect, useState } from 'react';

const UserCount = ({ socket }) => {
  const [usersCount, setUsersCount] = useState(0);

  useEffect(() => {
    socket.on('user', function (usercount) {
      setUsersCount(usercount);
    });

    return () => socket.off('user');
  }, [socket]);

  return (
    <section className='user-count'>
      <span>Online users: { usersCount }</span>
    </section>
  );
}

export default UserCount;