import React from "react";
import { useParams, Link } from "react-router-dom";
import { BsCheckCircleFill, BsThreeDotsVertical } from 'react-icons/bs';
import { PiDotsSixVerticalBold, PiNotePencilBold } from 'react-icons/pi';
import { IoMdArrowDropdown } from 'react-icons/io';
import { AiOutlinePlus } from 'react-icons/ai';
import './index.css';
import { useSelector } from "react-redux";

function AssignmentItem({ assignment }) {
  const { courseId } = useParams();
  const dateSplit = assignment.endDate.split("-");
  const endDate = new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2], 0, 0, 0, 0);

  return (
    <Link
      key={assignment._id}
      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
      className="list-group-item assignment-item"
    >
      <div style={{ display: "flex", flexFlow: "row nowrap" }}>
        <PiDotsSixVerticalBold />&nbsp;
        <PiNotePencilBold style={{ color: "#68a179" }} />&nbsp;&nbsp;&nbsp;&nbsp;
        <div id="assignment-details">
          <div>{assignment.name}</div>
          <div>
            <span style={{ color: "#C8102E" }}>Multiple Modules</span>
            &nbsp; | Due {endDate.toLocaleString('en-us', { month: 'short', day: 'numeric' })} at 11:59pm
            &nbsp; | 100 pts
          </div>
        </div>
      </div>
      <div>
        <BsCheckCircleFill style={{ color: "green" }} />
        &nbsp;&nbsp;<BsThreeDotsVertical />
      </div>
    </Link>
  );
}

function AssignmentsList() {
  const { courseID } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const courseAssignments = assignments.filter((assignment) => assignment.courseId === courseID);

  return (
    <div id="assignments-container">
      <header>
        <div style={{ fontWeight: "bold" }}>
          <PiDotsSixVerticalBold />&nbsp;
          <IoMdArrowDropdown />&nbsp;
          ASSIGNMENTS
        </div>
        <div>
          <span>40% of Total</span>&nbsp;
          <AiOutlinePlus />&nbsp;&nbsp;
          <BsThreeDotsVertical />
        </div>
      </header>
      <div id="assignments-list" className="list-group">
        {courseAssignments.map((assignment) => (
          <AssignmentItem key={assignment._id} assignment={assignment} />
        ))}
      </div>
    </div>
  );
}

export default AssignmentsList;
