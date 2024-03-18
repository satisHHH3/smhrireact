import {Component} from 'react'
import Cookies from "js-cookie"
import { withRouter,Link } from 'react-router-dom/cjs/react-router-dom.min';

import { MdOutlineDashboard,MdOutlineDesktopMac } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { PiNotePencilLight } from "react-icons/pi";
import { FaLayerGroup,FaChevronRight } from "react-icons/fa6";
import { CgLogOff } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";

import SmhriContext from "../../context/SmhriContext"

import "./index.css"




class Sidebar extends Component{
    
    onClickLogout = () => {
          Cookies.remove("jwt_token")
          const {history} = this.props
          console.log(history)
          history.replace('/login')
         
    }

    

    render(){
        
        
        return(
            <SmhriContext.Consumer>
                {value => {
                    const {showSidebar,showEmployeeDrop,activeTab,showReportsDrop,changeEmployeeDrop,changeReportDrop,changeActiveTab} = value 

                    const reportArrowIcons = showReportsDrop ? <IoIosArrowDown size={14} className='arrow-icons'/> : <FaChevronRight size={12} className='arrow-icons'/>
                    const arrowIcons = showEmployeeDrop ? <IoIosArrowDown size={14} className='arrow-icons'/> : <FaChevronRight size={12} className='arrow-icons'/>
                    
                    const classSubMenu = !showSidebar && "submenu"
                    const classTab = activeTab && "active-bar"

                    const onClickShowEmployeeDown = () => {
                    changeEmployeeDrop()
                    
                   }

                const onClickctiveTab = (id) => {
                    changeActiveTab(id)
                }
            
               const onClickShowReportsDown = () => {
                    changeReportDrop()
                }

                    return(
                        <div className={`${showSidebar ? "side-bg-container " : "open-side"}`}>
                        <ul className='sidebar-list-container'>
                            <li className='' onClick={() => onClickctiveTab("dashboard")}>
                            <Link to='/' className={activeTab === 'dashboard' ? `side-item-container ${classTab}` : 'side-item-container' }>
                            <MdOutlineDashboard size={25}/>
                               {showSidebar &&  <span className='item-text'>Dashboard</span>}
                               </Link>
                            </li>
        
                            <li onClick={() => onClickctiveTab("company")}>
                                <Link className={activeTab === 'company' ? `side-item-container ${classTab}` : 'side-item-container'  } to="/company" >
                            <CiGlobe size={25}/>
                              {showSidebar &&  <span className='item-text'>Company</span>}
                              </Link>
                            </li>
        
                            <li  >
                                <div className={activeTab === 'employee' ? `side-item-container ${classTab}` : 'side-item-container' } onClick={onClickShowEmployeeDown}>
                            <MdOutlineDesktopMac  size={25}/>
                               {showSidebar && <span className='item-text'>Employees</span>}
                               {showSidebar && arrowIcons}
                               </div>
                               {showEmployeeDrop && <ul className= {classSubMenu}>
                                <li onClick={() => onClickctiveTab("employee")}>
                                    <Link to="/add-employees" className='side-drop-container link'>
                                <hr className='side-hr'/> <span className='item-text'>Add New Employee</span>
                                </Link>
                                </li>
                                <li onClick={() => onClickctiveTab("employee")}>
                                    <Link to="/view-employees" className='side-drop-container link'>
                                <hr className='side-hr'/> <span className='item-text'>View All Employee</span>
                                </Link>
                                </li>
                                
                            </ul>}

                           {!showSidebar &&  <ul className='tooltip'>
                           <Link to="/add-employees" className="link">
                                <li onClick={() => onClickctiveTab("employee")}>
                                       <span>Add New Employee</span>
                                </li>
                                </Link>
                                <Link to="/view-employees" className="link">
                                <li onClick={() => onClickctiveTab("employee")}>
                                <span className='item-text'>View All Employee</span>
                                </li>
                                </Link>
                                
                            </ul>}
                            </li>
        
                          
        
                            <li onClick={onClickShowReportsDown}>
                                <div className={activeTab === 'reports' ? `side-item-container ${classTab}` : 'side-item-container' } >
                            <PiNotePencilLight  size={25}/>
                                {showSidebar && <span className='item-text'>Reports</span>}
                                {showSidebar && reportArrowIcons}
                                </div>

                                {showReportsDrop && <ul className= {classSubMenu}>
                                <li onClick={() => onClickctiveTab("reports")}>
                                    <Link to="/employee-reports" className='side-drop-container link'>
                                <hr className='side-hr'/> <span className='item-text'>Employee Reports</span>
                                </Link>
                                </li>
                                <li onClick={() => onClickctiveTab("reports")}>
                                    <Link to="/summary-reports" className='side-drop-container link'>
                                <hr className='side-hr'/> <span className='item-text'>Summary Reports</span>
                                </Link>
                                </li>
                                
                            </ul>}

                            {!showSidebar && <ul className='tooltip'>
                                <Link to="/employee-reports" className="link">
                                <li onClick={() => onClickctiveTab("reports")}>
                               <span >Employee Reports</span>
                                </li>
                                </Link>
                                <Link to="/summary-reports" className="link">
                                <li onClick={() => onClickctiveTab("reports")}>
                                <span >Summary Reports</span>
                                </li>
                                </Link>
                            </ul>}
                            </li>
                              
                          
        
                            <li onClick={() => onClickctiveTab("tests")}>
                                <Link to="/tests" className={activeTab === 'tests' ? `side-item-container ${classTab}` : 'side-item-container' }>
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