import Login from "../components/Login";
import Home from "../components/Home/Home";
import DashboardAdmin from "../components/dashboard/DashboardAdmin";
import History from "../components/history/History";
import LandingPage from "../components/LandingPage";
import Notes from "../components/notes/Notes";
import TaskDetails from "../components/Tasks/TaskDetails";
import EmployeeArchive from "../components/users/EmployeeArchive";
import TaskArchive from "../components/Tasks/TaskArchive";
import EmployeeDetails from "../components/users/EmployeeDetails";
import DashboardAc from "../components/dashboard/DashboardAc";
import DashboardCs from "../components/dashboard/DashboardCs";
import DashboardIt from "../components/dashboard/DashboardIt";
import DashboardMkt from "../components/dashboard/DashboardMkt";
import DashboardTech from "../components/dashboard/DashboardTech";
import TodoTask from "../components/Tasks/todo";
import TodoToday from "../components/Tasks/today-todo";



////////////////////////////////////////////////////////////////////////////1
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import AdminRoute from "./AdminRoutes";
import CsRoutes from "./CsRoutes";
import AcRoutes from "./AcRoutes";
import ItRoutes from "./ITRoutes";
import TechRoutes from "./TechRoutes";
import MktRoutes from "./MktRoutes";
import IdeaFetch from "../components/idea/idea";

const Routing = (props) => {

    return (
        <Routes>

            <Route path="/Login" element={<Login />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/todotoday" element={<TodoToday />} />

            {/* //protected */}
            <Route element={<ProtectedRoute user={props.user} />}>
                <Route path="/Home" element={<Home />} />
                <Route path="/Notes" element={<Notes />} />
                <Route path="/Todo" element={<TodoTask />} />

                {/* //private
            // ADMIN */}
                <Route path="/TaskDetails" element={<AdminRoute data={props.role}><TaskDetails /></AdminRoute>} />
                <Route path="/employeeArchive" element={<AdminRoute data={props.role}><EmployeeArchive /> </AdminRoute>} />
                <Route path="/Taskarchive" element={<AdminRoute data={props.role}><TaskArchive /> </AdminRoute>} />
                <Route path="/DashboardAdmin" element={<AdminRoute data={props.role}><DashboardAdmin /> </AdminRoute>} />
                <Route path="/EmployeeDetails" element={<AdminRoute data={props.role}><EmployeeDetails /> </AdminRoute>} />
                <Route path="/History" element={<AdminRoute data={props.role}><History /> </AdminRoute>} />
                <Route path="/idea" element={<AdminRoute data={props.role}><IdeaFetch /> </AdminRoute>} />

                {/* // CUSTOMER_SERVISES */}
                <Route path="/DashboardCs" element={<CsRoutes data={props.role}><DashboardCs /> </CsRoutes>} />
                <Route path="/MessageTemplate" element={<CsRoutes data={props.role}><messageTemplate /> </CsRoutes>} />

                {/* // ACCOUNTING    */}
                <Route path="/DashboardAc" element={<AcRoutes data={props.role}><DashboardAc /> </AcRoutes>} />


                {/* // TECHNICHAL_SERVICES */}
                <Route path="/DashboardTech" element={<TechRoutes data={props.role}><DashboardTech /> </TechRoutes>} />


                {/* //INFORMATION_TECHNOLOGIES */}
                <Route path="/DashboardIt" element={<ItRoutes data={props.role}><DashboardIt /> </ItRoutes>} />


                {/* //MARKETING */}
                <Route path="/DashboardMkt" element={<MktRoutes data={props.role}><DashboardMkt /> </MktRoutes>} />

            </Route>
            <Route path="*" element={<p> 404!</p>} />
        </Routes>
    )
}

export default Routing
