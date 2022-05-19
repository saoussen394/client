/* eslint-disable */
import {
  Navigate, Outlet,
} from "react-router-dom";
const CsRoutes = ({
  data,
  children

}) => {

  console.log("role in customer services route", data)
  if (data == "CUSTOMER_SERVISES") {
    return children;
  }
  else {
    return <Navigate to={'/home'} replace />;
  }

};


export default CsRoutes


