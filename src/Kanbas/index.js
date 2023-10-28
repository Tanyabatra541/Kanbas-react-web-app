import { Routes, Route } from "react-router-dom";
import KanbasNavigation from "./KanbasNavigation";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Calendar from "./Calendar";
import { Navigate } from "react-router-dom";
import './index.css';
import Nav from "../Nav";

function Kanbas() {
   return (
      <div className="d-flex">
         <KanbasNavigation />
         <div className="content">
            <Routes>
               <Route path="/" element={<Navigate to="Dashboard" />} />
               <Route path="/Account" element={<Account />} />
               <Route path="/Dashboard" element={<Dashboard />} />
               <Route path="/Courses/:courseID/*" element={<Courses />} />
               <Route path="/Calendar" element={<Calendar />} />
            </Routes>
         </div>
      </div>
   );
}
export default Kanbas;
