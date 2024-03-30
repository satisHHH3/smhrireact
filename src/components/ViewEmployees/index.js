import {Component} from 'react'
import {Link} from "react-router-dom"
import Header from '../Header'
import Sidebar from '../Sidebar'
import Cookies from "js-cookie"
import {TailSpin} from 'react-loader-spinner'

import SmhriContext from '../../context/SmhriContext'

import { MdOutlineDeleteOutline } from "react-icons/md";
import { PiPencilBold } from "react-icons/pi";


import {Container,BgContainer,ButtonContainer,EmployeesHead,EmployeesButton} from "./styledComponents"


import './index.css'

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
  }




class ViewEmployees extends Component{
    state = {employeeData:[],currentPage:1,itemsPerPage:5,searchInput:"",apiStatus:apiStatusConstants.initial}

    
    getViewEmployeesData = async () => {
        this.setState({apiStatus:apiStatusConstants.inProgress})
        const url = 'https://cloudconnectcampaign.com/smhri/api/employee_master/'
        const jwt = Cookies.get("jwt_token")
        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        }
        const request = await fetch(url,options)
       
        if(request.ok){
            const data = await request.json()
           
            const updateData = data.map((each) => {
                return{

                    aadharCardNo: each.aadhar_card_no,address: each.address, birthdate: each.birthdate,city: each.city,
                    collectionDate: each.collection_date,company: each.company,dateJoining: each.date_joining,department: each.department,designation: each.designation,employeeNo: each.employee_no,
                    firstName: each.first_name,fitnessCertificateDate: each.fitness_certificate_date,id: each.id,lastName: each.last_name,listCompany: each.list_company,
                     middleName: each.middle_name,namePref: each.name_pref,panNumber: each.pan_number,previousCertificateNumber: each.previous_certificate_number,sex: each.sex,
                   show: each.show,status: each.status,testDate: each.test_date,testType: each.testType,ticketNo: each.ticket_no
          }
            })

            this.setState({employeeData:updateData,apiStatus:apiStatusConstants.success})
           
        }
       

    }

    componentDidMount(){
        this.getViewEmployeesData()
    }


    onClickDelelte = async (id) => {
        const url = `https://cloudconnectcampaign.com/smhri/api/employee_master/${id}/`
        const jwt = Cookies.get("jwt_token")
        const options = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        }
        const request = await fetch(url,options)

        if(request.ok){
            this.getViewEmployeesData()
        }
        
        
    }

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

    onChangeItemsPerPage = (e) => {
           this.setState({itemsPerPage: parseInt(e.target.value)})
    }

    onClickChangePage = (n) => {
        
            this.setState({currentPage: n})
       
    }

    onChangeInput = (event) => {
           this.setState({searchInput:event.target.value})
    }


    renderViewEmployeesPage = () => {
        
    }

    render(){
        const {employeeData,currentPage,itemsPerPage,searchInput} = this.state
        
        const lastIndexOfPage = currentPage * itemsPerPage
        const firstIndexOfPage = lastIndexOfPage - itemsPerPage 
        const filterData = employeeData.filter((each) => each.firstName.toLowerCase().includes(searchInput.toLowerCase()))
        const currentItems = filterData.slice(firstIndexOfPage, lastIndexOfPage)
        const npage  = Math.ceil(filterData.length / itemsPerPage)
        const numbers = [...Array(npage + 1).keys()].slice(1)
       console.log(filterData)

        return(
            <SmhriContext.Consumer>
                {value => {
                    const {companyData} = value 
                    
                    return(
                        <>
            <Header/>
            <Container>
                <Sidebar/>
               
                <BgContainer>
                    <ButtonContainer>
                        <EmployeesHead>List Of Employees</EmployeesHead>
                        <div>
                            <EmployeesButton type="button">Export To Excel</EmployeesButton>
                            <EmployeesButton type="button">Add New</EmployeesButton>
                        </div>
                    </ButtonContainer>
                    <hr/>
                <div className='view-employee-table'>
                    <div >
                        <div className='search-container'>
                            <div>
                            <span>Show</span>
                            <select onChange={this.onChangeItemsPerPage}>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                            <span>
                                entries
                            </span>
                            </div>
                            <span>Search:</span>
                            <input type="text" onChange={this.onChangeInput}/>
                            
                        </div>
                       <table>
                         <thead>
                        <tr >
                            <th >id</th>
                            <th id="listname">Company Name</th>
                            <th>Name</th>
                            <th>Ticket Number</th>
                            <th >Address</th>
                            <th>City</th>
                            <th>Birthdate</th>
                            <th>Designation</th>
                            <th>Department</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((user,index) => {
                            const isEvenNum = user.id % 2 === 0
                            const companyName = companyData.find((each) => each.id === parseInt(user.id))
                            
                            return(
                            <tr key={index}>
                                <td className ={isEvenNum ? "even-num" : "odd-num"}>{user.id}</td>
                                <td>{companyName.name}</td>
                                <td><Link to={`/profile/${user.id}`} className="name-link">{user.firstName}</Link></td>
                                <td>{user.ticketNo}</td>
                                <td>{user.address}</td>
                                <td>{user.city}</td>
                                <td>{user.birthdate}</td>
                                <td>{user.designation}</td>
                                <td>{user.department}</td>
                                <td>{user.status}</td>
                                <td>
                                    <button className="view-employee-button-pencil">{<PiPencilBold size="14"/>}</button>
                                    <button className='view-employee-button-delete'  onClick={() => this.onClickDelelte(user.id)}>{<MdOutlineDeleteOutline size="14"/>}</button>
                                </td>
                            </tr>
                        )})}
                        </tbody>
                    
                        </table>
                        <div className='entries-and-page-container'>
                            <p>Showing 1 to {itemsPerPage} of {filterData.length} entries</p>
                        <ul className='view-employees-pagination-container'>
                            <li>
                            <button type="button" className='prev-button' onClick={this.onClickPrevious}>Previous</button>
                            </li>
                            {numbers.map((n,i) => (
                               <li key={i}>
                                  <button type="button" onClick={() => this.onClickChangePage(n)} className={`num-button ${currentPage === n ? "active-num" : ""}`}>{n}</button>
                               </li>
                            ))}
                           
                            <li>
                            <button type="button" className='nxt-button' onClick={() => this.onClickNxtPage(npage)} >Next</button>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                </BgContainer>
            </Container>
            </>
                    )
                }}
            </SmhriContext.Consumer>
           
        )
    }
}

export default ViewEmployees