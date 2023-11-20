import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { BsCheckCircleFill } from 'react-icons/bs';
import { PiDotsSixVerticalBold } from 'react-icons/pi';
import { IoMdArrowDropright, IoMdArrowDropdown } from 'react-icons/io';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useSelector, useDispatch } from "react-redux";

import './index.css';

import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";

import { findModulesForCourse, createModule } from "./client";

function ModuleList() {
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };


  const { courseID } = useParams();
  useEffect(() => {
    findModulesForCourse(courseID)
      .then((modules) =>
        dispatch(setModules(modules))
      );
  }, [courseID]);
  const handleAddModule = () => {
    createModule(courseID, module).then((module) => {
      dispatch(addModule(module));
    });
  };



  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();




  return (
    <ul className="list-group" id="module_list">
      <li className="list-group-item">

        <input value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
        />
        <br />
        <textarea value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
          }
        /><br />
        <button onClick={handleAddModule}>
          Add
        </button>
        <button onClick= {handleUpdateModule}>
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
                  onClick={() => dispatch(setModule(module))}>
                  Edit
                </button>

                <button
                  onClick={() => handleDeleteModule(module._id)}>
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