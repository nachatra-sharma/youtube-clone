import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    fetchVideo();
  }, []);

  const fetchVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    console.log(json);
    setVideo(json.items);
  };
  return (
    <div className="flex justify-between flex-wrap py-4">
      {video.map((items) => (
        <VideoCard videoInfo={items} />
      ))}
    </div>
  );
};

export default VideoContainer;
