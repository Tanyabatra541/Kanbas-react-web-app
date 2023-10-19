import { TbFileImport, TbPackageExport } from 'react-icons/tb';
import { BiTargetLock, BiSolidBarChartAlt2, BiBell } from 'react-icons/bi';
import { BsDot } from 'react-icons/bs';
import { RiMegaphoneLine } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';
import './index.css';

const StatusSidebar = () => {
    return (
        <div id='sidebar'>
            <div id='buttons'>
                <button>
                    <TbFileImport />&nbsp;
                    Import Existing Content
                </button>
                <button>
                    <TbPackageExport />&nbsp;
                    Import from Commons
                </button>
                <button>
                    <BiTargetLock />&nbsp;
                    Choose Home Page
                </button>
                <button>
                    <BiSolidBarChartAlt2 />&nbsp;
                    View Course Stream
                </button>
                <button>
                    <RiMegaphoneLine />&nbsp;
                    New Announcements
                </button>
                <button>
                    <BiSolidBarChartAlt2 />&nbsp;
                    New Analytics
                </button>
                <button>
                    <BiBell />&nbsp;
                    View Course Notifications
                </button>
            </div>
            <div id='todoList'>
                To Do <hr />
                <div className='todoItem'>
                    <span className='marks'>5</span>
                    <div>
                        <h6>Grade A1 - ENV + HTML</h6>
                        <span>100 points<BsDot />Sep 18 at 11:59pm</span>
                    </div>
                    <RxCross2 />
                </div>
                <div className='todoItem'>
                    <span className='marks'>5</span>
                    <div>
                        <h6>Grade A2 - CSS + BOOTSTRAP</h6>
                        <span>100 points<BsDot />Oct 2 at 11:59pm</span>
                    </div>
                    <RxCross2 />
                </div>
            </div>
        </div>
    );
}

export default StatusSidebar;