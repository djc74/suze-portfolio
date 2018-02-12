import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import mp3_file from '../sounds/charity_upbeat.wav'

const Soundplayer = () => (
  <AudioPlayer
    src={mp3_file}
    onPlay={(e) => console.log('onPlay')}
    // other props here
  />
);

export default Soundplayer;
