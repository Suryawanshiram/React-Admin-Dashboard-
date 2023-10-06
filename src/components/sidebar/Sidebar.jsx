import "./sidebar.scss";
import AddHomeTwoToneIcon from '@mui/icons-material/AddHomeTwoTone';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import LocalMallTwoToneIcon from '@mui/icons-material/LocalMallTwoTone';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FolderTwoToneIcon from '@mui/icons-material/FolderTwoTone';
import { Link } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {

    const { dispatch } = useContext(DarkModeContext)

    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <LocalFireDepartmentIcon />
                    <span className="logo">Omoi</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <DashboardIcon />
                    <span>Dashboard</span>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <li>
                            <AddHomeTwoToneIcon />
                            <span>Home</span>
                        </li>
                    </Link>

                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineIcon className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>

                    <Link to="/products/test" style={{ textDecoration: "none" }}>
                        <li>
                            <StackedBarChartIcon />
                            <span>Analytic</span>
                        </li>

                        <li>
                            <LocalMallTwoToneIcon />
                            <span>Shop</span>
                        </li>
                    </Link>
                    <li>
                        <MailTwoToneIcon />
                        <span>Inbox</span>
                    </li>

                    <p className="title">Tools</p>
                    <li>
                        <SettingsTwoToneIcon />
                        <span>Settings</span>

                    </li>
                    <li>
                        <HelpTwoToneIcon />
                        <span>Help</span>

                    </li>
                    <p className="title">Projects</p>
                    <Link to="/products" style={{ textDecoration: "none" }}>

                        <li>
                            <FolderTwoToneIcon />
                            <span>Amazon</span>
                        </li>
                        <li>
                            <FolderTwoToneIcon />
                            <span>Invinity HQ</span>
                        </li>
                    </Link>


                    <p className="title">Users</p>
                    <li>
                        <AccountCircleOutlinedIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToAppIcon />
                        <span>Logout</span>
                    </li>

                </ul>

            </div>
            <hr />
            <div className="bottom">
                {/* Project
                <div>
                    <br />
                    <br />
                    <ul style={{ display: "flex", padding: "20px" }}>
                        <li>Amazon</li>
                    </ul>
                </div> */}

            </div>
            <div className="bottom">
                <div
                    className="colorOption"
                    onClick={() => dispatch({ type: "LIGHT" })}
                ></div>
                <div
                    className="colorOption"
                    onClick={() => dispatch({ type: "DARK" })}
                ></div>
            </div>
        </div>
    )
}

export default Sidebar