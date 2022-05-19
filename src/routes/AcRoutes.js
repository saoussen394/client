/* eslint-disable */
import {
  Navigate, Outlet,
} from "react-router-dom";
const AcRoutes = ({
  data,
  children

}) => {

  console.log("role in accounting route", data)
  if (data == "ACCOUNTING") {
    return children;
  }
  else {
    return <Navigate to={'/home'} replace />;
  }

};


export default AcRoutes


