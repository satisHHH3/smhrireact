import {Component} from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Cookies from "js-cookie"
import DataTable from 'react-data-table-component';

import {Container,BgContainer,ButtonContainer,EmployeesHead,EmployeesButton} from "./styledComponents"


import './index.css'


const data = [
    {
        id: 1,
        name: 'Satish Veeravalli',
        
    }
]



class ViewEmployees extends Component{
    state = {employeeData:[]}

    getViewEmployeesData = async () => {
        const url = 'https://cloudconnectcampaign.com/smhri/api/employee_master/'
        const jwt = Cookies.get("jwt_token")
        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        }
        const request = await fetch(url,options)
        console.log(request)
        if(request.ok){
            const data = await request.json()
            console.log(data)
            const updateData = data.map((each) => {
                return{
                    audiometerThresholdDecimats:each.AudiometerThresholdDecimats,bloodTest:each.BloodTest,
                    complaints: each.Complaints,hematology:each.Hematology,LungFunctionTest: each.lungFunctionTest,
                    microscopicExamination: each.MicroscopicExamination,otherTests: each.OtherTests,physiologicalTest: each.PhysiologicalTest,
                    systematicExamination: each.SystematicExamination,visualTest: each.VisualTest,
                    aadharCardNo: each.aadhar_card_no,address: each.address, birthdate: each.birthdate,city: each.city,
                    collectionDate: each.collection_date,company: each.company,dateJoining: each.date_joining,department: each.department,designation: each.designation,employeeNo: each.employee_no,
                    firstName: each.first_name,fitnessCertificateDate: each.fitness_certificate_date,id: each.id,lastName: each.last_name,listCompany: each.list_company,
                     middleName: each.middle_name,namePref: each.name_pref,panNumber: each.pan_number,previousCertificateNumber: each.previous_certificate_number,sex: each.sex,
                   show: each.show,status: each.status,testDate: each.test_date,testType: each.testType,ticketNo: each.ticket_no
          }
            })

            this.setState({employeeData:updateData})
           console.log(updateData)
        }
       

    }

    componentDidMount(){
        this.getViewEmployeesData()
    }
    render(){
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
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Company Name</th>
                            <th>Name</th>
                            <th>Ticket Number</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Birthdate</th>
                            <th>Designation</th>
                            <th>Department</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    
                </table>
                </div>
                </BgContainer>
            </Container>
            </>
        )
    }
}

export default ViewEmployees