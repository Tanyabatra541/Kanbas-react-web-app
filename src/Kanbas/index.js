import { Routes, Route } from "react-router-dom";
import KanbasNavigation from "./KanbasNavigation";
// import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Calendar from "./Calendar";
import axios from "axios";
import { Navigate } from "react-router-dom";
import './index.css';
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import Signin from "../users/signin";
import Account from "../users/account";
import UserTable from "../users/table";
import Signup from "../users/signup";

function Kanbas() {
   const [courses, setCourses] = useState([]);
   // const URL = "https://kanbas-node-server-app-fjd6.onrender.com/api/courses";
   const URL = "http://localhost:4000/api/courses";

   // const API_BASE = process.env.REACT_APP_API_BASE;
   // const URL = `${API_BASE}/courses`;

   const [course, setCourse] = useState({
      name: "New Course", number: "New Number",
      startDate: "2023-09-10", endDate: "2023-12-15",
   });
   const addNewCourse = async () => {
      const response = await axios.post(URL, course);
      setCourses([
         ...courses,
         response.data
      ]);
   };

   const findAllCourses = async () => {
      const response = await axios.get(URL);
      console.log(response.data);
      setCourses(response.data);
   };
   useEffect(() => {
      findAllCourses();
   }, []);
   const deleteCourse = async (courseId) => {
      console.log(courseId);
      const response = await axios.delete(
         `${URL}/${courseId}`
      );

      setCourses(courses.filter((course) => course._id !== courseId));
   };
   const updateCourse = async () => {
      const response = await axios.put(
         `${URL}/${course._id}`,
         course
      );
      setCourses(
         courses.map((c) => {
            if (c._id === course._id) {
               return course;
            } else {
               return c;
            }
         })
      );
   };

   return (
      <Provider store={store}>
         <div className="d-flex">
            <KanbasNavigation />
            <div className="content">
               <Routes>
                  <Route path="/" element={<Navigate to="Dashboard" />} />
                  {/* <Route path="/signin" element={<Signin />} /> */}
                  {/* <Route path="/Account" element={<Account />} /> */}
                  <Route path="/Dashboard" element={<Dashboard
                     courses={courses}
                     course={course}
                     setCourse={setCourse}
                     addNewCourse={addNewCourse}
                     deleteCourse={deleteCourse}
                     updateCourse={updateCourse} />} />
                  <Route path="/Courses/:courseID/*" element={<Courses courses={courses} />} />
                  <Route path="/Calendar" element={<Calendar />} />
                  <Route path="/signin" element={<Signin />} />
                  <Route path="/account" element={<Account />} />
                  <Route path="/admin/users" element={<UserTable />} />
                  <Route path="/account/:id" element={<Account />} />
                  <Route path="/signup" element={<Signup />} />
               </Routes>
            </div>
         </div>
      </Provider>
   );
}
export default Kanbas;
