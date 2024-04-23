import { Component } from 'react'
import Cookies from "js-cookie"
import { withRouter, Link } from 'react-router-dom';

import { MdOutlineDashboard, MdOutlineDesktopMac } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { PiNotePencilLight } from "react-icons/pi";
import { FaLayerGroup, FaChevronRight } from "react-icons/fa";
import { CgLogOff } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";

import SmhriContext from "../../context/SmhriContext"

import "./index.css"

class Sidebar extends Component {
    
    onClickLogout = () => {
        Cookies.remove("jwt_token")
        const { history } = this.props
        history.replace('/login')
    }

    render() {
        return (
            <SmhriContext.Consumer>
                {value => {
                    const { showSidebar, showEmployeeDrop, activeTab, showReportsDrop, changeEmployeeDrop, changeReportDrop, changeActiveTab } = value 

                    const reportArrowIcons = showReportsDrop ? <IoIosArrowDown size={14} className='arrow-icons'/> : <FaChevronRight size={12} className='arrow-icons'/>
                    const arrowIcons = showEmployeeDrop ? <IoIosArrowDown size={14} className='arrow-icons'/> : <FaChevronRight size={12} className='arrow-icons'/>
                    
                    const classSubMenu = !showSidebar ? "submenu" : ""
                    const classTab = activeTab ?  "active-bar" : ""

                    const onClickShowEmployeeDown = () => {
                        changeEmployeeDrop()
                    }

                    const onClickActiveTab = (id) => {
                        changeActiveTab(id)
                    }
                
                    const onClickShowReportsDown = () => {
                        changeReportDrop()
                    }

                    return (
                        <div className={`${showSidebar ? "side-bg-container" : "open-side close"}`}>
                            <ul className='sidebar-list-container'>
                                <li onClick={() => onClickActiveTab("dashboard")}>
                                    <Link to='/' className={`side-item-container ${activeTab === 'dashboard' ? classTab : ''}`}>
                                        <MdOutlineDashboard size={25}/>
                                        {showSidebar &&  <span className='item-text'>Dashboard</span>}
                                    </Link>
                                </li>

                                <li onClick={() => onClickActiveTab("company")}>
                                    <Link className={`side-item-container ${activeTab === 'company' ? classTab : ''}`} to="/company">
                                        <CiGlobe size={25}/>
                                        {showSidebar &&  <span className='item-text'>Company</span>}
                                    </Link>
                                </li>

                                <li>
                                    <div className={`side-item-container ${activeTab === 'employee' ? classTab : ''}`} onClick={onClickShowEmployeeDown}>
                                        <MdOutlineDesktopMac  size={25} />
                                        {showSidebar && <span className='item-text'>Employees</span>}
                                        {showSidebar && arrowIcons}
                                    </div>
                                    {showEmployeeDrop && 
                                        <ul className={classSubMenu}>
                                            <li  onClick={() => onClickActiveTab("employee")}>
                                                <Link to="/add-employees" className='side-drop-container link'>
                                                    <hr className='side-hr'/> <span className='item-text'>Add New Employee</span>
                                                </Link>
                                            </li>
                                            <li onClick={() => onClickActiveTab("employee")}>
                                                <Link to="/view-employees" className='side-drop-container link'>
                                                    <hr className='side-hr'/> <span className='item-text'>View All Employee</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    }

                                    {!showSidebar &&  
                                        <ul className='side-sub-menu'>
                                            <Link to="/add-employees" className="link">
                                                <li onClick={() => onClickActiveTab("employee")}>
                                                    <span>Add New Employee</span>
                                                </li>
                                            </Link>
                                            <Link to="/view-employees" className="link">
                                                <li onClick={() => onClickActiveTab("employee")}>
                                                    <span >View All Employee</span>
                                                </li>
                                            </Link>
                                        </ul>
                                    }
                                </li>

                                <li>
                                    <div className={`side-item-container ${activeTab === 'reports' ? classTab : ''}`} onClick={onClickShowReportsDown}>
                                        <PiNotePencilLight  size={25} className='md-icon'/>
                                        {showSidebar && <span className='item-text'>Reports</span>}
                                        {showSidebar && reportArrowIcons}
                                    </div>

                                    {showReportsDrop && 
                                        <ul className={classSubMenu}>
                                            <li onClick={() => onClickActiveTab("reports")}>
                                                <Link to="/employee-reports" className='side-drop-container link'>
                                                    <hr className='side-hr'/> <span className='item-text'>Employee Reports</span>
                                                </Link>
                                            </li>
                                            <li onClick={() => onClickActiveTab("reports")}>
                                                <Link to="/summary-reports" className='side-drop-container link'>
                                                    <hr className='side-hr'/> <span className='item-text'>Summary Reports</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    }

                                    {!showSidebar && 
                                        <ul className='side-sub-menu'>
                                            <Link to="/employee-reports" className="link">
                                                <li onClick={() => onClickActiveTab("reports")}>
                                                    <span>Employee Reports</span>
                                                </li>
                                            </Link>
                                            <Link to="/summary-reports" className="link">
                                                <li onClick={() => onClickActiveTab("reports")}>
                                                    <span>Summary Reports</span>
                                                </li>
                                            </Link>
                                        </ul>
                                    }
                                </li>
                                
                                <li onClick={() => onClickActiveTab("tests")}>
                                    <Link to="/tests" className={`side-item-container ${activeTab === 'tests' ? classTab : ''}`}>
                                        <FaLayerGroup size={25}/>
                                        {showSidebar && <span className='item-text'>Tests</span>}
                                    </Link>
                                </li>

                                <li className='side-item-container' onClick={this.onClickLogout}>
                                    <CgLogOff size={25}/>
                                    {showSidebar && <span className='item-text'>Logout</span>}
                                </li>
                            </ul>
                        </div>
                    )
                }}
            </SmhriContext.Consumer>
        )
    }
}

export default withRouter(Sidebar)
