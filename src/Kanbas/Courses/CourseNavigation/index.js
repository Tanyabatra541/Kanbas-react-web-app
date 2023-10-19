import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";
import BreadCrumb from "../../BreadCrumb";
// import db from "../Database";

const CourseNavigation = () => {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People",
    "Panopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
  const { courseID } = useParams();
  const { pathname } = useLocation();
  
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