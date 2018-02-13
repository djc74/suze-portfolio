import React from 'react';
import Plyr from 'react-plyr';

const Videoplayer = () => (
  <Plyr
    type="youtube"
    videoId="hTt6GaEV1vw"
    controls={["play", "progress"]}
  />
);

export default Videoplayer;
