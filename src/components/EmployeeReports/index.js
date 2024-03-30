import {Component} from 'react' 
import Header from '../Header'
import Sidebar from '../Sidebar' 

import Cookies from "js-cookie"

import './index.css'

class EmployeeReports extends Component{
    state = {reportsData: []}

    getEmployeeReportsData = async () => {
        const jwt = Cookies.get("jwt_token")
        const url = "https://cloudconnectcampaign.com/smhri/api/employee_master/"

        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        }

        const request = await fetch(url,options)

        if(request.ok){
            const data = await request.json()
            console.log(data)
            const updateData = data.map((each) => ({
                id: each.id,
                collectionDate: each.collection_date,
                company: each.company,
                name: each.first_name,
                employeeNo: each.employee_no,
                ticketNo: each.ticket_no,
                department: each.department,
                status: each.status
            }))

            this.setState({reportsData: updateData})
        }
        else{
            console.log(request.json())
        }
    }

    componentDidMount(){
        this.getEmployeeReportsData()
    }

    render(){
        const {reportsData} = this.state 

        return(
            <>
              <Header/>
              <div className='employee-reports-bg-container'>
              <Sidebar/> 
              <div className='employee-reports-container'>
               <h1>List Of Employee Reports</h1>
               <hr/>
            <div className='employee-reports-table-container'>
               <table>
                <thead>
                    <tr>
                        <th>
                            id
                        </th>
                        <th>
                            Collection Date
                        </th>
                        <th>
                            Company
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Employee Number
                        </th>
                        <th>
                            Ticket Number
                        </th>
                        <th>
                            Department
                        </th>
                        <th>
                            Status
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {reportsData.map((user,index) => (
                        <tr key={index}>
                             <td>{user.id}</td>
                             <td>{user.collectionDate}</td>
                             <td>{user.company}</td>
                             <td>{user.name}</td>
                             <td>{user.employeeNo}</td>
                             <td>{user.ticketNo}</td>
                             <td>{user.department}</td>
                             <td>{user.status}</td>
                             <td>
                                <button type="button">See options</button>
                             </td>
                        </tr>
                    ))}
                    </tbody>
               </table>
               </div>
              </div>
              </div>
            </>
        )
    }
}

export default EmployeeReports