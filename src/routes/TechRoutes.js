/* eslint-disable */
import {
  Navigate, Outlet,
} from "react-router-dom";
const TechRouts = ({
  data,
  children

}) => {

  console.log("role in service technique route", data)
  if (data == "TECHNICHAL_SERVICES") {
    return children;
  }
  else {
    return <Navigate to={'/home'} replace />;
  }

};


export default TechRouts


