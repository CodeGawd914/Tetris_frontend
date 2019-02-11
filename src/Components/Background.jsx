import React, { Component } from 'react';
// import video from '../vids/HongKongBackground.mp4'

class Background extends Component {

  render() {
    return (
      <video className="myVideo" loop autoPlay muted >
        <source src={video} type="video/mp4"/>
        <source src={video} type="video/ogg"/>
        Your browser does not support the video tag.
      </video>

    );
  }

}

export default Background;
