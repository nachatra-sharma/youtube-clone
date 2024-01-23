import React from 'react';

const VideoPlayer = (props) => {
  const {id} = props;
  return (
    <div>
        <iframe id="player" type="text/html" width="900" height="600"
        src={"http://www.youtube.com/embed/" + id } 
        frameBorder="0"></iframe>
    </div>
  )
};

export default VideoPlayer;