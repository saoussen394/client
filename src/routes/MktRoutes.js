/* eslint-disable */
import {
  Navigate, Outlet,
} from "react-router-dom";
const MktRoutes = ({
  data,
  children

}) => {

  console.log("role in marketing route", data)
  if (data == "MARKETING") {
    return children;
  }
  else {
    return <Navigate to={'/home'} replace />;
  }

};


export default MktRoutes


