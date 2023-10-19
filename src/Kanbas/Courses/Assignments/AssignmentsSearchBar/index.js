import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import './index.css';

const AssignmentsSearchBar = () => {
    return (
        <div id='search-bar'>
            <input type="text" placeholder="Search for Assignment" />
            <div id='button-group'>
                <button>
                    <AiOutlinePlus /> Group
                </button>
                <button id='assignment_add'>
                    <AiOutlinePlus /> Assignment
                </button>
                <button>
                    <BsThreeDotsVertical />
                </button>
            </div>
        </div>
    );
}

export default AssignmentsSearchBar;