import {Component} from 'react' 
import {Link} from "react-router-dom"
import Header from '../Header'
import Sidebar from '../Sidebar' 
import SmhriContext from '../../context/SmhriContext'

import './index.css'

class SummaryReports extends Component{
    state = {currentPage: 1,itemsPerPage: 10}

    onClickPrevious = () => {
        const {currentPage} = this.state 

        if(currentPage !== 1){
            this.setState((prevState) => ({currentPage: prevState.currentPage - 1}))
        }
    }

    onClickNxtPage = (npage) => {
        const {currentPage} = this.state 

        if(currentPage !== npage){
            this.setState((prevState) => ({currentPage: prevState.currentPage + 1}))
        }
    }

   
    onClickChangePage = (n) => {
        
            this.setState({currentPage: n})
       
    }


    render(){
        const {currentPage,itemsPerPage} = this.state
       
        return(
            <SmhriContext.Consumer>
                {value => {
                    const {companyData} = value 
                    console.log(companyData)
                    const lastPageIndex = currentPage * itemsPerPage
                    const firstPageIndex = lastPageIndex - itemsPerPage 
                    const currentItems = companyData.slice(firstPageIndex,lastPageIndex)
                    const npages = Math.ceil(companyData.length /itemsPerPage )
                    const nums = [...Array(npages+1).keys()].slice(1)
                    console.log(nums)
                    return(
                        <>
                        <Header/>
                        <div className='summary-reports-bg-container'>
                        <Sidebar/> 
                        <div className='summary-reports-container'>
                         <h1>List Of Summary Reports</h1>
                         <hr/>

                         <div className='summary-table-container'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Company Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    {currentItems.map((each,i) => (
                                        <tr key={i}>
                                        <td>{each.id}</td>
                                        <td>{each.name}</td>
                                        <td><a href='/final-reports' target='_blank' className='summary-reports-text'>Summary Report</a></td>
                                        </tr>
                                    ))}
                                    
                                </tbody>
                                <div>
                                </div>
                            </table>
                            <ul className='summary-page-container'>
                            <li>
                            <button type="button" className='prev-button' onClick={this.onClickPrevious}>Previous</button>
                            </li>
                            {nums.map((n,i) => (
                               <li key={i}>
                                  <button type="button" onClick={() => this.onClickChangePage(n)} className={`num-button ${currentPage === n ? "active-num" : ""}`}>{n}</button>
                               </li>
                            ))}
                           
                            <li>
                                
                            <button type="button" className='nxt-button' onClick={() => this.onClickNxtPage(npages)} >Next</button>
                            </li>
                        </ul>
                            
                            </div>
                        </div>
                        </div>
                      </>
                    )
                }}
            </SmhriContext.Consumer>
           
        )
    }
}

export default SummaryReports