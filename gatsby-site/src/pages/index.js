import React from "react"

import '../css/style.css';

import Audioplayer from '../components/Audioplayer';
import Videoplayer from '../components/Videoplayer';

export default () =>
<div class="container">
  <div>
    <h1>Suze Cooper</h1>
  </div>
  <div class="audioplayer">
    <Audioplayer />
  </div>
  <div class="audioplayer">
    <Audioplayer />
  </div>
  <div class="audioplayer">
    <Audioplayer />
  </div>
  <div class="audioplayer">
    <Audioplayer />
  </div>
  <div class="videoplayer">
    <Videoplayer />
  </div>
  <div class="videoplayer">
    <Videoplayer />
  </div>
</div>
