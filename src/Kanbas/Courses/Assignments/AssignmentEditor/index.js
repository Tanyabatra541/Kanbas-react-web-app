import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BsCheckCircleFill, BsThreeDotsVertical } from "react-icons/bs";
import db from "../../../Database";
import './index.css';

const AssignmentEditor = () => {
    const assignmentId = useParams().assignmentId;
    const assignment = db.assignments.find(assignment => assignment._id.toString() === assignmentId);
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
            <input type="text" value={assignment.name} />
            <hr width="60%" color="#f5f5f5" />
            <div id="action_buttons">
                <button id="cancel_button">
                    <Link to={`/Kanbas/Courses/${assignment.courseId}/Assignments`}>
                        Cancel
                    </Link>
                </button>
                <button id="save_button">Save</button>
            </div>
            <hr width="60%" />
        </div>
    );
}

export default AssignmentEditor;