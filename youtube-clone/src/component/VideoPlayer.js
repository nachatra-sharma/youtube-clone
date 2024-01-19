import React from 'react';

const VideoPlayer = (props) => {
  console.log(props);
  const {id} = props.data;
  return (
    <div>
        <iframe id="player" type="text/html" width="900" height="600"
        src={"http://www.youtube.com/embed/" + id } 
        frameborder="0"></iframe>
    </div>
  )
};

export default VideoPlayer;