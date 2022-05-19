/* eslint-disable */
import {
  Navigate, Outlet,
} from "react-router-dom";
const AdminRoute = ({
  data,
  children

}) => {

  console.log("role in admin route", data)
  if (data == "ADMIN") {
    return children;
  }
  else {
    return <Navigate to={'/home'} replace />;
  }

};


export default AdminRoute


