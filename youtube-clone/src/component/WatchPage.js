import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(closeMenu())
  },[])
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('v'));
  return <div>WatchPage</div>;
};

export default WatchPage;
