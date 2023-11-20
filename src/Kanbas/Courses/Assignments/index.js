import './index.css';
import AssignmentsSearchBar from "./AssignmentsSearchBar";
import AssignmentsList from "./AssignmentsList";
import { useState, useEffect } from "react";
import axios from "axios";


function Assignments() {

    return (
        <div id="assignments">
            <AssignmentsSearchBar />
            <hr width="60%" />
            <AssignmentsList />
        </div>
    );
}
export default Assignments;