import React from 'react';
import {Component} from "react"
import Cookies from "js-cookie"


import Header from '../Header'
import Sidebar from '../Sidebar'
import SmhriContext from '../../context/SmhriContext';

import "./index.css"
																							

class AddEmployee extends Component{
  state = {image: null,companyId: 9,namePrefix:"",gender:"",city:"",selectCompany: "",
firstName:"",middleName:"",lastName:"",department:"",employeeNo:"",ticketNo:'',aadharNo: "",panNo:"",designation:"",address:"",certificateNo:"",joinDate:"",birthDate:"",certificateDate:"",prevCertificateDate:"",
testDate:"",collectionDate:"",status:""}

  onChangeCompanyName = (event) => {
    
    this.setState({companyId: event.target.value})
  }

  onChangeSelectCompany = (event) => {
    this.setState({selectCompany: event.target.value})
  }

  onChangePrefix = (event) => {
    
    this.setState({namePrefix: event.target.value})
  }

  onChangeGender = (e) => {
     this.setState({gender: e.target.value})
  }

  onChangeImage = (event) => {
      console.log(event.target.files[0])
      this.setState({Image:event.target.files[0]})
  }

  onChangeCity = (e) => {
    this.setState({city: e.target.value})
  }

  onChangeTestType = (e) => {
    this.setState({tests: e.target.value})
  }

  onChangeStatus = (e) => {
    this.setState({status: e.target.value})
  }

  onChangeName = (e) => {
    this.setState({firstName: e.target.value})
  }

  onChangeMiddleName = (e) => {
    this.setState({middleName: e.target.value})
  }

  onChangeLastName = (e) => {
    this.setState({lastName: e.target.value})
  }

  onChangeEmployeeNo = (e) => {
    this.setState({employeeNo: e.target.value})
  }

  onChangeTicketNo = (e) => {
    this.setState({ticketNo: e.target.value})
  }

  
  onChangeAadharNo = (e) => {
    this.setState({aadharNo: e.target.value})
  }

  onChangePanNo = (e) => {
    this.setState({panNo: e.target.value})
  }

  onChangeJoinDate = (e) => {
    this.setState({joinDate: e.target.value})
  }

  onChangeDesignation = (e) => {
    this.setState({designation: e.target.value})
  }

   onChangeAddress = (e) => {
    this.setState({address: e.target.value})
  }

   onChangeBirthDate = (e) => {
    this.setState({birthDate: e.target.value})
  }

   onChangeFitCertificateDate = (e) => {
    this.setState({certificateDate: e.target.value})
  }

   onChangePrevCertificateDate = (e) => {
    this.setState({prevCertificateDate: e.target.value})
  }

   onChangeCollectionDate = (e) => {
    this.setState({collectionDate: e.target.value})
  }

  onChangeDepartment = (e) => {
    this.setState({department: e.target.value})
  }


  onChangeTestDate = (e) => {
    this.setState({testDate: e.target.value})
  }

  onSubmitFormDetails = async (e) => {
        e.preventDefault()
        
        const jwt = Cookies.get("jwt_token")

        const {companyId,selectCompany,namePrefix,gender,city,tests,firstName,lastName,middleName,employeeNo,ticketNo,aadharNo,panNo,joinDate,
          designation,address,testDate,collectionDate,status,prevCertificateDate,certificateDate,birthDate,department} = this.state
           
        
        const userData = {
     
    "name_pref": namePrefix,
    "test_type": tests,
    "first_name": firstName,
    "middle_name": middleName,
    "last_name": lastName,
    "sex": gender,
    "company": selectCompany,
    "employee_no": employeeNo,
    "ticket_no": ticketNo,
    "aadhar_card_no": aadharNo,
    "pan_number": panNo,
    "date_joining": joinDate,
    "designation": designation,
    "department": department,
    "address": address,
    "city": city,
    "birthdate": birthDate,
    "fitness_certificate_date": certificateDate,
    "previous_certificate_number": prevCertificateDate,
    "collection_date": collectionDate,
    "test_date": certificateDate,
    "status": status,
    "show": "yes",
    "list_company": companyId,
   }
      
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${jwt}`
    },
    body: JSON.stringify(userData)
  }

  const url = "https://cloudconnectcampaign.com/smhri/api/employee_master/"
  const request = await fetch(url,options)
 const data = await request.json()
  console.log(data)
  }



  render(){
    const {companyId,selectCompany,namePrefix,gender,city,tests,firstName,lastName,middleName,employeeNo,ticketNo,aadharNo,panNo,joinDate,
    designation,address,department,status,testDate,collectionDate,prevCertificateDate,certificateDate,birthDate} = this.state
    console.log(companyId)
    return(
      
      <SmhriContext.Consumer>
        {value => {
          const {companyData} = value
          
          const findCompany = companyData.find((each) => each.id === parseInt(companyId))
          const ss = findCompany.name
          console.log(ss)

          return(
            <>
            <Header/>
            <div className='container'>
              <Sidebar/>
              <div className='employee-bg-container'>
                <div className='employee-card-container'>
                  <h1 className='employee-heading'>Add New Employee</h1>
                  <hr/>
                  <form className='employee-form-container' onSubmit={this.onSubmitFormDetails}>
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='listName'>Company Name:*</label>
                      <select className="employee-inputs" id="listName" value={companyId}  onChange={this.onChangeCompanyName}>
                            {companyData.map((each) => (
                              <option  key={each.id} value={each.id}>{each.name}</option>
                            ))}
                      </select >
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='prefix'>Name Prefix:</label>
                      <select className="employee-inputs" value={namePrefix} id="prefix" onChange={this.onChangePrefix}>
                        <option value='Mr.'>Mr</option>
                        <option value='Mrs.'>Mrs</option>
                      </select>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='first_name'>First Name*</label>
                      <input className="employee-inputs" value={firstName} id="first_name" type="text" onChange={this.onChangeName}/>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='middle_name'>Middle Name:*</label>
                      <input className="employee-inputs" id="middle_name" value={middleName} type="text" onChange={this.onChangeMiddleName}/>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='last_name' >Last Name:*</label>
                      <input className="employee-inputs" id="last_name" value={lastName} type="text" onChange={this.onChangeLastName}/>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" value={gender} htmlFor='gender'>Gender:*</label>
                      <select className="employee-inputs" id="gender" onChange={this.onChangeGender}>
                          <option>Please Select</option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Others</option>
                      </select>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='selectCompany'>Select Company</label>
                      <select className="employee-inputs" id="selectCompany" value={selectCompany} onChange={this.onChangeSelectCompany}>
                          <option>Please Select Company</option>
                          <option>Flat Management Company</option>
                          <option>Private Limited Company</option>
                          <option>Limited Liability Partnership</option>
                          <option>Proprietary</option>
                          <option>Right to Management Company</option>
                          <option>Community Intrest Company</option>
                          <option>public Limited Company</option>
                      </select>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='employees_no'>Employees No</label>
                      <input className="employee-inputs" id="employees_no" type="text" value={employeeNo} onChange={this.onChangeEmployeeNo}/>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='ticket_no'>Ticket No *</label>
                      <input className="employee-inputs" id="ticket_no" type="text" value={ticketNo} onChange={this.onChangeTicketNo}/>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='aadhar'>Aadhar card no:</label>
                      <input className="employee-inputs" id="aadhar" type="text" value={aadharNo} onChange={this.onChangeAadharNo}/>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='pan'>Pan Number</label>
                      <input className="employee-inputs" id="pan" type="text" value={panNo} onChange={this.onChangePanNo}/>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='joining_date'>Joining Date</label>
                      <input className="employee-inputs" id="joining_date" type="date" value={joinDate} onChange={this.onChangeJoinDate}/>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='designation'>Designation</label>
                      <input className="employee-inputs" id="designation" type="text" value={designation} onChange={this.onChangeDesignation}/>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='department'>Department</label>
                      <input className="employee-inputs" id="department" type="text" value={department} onChange={this.onChangeDepartment}/>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='address'>Address</label>
                      <input className="employee-inputs" id="address" type="text" value={address} onChange={this.onChangeAddress}/>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='city'>City</label>
                      <select className="employee-inputs" id="city" value={city} onChange={this.onChangeCity} >
                        <option >Please Select</option>
                        <option >Vadodara</option>
                        <option >Ahemedabad</option>
                        <option >Bharuch</option>
                        <option >Rajkot</option>
                        <option >Surat</option>
                        <option >Andhra Pradesh</option>
                        <option >Telangana</option>
                      </select>
                      
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='birthdate'>Birthdate</label>
                      <input className="employee-inputs" id="birthdate" type="date" value={birthDate} onChange={this.onChangeBirthDate}/>
                    </div>
      
                    <div className='upload-img-container'>
                      <label className="employee-label-text" htmlFor='img'>Photo:</label>
                      <button></button>
                      <input  id="img" type="file" onChange={this.onChangeImage}/>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='fitness_certificate'>Fitness Certificate Date</label>
                      <input className="employee-inputs" id="fitness_certificate" type="date" value={certificateDate} onChange={this.onChangeFitCertificateDate}/>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='previous_certificate'>Previous Certificate No</label>
                      <input className="employee-inputs" id="previous_certificate" type="input" value={prevCertificateDate} onChange={this.onChangePrevCertificateDate}/>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='collection_date'>Collection Date</label>
                      <input className="employee-inputs" id="collection_date" type="date" value={collectionDate} onChange={this.onChangeCollectionDate}/>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='test_date'>Test Date*</label>
                      <input className="employee-inputs" id="test_date" type="date" value={testDate} onChange={this.onChangeTestDate}/>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='test_type'>Test Type:*</label>
                      <select className="employee-inputs" id="test_type" value={tests} onChange={this.onChangeTestType}>
                        <option value="Select Test Type">Select Test Type</option>
                        <option value="Pre">Pre</option>
                        <option value="Periodical">Periodical</option>
                      </select>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='status'>Status:*</label>
                      <select className="employee-inputs" id="status" value={status} onChange={this.onChangeStatus}>
                        <option value="Please Select Status">Please Select Status</option>
                        <option value="approved">Approved</option>
                        <option value="pending">Pending</option>
                      </select>
                      
                    </div>
                      <button type="submit" className='employee-add-button'>Submit</button>
                  </form>
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


export default AddEmployee;
