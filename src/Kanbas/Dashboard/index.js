import db from "../Database";
import "./index.css";
import CourseCard from "./CourseCard/CourseCard";

function Dashboard() {
  const courses = db.courses;
  const modules = db.modules;

  return (
    <div className="wd-dashboard">
      <h1>Dashboard</h1>
      <hr className="wd-dashboard-line" />
      <h3>Published Courses ({courses.length})</h3>
      <hr className="wd-published-courses-line" />
      <div className="row row-cols-1 row-cols-md-4 wd-dashboard-grid">
        {courses.map((course) => (
          <CourseCard course={ course } />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
