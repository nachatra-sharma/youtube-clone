import { LOGO } from "../utils/constant";

const VideoCard = (props) => {
  console.log(props);
  const { url } = props.videoInfo.snippet.thumbnails.medium;
  const { viewCount } = props.videoInfo.statistics;
  const { channelTitle, title } = props.videoInfo.snippet;
  return (
    <div className="w-[23%] pb-4">
      <div>
        <img src={url} alt="" />{" "}
      </div>
      <div className="flex pt-3 gap-3">
        <div>
          <img src={LOGO} className="rounded-full w-8" alt="" />
        </div>
        <div className="flex flex-col gap-1 w-[95%]">
          <p className="text-sm">{title}</p>
          <div className="flex gap-2 items-center">
            <p className="text-xs text-gray-600">{channelTitle}</p>
            <div className="w-[6px] h-[6px] bg-gray-300 rounded-full"></div>
            <p className="text-xs text-gray-600">
              {Math.floor(viewCount / 1000000) > 0
                ? Math.floor(viewCount / 1000000) + "M views"
                : Math.floor(viewCount / 1000) + "K views"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
