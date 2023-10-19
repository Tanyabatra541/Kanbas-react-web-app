import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi/";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import {FaInbox} from "react-icons/fa";
import {BiHistory} from "react-icons/bi";
import {PiTelevisionSimpleBold} from "react-icons/pi";
import {BiHelpCircle} from "react-icons/bi";
import "./index.css";

function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Help"];
    const linksToIcons = {
        "Account": <BiUserCircle className="wd-icon" />,
        "Dashboard": <RiDashboard3Fill className="wd-icon" />,
        "Courses": <FaBook className="wd-icon" />,
        "Calendar": <BsFillCalendar2WeekFill className="wd-icon" />,
        "Inbox": <FaInbox className="wd-icon" />,
        "History": <BiHistory className="wd-icon" />,
        "Studio": <PiTelevisionSimpleBold className="wd-icon" />,
        "Help": <BiHelpCircle className="wd-icon" />,
    }
    const { pathname } = useLocation();
    return (
        <div className="wd-kanbas-navigation">
            <div className="list-group " style={{ width: 150 }}>
                <img src={process.env.PUBLIC_URL + "/NEU logo.png"} alt="uni_logo" id="uni_logo" />
                {links.map((link, index) => (
                    <Link
                        key={index}
                        to={`/Kanbas/${link}`}
                        className={`list-group-item ${pathname.includes(link) && "active"}`}>
                        {linksToIcons[link]}<br />
                        {link}
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default KanbasNavigation;