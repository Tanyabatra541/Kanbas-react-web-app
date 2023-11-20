import React, { useState, useEffect } from "react";
import axios from "axios";
function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const URL = "https://kanbas-node-server-app-fjd6.onrender.com/a5/assignment";
  const fetchAssignment = async () => {
    const response = await axios.get(`${URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios
      .get(`${URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  const [isCompleted, setIsCompleted] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsCompleted(e.target.checked);
  };

  const handleUpdateStatus = async () => {
    const response = await axios.get(`${URL}/completed/${isCompleted}`);
    setAssignment(response.data);
  };


  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <input onChange={(e) => setAssignment({
        ...assignment,
        title: e.target.value
      })}
        value={assignment.title}
        className="form-control mb-2 w-75"
        type="text" />
      <button onClick={updateTitle}
        className="w-100 btn btn-primary mb-2">
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment}
        className="w-100 btn btn-danger mb-2">
        Fetch Assignment
      </button>

      <h4>Retrieving Objects</h4>
      <a href="https://kanbas-node-server-app-fjd6.onrender.com/a5/assignment"
        className="btn btn-primary me-2">
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a
        href="https://kanbas-node-server-app-fjd6.onrender.com/a5/assignment/title"
        className="btn btn-primary me-2">
        Get Title
      </a><br /><br />
      <a
        href="https://kanbas-node-server-app-fjd6.onrender.com/a5/assignment/score"
        className="btn btn-primary me-2">
        Get Score
      </a><br /><br />
      <a
        href={`${URL}/score/${assignment.score}`}
        className="btn btn-primary me-2 float-end"
      >
        Update Score
      </a>
      <input
        onChange={(e) => setAssignment({
          ...assignment,
          score: e.target.value
        })}
        value={assignment.score}
        className="form-control mb-2 w-75"
        type="text" />
      <br />
      <a
        href="https://kanbas-node-server-app-fjd6.onrender.com/a5/assignment/completed"
        className="btn btn-primary me-2">
        Get Status of Completion?
      </a><br />
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={handleCheckboxChange}
      />{" "}
      &nbsp;&nbsp;
      <label>Completed</label>
      <br />
      <button onClick={handleUpdateStatus} className="w-100 btn btn-primary mb-2">
        Update Completion Status to: {isCompleted.toString()}
      </button>
    </div>
  );
}
export default WorkingWithObjects;