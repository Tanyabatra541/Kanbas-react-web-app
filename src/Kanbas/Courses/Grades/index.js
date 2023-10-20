import db from "../../Database";
import { useParams } from "react-router-dom";
function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div>
            <div className="wd-grades-top">
                <select>
                    <option>Gradebook</option>
                </select>
                <button>Import</button>
                <select>
                    <option>Export</option>
                </select>
                <button>Configure</button>
                <h2>Student Names</h2>
                <input placeholder="Search Students" title="Type the name of the student" />
                <h2>Assignments Name</h2>
                <input placeholder="Search Assignments" title="Type the name of the Assignment" />
                <button>Apply filters</button>
            </div>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <th>Student Name</th>
                        {assignments.map((assignment) => (<th>{assignment.title}</th>))}
                    </thead>
                    <tbody>
                        {enrollments.map((enrollment) => {
                            const user = db.users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td>{user.firstName} {user.lastName}</td>
                                    {assignments.map((assignment) => {
                                        const grade = db.grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (<td>{grade?.grade || ""}</td>);
                                    })}
                                </tr>);
                        })}
                    </tbody></table>
            </div></div>);
}
export default Grades;

