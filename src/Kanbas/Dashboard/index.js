import { React, useState } from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../../Images/images";
import db from "../Database";
import "./index.css";


function Dashboard() {
  const [courses, setCourses] = useState(db.courses);
  const modules = db.modules;
  const [course, setCourse] = useState({
    name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = () => {
    setCourses([...courses,
    {
      ...course,
      _id: new Date().getTime()
    }]);
  };
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
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



  const CourseCard = ({ course }) => (
    <div className="col mb-2" key={course._id}>
      <div className="card">
        <img src={IMAGES.DASHBOARDCOURCE} className="card-img-top" alt={course.name} />
        <div className="card-body">
          <h5 className="card-title">
            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>

              {course.name}</Link>
          </h5>
          <p className="card-text">
            This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </p>
          <button
                onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }}>
                Edit
              </button>

              <button
                onClick={(event) => {
                  event.preventDefault();
                  deleteCourse(course._id);
                }}>
                Delete
              </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="wd-dashboard">
      <h1>Dashboard</h1>
      <h5>Course</h5>
      <input value={course.name} className="form-control" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <input value={course.number} className="form-control" onChange={(e) => setCourse({ ...course, number: e.target.value })} />
      <input value={course.startDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
      <input value={course.endDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
      <button onClick={addNewCourse} >
        Add
      </button>
      <button onClick={updateCourse} >
        Update
      </button>


      <hr className="wd-dashboard-line" />
      <h3>Published Courses ({courses.length})</h3>
      <hr className="wd-published-courses-line" />
      <div className="row row-cols-1 row-cols-md-4 wd-dashboard-grid">
        {courses.map((course) => (
          <CourseCard course={course} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
