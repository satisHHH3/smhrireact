import {Component} from 'react'
import { MdOutlineSegment } from "react-icons/md";

import smImg from "../Images/logo-small.jpg"

import SmhriContext from '../../context/SmhriContext';

import "./index.css"

class Header extends Component{
    
    render(){
        return(<SmhriContext.Consumer>
            {value => {
                const {showSidebar,changeSidebar} = value 

                const onClickMenuButton = () => {
                    changeSidebar()
                }

                return(
                    <nav className='nav-bg-container'>
                    <div className='nav-container'>
                        <img src={smImg} className='nav-logo' alt="logo"/>
                        <button type="button" className='menu-button' onClick={onClickMenuButton}>
                        <MdOutlineSegment size={28}/>
                        </button>
                        <h1>Dashboard</h1>
                   </div>
                   </nav>
                )
            }}
        </SmhriContext.Consumer>)
       
    }
}

export default Header