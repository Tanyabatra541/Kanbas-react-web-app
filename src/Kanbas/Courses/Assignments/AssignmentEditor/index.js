import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BsCheckCircleFill, BsThreeDotsVertical } from "react-icons/bs";
import './index.css';
import { useSelector, useDispatch } from "react-redux";
// import assignmentsReducer from "/Users/tanyabatra/Desktop/2023/Fall 2023/Web Development/Kanbas/Kanbas-react-web-app/../Courses/Assignments/assignmentsReducer" ;

import {
    updateAssignment,
} from "../assignmentsReducer";


const AssignmentEditor = () => {

    const { courseID } = useParams();
    const { assignmentId } = useParams();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const dispatch = useDispatch();

    const [assignment, setAssignment] = useState(assignments.find((assignment) => assignment._id === Number(assignmentId)));
    return (
        <div id="assignment-editor">
            <div id="status-bar">
                <BsCheckCircleFill style={{ color: "green", }} />
                &nbsp;Published
                <button>
                    <BsThreeDotsVertical />
                </button>
            </div>
            <hr width="60%" />
            Assignment Name<br />
            <input type="text" value={assignment.name} onChange={(e) => setAssignment({ ...assignment, name: e.target.value })} />
            <hr width="60%" color="#f5f5f5" />
            <div id="action_buttons">
                <button id="cancel_button">
                    <Link to={`/Kanbas/Courses/${courseID}/Assignments`}>
                        Cancel
                    </Link>
                </button>
                <button id="save_button" onClick={() => dispatch(updateAssignment(assignment))}>
                    <Link to={`/Kanbas/Courses/${courseID}/Assignments`}>Save</Link>
                </button>
            </div>
            <hr width="60%" />
        </div>
    );
}

export default AssignmentEditor;