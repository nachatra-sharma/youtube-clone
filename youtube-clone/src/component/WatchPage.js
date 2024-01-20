import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { SINGLE_YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoPlayer from "./VideoPlayer";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [video, setVideo] = useState([]);
  useEffect(()=>{
    fetchData();
    dispatch(closeMenu())
  },[]);
  const fetchData = async () => {
    const data = await fetch(SINGLE_YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideo(json.items[0]);
  }
  const [searchParams] = useSearchParams();
  
  return (
      <div>
        <VideoPlayer data={video} id={searchParams.get('v')}/>
      </div>
      )
  };

export default WatchPage;
