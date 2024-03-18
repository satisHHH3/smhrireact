import {Component} from 'react' 
import Header from '../Header'
import Sidebar from '../Sidebar' 

import './index.css'

class SummaryReports extends Component{
    render(){
        return(
            <>
              <Header/>
              <div className='summary-reports-bg-container'>
              <Sidebar/> 
              <div className='summary-reports-container'>
               <h1>List Of Summary Reports</h1>
               <hr/>
              </div>
              </div>
            </>
        )
    }
}

export default SummaryReports