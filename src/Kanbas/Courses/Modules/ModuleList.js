import React from "react";
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
  const modules = db.modules;
  return (
    <ul className="list-group" id="module_list">
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
              <span>
                <BsCheckCircleFill style={{ color: "green" }} />
                <IoMdArrowDropdown />&nbsp;
                <AiOutlinePlus />&nbsp;&nbsp;&nbsp;&nbsp;
                <BsThreeDotsVertical />
              </span>
            </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;