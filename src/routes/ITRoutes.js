/* eslint-disable */
import {
  Navigate, Outlet,
} from "react-router-dom";
const ITRoutes = ({
  data,
  children

}) => {

  console.log("role in IT route", data)
  if (data == "INFORMATION_TECHNOLOGIES") {
    return children;
  }
  else {
    return <Navigate to={'/home'} replace />;
  }

};


export default ITRoutes


