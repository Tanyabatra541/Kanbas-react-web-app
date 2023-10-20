import { AiOutlinePlus } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';
import { BsCheckCircle } from 'react-icons/bs';

import './index.css';

const ProgressTrackbar = () => {
    return (
        <div id="button_bar">
            <button>Collapse All</button>
            <button>View Progress</button>
            <button>
                <BsCheckCircle style={{ color: "green", }} />
                &nbsp;Publish All&nbsp;
                <IoMdArrowDropdown />
            </button>
            <button id='module_add'>
                <AiOutlinePlus /> Module
            </button>
            <button className='wd-buttons'>
                <BsThreeDotsVertical />
            </button>
        </div>
    );
}

export default ProgressTrackbar;