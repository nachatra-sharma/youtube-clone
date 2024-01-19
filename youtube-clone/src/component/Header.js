import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className="flex items-center w-[100%] px-5 py-1 bg-white fixed justify-between z-30">
      <div className="flex items-center gap-6">
        <i className="fa-solid fa-bars text-xl cursor-pointer" onClick={()=>toggleMenuHandler()}></i>
        <img
          className="w-32 cursor-pointer"
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
          alt="youtube-logo"
        />
      </div>
      <div className="w-[50%] flex items-center">
        <div className="w-[90%]">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            className="border-[1px] w-[85%] border-gray-400 rounded-l-full outline-none px-4 py-1"
          />
          <button className="border-[1px] border-gray-400 rounded-r-full py-1 px-6 bg-gray-200">
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div className="w-[10%] cursor-pointer">
          <i className="fa-solid fa-microphone rounded-full px-[13px] py-[10px] bg-gray-200"></i>
        </div>
      </div>
      <div className="flex gap-8 items-center">
        <i className="cursor-pointer fa fa-video-camera"></i>
        <i className="cursor-pointer fa-solid fa-bell"></i>
        <i className="cursor-pointer fa-solid fa-user"></i>
      </div>
    </div>
  );
};

export default Header;
