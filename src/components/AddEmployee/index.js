import React, { useState } from 'react';
import {Component} from "react"
import Cookies from "js-cookie"

import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCheck } from "react-icons/fa6";

import Header from '../Header'
import Sidebar from '../Sidebar'
import SmhriContext from '../../context/SmhriContext';

import "./index.css"
												
const themeColors = {
  light: {
    background: '#19bd3c',
    text: '#a7e1f2',
    progress: '#912c90',
  },
  dark: {
    background: '#333333',
    text: 'green',
    progress: '#ffffff',
  },
};

const AddEmployee = () => {
  const [values,setValues] = useState({
    image: null,
    companyId: 9,namePrefix:"",gender:"",city:"",selectCompany: "",
     firstName:"",middleName:"",lastName:"",department:"",employeeNo:"",ticketNo:'',aadharNo: "",panNo:"",designation:"",address:"",certificateNo:"",joinDate:"",birthDate:"",certificateDate:"",prevCertificateDate:"",
     testDate:"",collectionDate:"",status:""
  })

  const notify = () => {
    toast(<div className='d-flex flex-row align-items-center'>
      <span><FaCheck size={20}/></span>
      <h1 className='notify-text'>Success</h1>
    </div>, {
      position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    transition: Bounce,
    // Use the custom theme colors
    style: {
      background: themeColors.light.background,
      color: themeColors.light.text,
    },
    // Customize the progress bar color
    progressStyle: {
      background: themeColors.light.progress,
    },
      });
  }
   
 
  const onSubmitFormDetails = async (e) => {
        e.preventDefault()
        
        const jwt = Cookies.get("jwt_token")

        const {companyId,selectCompany,namePrefix,gender,city,tests,firstName,lastName,middleName,employeeNo,ticketNo,aadharNo,panNo,joinDate,
          designation,address,testDate,collectionDate,status,prevCertificateDate,certificateDate,birthDate,department} = values
           
        
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
    "test_date": testDate,
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

  if(request.ok){
    console.log(request)
    notify()
    setValues({ image: null,
      companyId: 9,namePrefix:"",gender:"",city:"",selectCompany: "",
       firstName:"",middleName:"",lastName:"",department:"",employeeNo:"",ticketNo:'',aadharNo: "",panNo:"",designation:"",address:"",certificateNo:"",joinDate:"",birthDate:"",certificateDate:"",prevCertificateDate:"",
       testDate:"",collectionDate:"",status:""})
  }
 
  }

  
    return(
      
      <SmhriContext.Consumer>
        {value => {
          const {companyData} = value
          
          const findCompany = companyData.find((each) => each.id === parseInt(values.companyId))
          const ss = findCompany.name
          console.log(findCompany)

          return(
            <>
            <Header/>
            <div className='add-employee-container'>
              <Sidebar/>
              <div className='employee-bg-container'>
                <div className='employee-card-container'>
                  <h1 className='employee-heading'>Add New Employee</h1>
                  <button type="button" className='btn btn-primary align-self-start' onClick={() => notify()}>notify</button>
                 
                  <hr/>
                  <form className='employee-form-container' onSubmit={onSubmitFormDetails}>
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='listName'>Company Name:*</label>
                      <select className="employee-inputs" id="listName" value={values.companyId}  onChange={e => setValues({...values,companyId: e.target.value})}>
                            {companyData.map((each) => (
                              <option  key={each.id} value={each.id}>{each.name}</option>
                            ))}
                      </select >
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='prefix'>Name Prefix:</label>
                      <select className="employee-inputs" value={values.namePrefix} id="prefix" onChange={e => setValues({...values,namePrefix: e.target.value})}>
                        <option value='Mr.'>Mr</option>
                        <option value='Mrs.'>Mrs</option>
                      </select>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='first_name'>First Name*</label>
                      <input className="employee-inputs" value={values.firstName} id="first_name" type="text" onChange={e => setValues({...values,firstName: e.target.value})}/>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='middle_name'>Middle Name:*</label>
                      <input className="employee-inputs" id="middle_name" value={values.middleName} type="text" onChange={e => setValues({...values,middleName: e.target.value})}/>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='last_name' >Last Name:*</label>
                      <input className="employee-inputs" id="last_name" value={values.lastName} type="text" onChange={e => setValues({...values,lastName: e.target.value})}/>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text"  htmlFor='gender'>Gender:*</label>
                      <select className="employee-inputs" id="gender" value={values.gender} onChange={e => setValues({...values,gender: e.target.value})}>
                          <option>Please Select</option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Others</option>
                      </select>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='selectCompany'>Select Company</label>
                      <select className="employee-inputs" id="selectCompany" value={values.selectCompany} onChange={e => setValues({...values,selectCompany: e.target.value})}>
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
                      <input className="employee-inputs" id="employees_no" type="text" value={values.employeeNo} onChange={e => setValues({...values,employeeNo: e.target.value})}/>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='ticket_no'>Ticket No *</label>
                      <input className="employee-inputs" id="ticket_no" type="text" value={values.ticketNo} onChange={e => setValues({...values,ticketNo: e.target.value})}/>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='aadhar'>Aadhar card no:</label>
                      <input className="employee-inputs" id="aadhar" type="text" value={values.aadharNo} onChange={e => setValues({...values,aadharNo: e.target.value})}/>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='pan'>Pan Number</label>
                      <input className="employee-inputs" id="pan" type="text" value={values.panNo} onChange={e => setValues({...values,panNo: e.target.value})}/>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='joining_date'>Joining Date</label>
                      <input className="employee-inputs" id="joining_date" type="date" value={values.joinDate} onChange={e => setValues({...values,joinDate: e.target.value})}/>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='designation'>Designation</label>
                      <input className="employee-inputs" id="designation" type="text" value={values.designation} onChange={e => setValues({...values,designation: e.target.value})}/>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='department'>Department</label>
                      <input className="employee-inputs" id="department" type="text" value={values.department} onChange={e => setValues({...values,department: e.target.value})}/>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='address'>Address</label>
                      <input className="employee-inputs" id="address" type="text" value={values.address} onChange={e => setValues({...values,address: e.target.value})}/>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='city'>City</label>
                      <select className="employee-inputs" id="city" value={values.city} onChange={e => setValues({...values,city: e.target.value})} >
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
                      <input className="employee-inputs" id="birthdate" type="date" value={values.birthDate} onChange={e => setValues({...values,birthDate: e.target.value})}/>
                    </div>
      
                    <div className='upload-img-container'>
                      <label className="employee-label-text" htmlFor='img'>Photo:</label>
                      <button></button>
                      <input  id="img" type="file"/>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='fitness_certificate'>Fitness Certificate Date</label>
                      <input className="employee-inputs" id="fitness_certificate" type="date" value={values.certificateDate} onChange={e => setValues({...values,certificateDate: e.target.value})}/>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='previous_certificate'>Previous Certificate No</label>
                      <input className="employee-inputs" id="previous_certificate" type="input" value={values.prevCertificateDate} onChange={e => setValues({...values,prevCertificateDate: e.target.value})}/>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='collection_date'>Collection Date</label>
                      <input className="employee-inputs" id="collection_date" type="date" value={values.collectionDate} onChange={e => setValues({...values,collectionDate: e.target.value})}/>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='test_date'>Test Date*</label>
                      <input className="employee-inputs" id="test_date" type="date" value={values.testDate} onChange={e => setValues({...values,testDate: e.target.value})}/>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='test_type'>Test Type:*</label>
                      <select className="employee-inputs" id="test_type" value={values.tests} onChange={e => setValues({...values,tests: e.target.value})}>
                        <option value="Select Test Type">Select Test Type</option>
                        <option value="Pre">Pre</option>
                        <option value="Periodical">Periodical</option>
                      </select>
                    </div>
      
                    <div className='employee-input-container'>
                      <label className="employee-label-text" htmlFor='status'>Status:*</label>
                      <select className="employee-inputs" id="status" value={values.status} onChange={e => setValues({...values,status: e.target.value})}>
                        <option value="Please Select Status">Please Select Status</option>
                        <option value="approved">Approved</option>
                        <option value="pending">Pending</option>
                      </select>
                      
                    </div>
                      <button type="submit" className='employee-add-button'>Submit</button>
                      <ToastContainer/>
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


export default AddEmployee;


/*  
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
      */


   /* const {companyId,selectCompany,namePrefix,gender,city,tests,firstName,lastName,middleName,employeeNo,ticketNo,aadharNo,panNo,joinDate,
    designation,address,department,status,testDate,collectionDate,prevCertificateDate,certificateDate,birthDate} = state
    console.log(companyId)*/