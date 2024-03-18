import {Component} from 'react' 
import Header from '../Header'
import Sidebar from '../Sidebar' 

import './index.css'

class EmployeeReports extends Component{
    render(){
        return(
            <>
              <Header/>
              <div className='employee-reports-bg-container'>
              <Sidebar/> 
              <div className='employee-reports-container'>
               <h1>List Of Employee Reports</h1>
               <hr/>
              </div>
              </div>
            </>
        )
    }
}

export default EmployeeReports