import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";
import BreadCrumb from "../../BreadCrumb";
import { useState, useEffect } from "react";
import axios from "axios";

const CourseNavigation = () => {
  // const URL = "https://kanbas-node-server-app-fjd6.onrender.com/api/courses";
  const URL = "http://localhost:4000/api/courses";
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People",
    "Panopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
  const { courseID } = useParams();
  const { pathname } = useLocation();
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseID);
  }, [courseID]);
  
  return (
    <div>
      <BreadCrumb />
      <hr className="divider" />
      <div className="wd-course-navigation list-group-flush" style={{ width: 140 }}>
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/Courses/${courseID}/${link}`}
            className={`list-group-item ${pathname.includes(link) && "active"}`}>
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}


export default CourseNavigation;