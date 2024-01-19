import React from "react";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";

const MainContainer = () => {
  const buttonName = [
    "All",
    "Music",
    "News",
    "Tamil Cinema",
    "Live",
    "T-Series",
    "Indian Pop Music",
    "Civil Services",
    "Big Boss",
    "Indian Pop Music",
    "Trending",
    "Lo-Fi",
  ];
  return (
    <>
      <ButtonList />
      <VideoContainer />
    </>
  );
};

export default MainContainer;
