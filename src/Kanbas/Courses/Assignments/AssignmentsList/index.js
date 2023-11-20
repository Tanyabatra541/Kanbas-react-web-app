import React from "react";
import { useParams, Link } from "react-router-dom";
import { BsCheckCircleFill, BsThreeDotsVertical } from 'react-icons/bs';
import { PiDotsSixVerticalBold, PiNotePencilBold } from 'react-icons/pi';
import { IoMdArrowDropdown } from 'react-icons/io';
import { AiOutlinePlus } from 'react-icons/ai';
import './index.css';
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";


import {
  addAssignment,
  deleteAssignment,
  setAssignment,
} from "../assignmentsReducer";


function AssignmentItem({assignment }) {
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  const { courseID } = useParams();
  const dateSplit = assignment.endDate.split("-");
  const endDate = new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2], 0, 0, 0, 0);
  const dispatch = useDispatch();

  useEffect(() => {
    findCourseById(courseID);
  }, [courseID]);


  return (
    <div className="list-group-item assignment-item">
      <div style={{ display: "flex", flexFlow: "row nowrap" }}>
        <PiDotsSixVerticalBold />&nbsp;
        <PiNotePencilBold style={{ color: "#68a179" }} />&nbsp;&nbsp;&nbsp;&nbsp;
        <div id="assignment-details">
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseID}/Assignments/${assignment._id}`}
            >
            <div>{assignment.name}</div>
          </Link>
          <div>
            <span style={{ color: "#C8102E" }}>Multiple Modules</span>
            &nbsp; | Due {endDate.toLocaleString('en-us', { month: 'short', day: 'numeric' })} at 11:59pm
            &nbsp; | 100 pts
          </div>
        </div>
      </div>
      <div>
        <button onClick={() => dispatch(deleteAssignment(assignment._id))}>Delete</button>&nbsp;&nbsp;
        <BsCheckCircleFill style={{ color: "green" }} />
        &nbsp;&nbsp;<BsThreeDotsVertical />
      </div>
    </div>
  );
}

function AssignmentsList() {
  const { courseID } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const courseAssignments = assignments.filter((assignment) => assignment.courseId === courseID);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  console.log(assignments,courseAssignments.filter((assignment) => assignment.courseId === courseID));
  return (
    <div id="assignments-container">
      
      <header>
        <div style={{ fontWeight: "bold" }}>
          <PiDotsSixVerticalBold />&nbsp;
          <IoMdArrowDropdown />&nbsp;
          ASSIGNMENTS<br/> <br/> 
          &nbsp;&nbsp;&nbsp;&nbsp;<input value={module.name}
          onChange={(e) => dispatch(setAssignment({ ...assignment, name: e.target.value }))}/>
        <br /><br />
          &nbsp;&nbsp;&nbsp;&nbsp;<button onClick={() => dispatch(addAssignment({ 
        ...assignment, courseId: courseID }))}>Add</button>
        </div>
        <div>
          <span>40% of Total</span>&nbsp;
          <AiOutlinePlus />&nbsp;&nbsp;
          <BsThreeDotsVertical />
        </div>
      </header>
      <div id="assignments-list" className="list-group">
        {courseAssignments.filter((assignment) => assignment.courseId === courseID)
          .map((assignment, index) => (
          <AssignmentItem key={index} assignment={assignment} />
        ))}
      </div>
    </div>
  );
}

export default AssignmentsList;
