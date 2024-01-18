import ButtonList from "./ButtonList";
import Sidebar from "./Sidebar";
import VideoContainer from "./VideoContainer";

const Body = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col pt-4 pr-2 w-[86%]">
          <ButtonList />
          <VideoContainer />
        </div>
      </div>
    </>
  );
};

export default Body;
