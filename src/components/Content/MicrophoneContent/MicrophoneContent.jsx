import React, { useEffect, useState } from 'react';

const START_RECORD = 'START',
  STOP_RECORD = 'STOP';

const MicrophoneContent = ({ socket }) => {
  const [buttonName, setButtonName] = useState(START_RECORD);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);

  function startRecord() {
    mediaRecorder.start();
    socket.emit('recordStarted');
    setButtonName(STOP_RECORD);
  }

  function stopRecord() {
    if (mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
        setButtonName(START_RECORD);
    }
  }

  function recordAudio() {
    navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
        const mediaRecorder = new MediaRecorder(stream);
        setMediaRecorder(mediaRecorder);
        
        mediaRecorder.addEventListener("dataavailable", event => {
            audioChunks.push(event.data);
        });
        mediaRecorder.addEventListener("stop", () => {
            socket.emit('audioMessage', audioChunks);
            setAudioChunks([]);
        });
    });
  }

  useEffect(() => {
    recordAudio();
  }, [])

  return (
    <section className='current-control microphone'>
      <button className='record-button'
        onMouseDown={ startRecord }
        onTouchStart={ startRecord }
        onMouseUp={ stopRecord }
        onTouchEnd={ stopRecord }
        onMouseLeave={ stopRecord } >{ buttonName }</button>
    </section>
  );
}

export default MicrophoneContent;