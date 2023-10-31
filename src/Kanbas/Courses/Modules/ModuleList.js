import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { BsCheckCircleFill } from 'react-icons/bs';
import { PiDotsSixVerticalBold } from 'react-icons/pi';
import { IoMdArrowDropright, IoMdArrowDropdown } from 'react-icons/io';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';

import './index.css';

function ModuleList() {
  const { courseID } = useParams();
  const [modules, setModules] = useState(db.modules);
  const [module, setModule] = useState({
    name: "New Module",
    description: "New Description",
    course: courseID,
  });
  const addModule = (module) => {
    setModules([
      { ...module, _id: new Date().getTime().toString() },
      ...modules,
    ]);
  };
  const deleteModule = (moduleId) => {
    setModules(modules.filter(
      (module) => module._id !== moduleId));
  };
  const updateModule = () => {
    setModules(
      modules.map((m) => {
        if (m._id === module._id) {
          return module;
        } else {
          return m;
        }
      })
    );
  }




  return (
    <ul className="list-group" id="module_list">
      <li className="list-group-item">

        <input value={module.name}
          onChange={(e) => setModule({
            ...module, name: e.target.value
          })}
        />
        <br />
        <textarea value={module.description}
          onChange={(e) => setModule({
            ...module, description: e.target.value
          })}
        /><br />
        <button onClick={() => { addModule(module) }}>
          Add
        </button>
        <button onClick={updateModule}>
          Update
        </button>


      </li>

      {
        modules
          .filter((module) => module.course === courseID)
          .map((module, index) => (

            <li key={index} className="list-group-item">

              <span>
                <PiDotsSixVerticalBold />
                &nbsp;<IoMdArrowDropright />
                &nbsp;{module.name}
              </span>

              <span className="wd-module-icons">
                <BsCheckCircleFill style={{ color: "green" }} />
                <IoMdArrowDropdown />&nbsp;
                <AiOutlinePlus />&nbsp;&nbsp;&nbsp;&nbsp;
                <BsThreeDotsVertical />
                <button
                  onClick={(event) => { setModule(module); }}>
                  Edit
                </button>

                <button
                  onClick={() => deleteModule(module._id)}>
                  Delete
                </button>
              </span>


            </li>
          ))
      }
    </ul>
  );
}
export default ModuleList;