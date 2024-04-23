import {Component} from 'react'
import React, {useState,useEffect, useContext, } from 'react';
import {useParams} from 'react-router-dom'
import Cookies from "js-cookie"

import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCheck } from "react-icons/fa6";

import SmhriContext from '../../context/SmhriContext';

import "./index.css"

const themeColors = {
  light: {
    background: '#19bd3c',
    text: '#7a5677',
    progress: '#912c90',
  },
  dark: {
    background: '#333333',
    text: 'green',
    progress: '#ffffff',
  },
};

const EditEmployee = (props) => {
  const {employeeData} = props 
  const {id} = useParams()
  
    const { companyData } = useContext(SmhriContext);

    // Define state variables using useState hook
    const [values, setValues] = useState({
      collectionDate: employeeData.collectionDate,
      name: employeeData.name,
      employeeNo: employeeData.employeeNo,
      ticketNo: employeeData.ticketNo,
      department: employeeData.department,
      status: employeeData.status,
      testType: employeeData.testType,
      testDate: employeeData.testDate,
      sex: employeeData.sex,
      previousCertificateNumber: employeeData.previousCertificateNumber,
      panNumber: employeeData.panNumber,
      namePref: employeeData.namePref,
      middleName: employeeData.middleName,
      listCompany: employeeData.listCompany,
      lastName: employeeData.last_name,
      fitnessCertificateDate: employeeData.fitnessCertificateDate,
      designation: employeeData.designation,
      dateJoining: employeeData.dateJoining,
      company: employeeData.company,
      city: employeeData.city,
      birthdate: employeeData.birthdate,
      address: employeeData.address,
      aadharCardNo: employeeData.aadharCardNo
    });

    // Define event handlers

    const notify = () => {
      toast(<div className='d-flex flex-row align-items-center'>
        <span><FaCheck size={20}/></span>
        <h1 className='notify-text'>Updated</h1>
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
     

    const onSubmitFormDetails = async (event) => {
        event.preventDefault();

        const jwt = Cookies.get("jwt_token")
        const url = `https://cloudconnectcampaign.com/smhri/api/employee_master/${id}/`
        const { collectionDate,
          name,
          employeeNo,
          ticketNo,
          department,
          status,
          testType,
          testDate,
          sex,
          previousCertificateNumber,
          panNumber,
          namePref,
          middleName,
          listCompany,
          lastName,
          fitnessCertificateDate,
          designation,
          dateJoining,
          company,
          city,
          birthdate,
          address,
          aadharCardNo} = values

          const userData = { collection_date: collectionDate,
            first_name: name,
            employee_no: employeeNo,
            ticket_no: ticketNo,
            department: department,
            status: status,
            test_type: testType,
            test_date: testDate,
            sex: sex,
            previous_certificate_number: previousCertificateNumber,
            pan_number: panNumber,
            name_pref: namePref,
            middle_name: middleName,
            list_company: listCompany,
            last_name: lastName,
            fitness_certificate_date: fitnessCertificateDate,
            designation: designation,
            date_joining: dateJoining,
            company,
            city,
            birthdate,
            address,
            aadhar_card_no: aadharCardNo}
  

          const options = {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${jwt}`
          },
          body: JSON.stringify(userData)
          }

          const request = await fetch(url,options)
          if(request.ok){
            const {updateEmployee} = props
                updateEmployee()
                notify()
          }
        console.log(request)
    }

    
    return (
        <div className='edit-employee-container'>
            <h1>Update Employee Details</h1>
            <form className='edit-employee-form' onSubmit={onSubmitFormDetails}>
                <div className='employee-input-container'>
                    <label className="employee-label-text" htmlFor='name'>Company Name:*</label>
                    <select className="employee-inputs" id="name" value={values.listCompany} onChange={e => setValues({...values,listCompany: e.target.value})}>
                        {companyData.map((each) => (
                            <option key={each.id} value={each.id}>{each.name}</option>
                        ))}
                    </select>
                </div>
                <div className='employee-input-container'>
                <label className="employee-label-text"  htmlFor='prefix' >Name Prefix:</label>
                <select className="employee-inputs"  value={values.namePref}  id="prefix" onChange={e => setValues({...values,namePref: e.target.value})}>
                  <option >Mr.</option>
                  <option >Mrs.</option>
                </select>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='first_name' >First Name*</label>
                <input className="employee-inputs"  id="first_name" type="text"  value={values.name} onChange={e => setValues({...values, name: e.target.value})}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='middle_name'>Middle Name:*</label>
                <input className="employee-inputs" id="middle_name"  type="text" value={values.middleName} onChange={e => setValues({...values,middleName: e.target.value})}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='last_name' >Last Name:*</label>
                <input className="employee-inputs" id="last_name"  type="text" value={values.lastName} onChange={e => setValues({...values,lastName: e.target.value})}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text"  htmlFor='gender'>Gender:*</label>
                <select className="employee-inputs" id="gender" value={values.sex} onChange={e => setValues({...values,sex: e.target.value})}>
                    <option>Please Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                </select>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='selectCompany'>Select Company</label>
                <select className="employee-inputs" id="selectCompany" value={values.company} onChange={e => setValues({...values,company: e.target.value})}>
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
                <input className="employee-inputs" id="employees_no" type="text"  value={values.employeeNo} onChange={e => setValues({...values,employeeNo: e.target.value})}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='ticket_no'>Ticket No *</label>
                <input className="employee-inputs" id="ticket_no" type="text"  value={values.ticketNo} onChange={e => setValues({...values,ticketNo: e.target.value})}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='aadhar'>Aadhar card no:</label>
                <input className="employee-inputs" id="aadhar" type="text"  value={values.aadharCardNo} onChange={e => setValues({...values,aadharCardNo: e.target.value})}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='pan'>Pan Number</label>
                <input className="employee-inputs" id="pan" type="text" value={values.panNumber} onChange={e => setValues({...values,panNumber: e.target.value})}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='joining_date'>Joining Date</label>
                <input className="employee-inputs" id="joining_date" type="date" value={values.dateJoining} onChange={e => setValues({...values,dateJoining: e.target.value})}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='designation'>Designation</label>
                <input className="employee-inputs" id="designation" type="text"  value={values.designation} onChange={e => setValues({...values,designation: e.target.value})}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='department'>Department</label>
                <input className="employee-inputs" id="department" type="text"  value={values.department} onChange={e => setValues({...values,department: e.target.value})}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='address'>Address</label>
                <input className="employee-inputs" id="address" type="text" value={values.address} onChange={e => setValues({...values,address: e.target.value})}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='city'>City</label>
                <select className="employee-inputs" id="city"  value={values.city} onChange={e => setValues({...values,city: e.target.value})}>
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
                <input className="employee-inputs" id="birthdate" type="date" value={values.birthdate} onChange={e => setValues({...values,birthdate: e.target.value})}/>
              </div>

              <div className='upload-img-container'>
                <label className="employee-label-text" htmlFor='img'>Photo:</label>
                
                <input  id="img" type="file" />
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='fitness_certificate'>Fitness Certificate Date</label>
                <input className="employee-inputs" id="fitness_certificate" type="date"  value={values.fitnessCertificateDate} onChange={e => setValues({...values,fitnessCertificateDate: e.target.value})}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='previous_certificate'>Previous Certificate No</label>
                <input className="employee-inputs" id="previous_certificate" type="input"  value={values.previousCertificateNumber} onChange={e => setValues({...values,previousCertificateNumber: e.target.value})}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='collection_date'>Collection Date</label>
                <input className="employee-inputs" id="collection_date" type="date"  value={values.collectionDate} onChange={e => setValues({...values,collectionDate: e.target.value})}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='test_date'>Test Date*</label>
                <input className="employee-inputs" id="test_date" type="date"  value={values.testDate} onChange={e => setValues({...values,testDate: e.target.value})}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='test_type'>Test Type:*</label>
                <select className="employee-inputs" id="test_type"  value={values.testType} onChange={e => setValues({...values,testType: e.target.value})}>
                  <option value="Select Test Type">Select Test Type</option>
                  <option value="Pre">Pre</option>
                  <option value="Periodical">Periodical</option>
                </select>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='status'>Status:*</label>
                <select className="employee-inputs" id="status" value={values.status}  onChange={e => setValues({...values,status: e.target.value})}>
                  <option value="Please Select Status">Please Select Status</option>
                  <option value="Approved">Approved</option>
                  <option value="Pending">Pending</option>
                </select>
                
              </div>
                <button type="submit" className='employee-add-button'>Submit</button>
            </form>
            <ToastContainer/>
        </div>
    );
}


/*class EditEmployee extends Component{
    state = {companyId: 1,}


    onChangeCompanyName = (event) => {
        console.log(event.target.value)
    }

    render(){
        return(
            <SmhriContext.Consumer>
                {value => {
                    const {companyData} = value
                    console.log(companyData)
                    return(
                    <div className='edit-employee-container'>
                        <h1>Update Employee Details</h1>
                        <form className='edit-employee-form' onSubmit={onSubmitFormDetails}>
              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='name'>Company Name:*</label>
                <select className="employee-inputs" id="name"  onChange={onChangeCompanyName}>
                      {companyData.map((each) => (
                        <option  key={each.id} value={each.id}>{each.name}</option>
                      ))}
                </select >
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='prefix'>Name Prefix:</label>
                <select className="employee-inputs" value="Mrs."  id="prefix" onChange={onChangePrefix}>
                  <option >Mr.</option>
                  <option >Mrs.</option>
                </select>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='first_name'>First Name*</label>
                <input className="employee-inputs"  id="first_name" type="text" onChange={onChangeName} value='ssd'/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='middle_name'>Middle Name:*</label>
                <input className="employee-inputs" id="middle_name"  type="text" onChange={onChangeMiddleName}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='last_name' >Last Name:*</label>
                <input className="employee-inputs" id="last_name"  type="text" onChange={onChangeLastName}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text"  htmlFor='gender'>Gender:*</label>
                <select className="employee-inputs" id="gender" onChange={onChangeGender}>
                    <option>Please Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                </select>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='selectCompany'>Select Company</label>
                <select className="employee-inputs" id="selectCompany"  onChange={onChangeSelectCompany}>
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
                <input className="employee-inputs" id="employees_no" type="text"  onChange={onChangeEmployeeNo}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='ticket_no'>Ticket No *</label>
                <input className="employee-inputs" id="ticket_no" type="text"  onChange={onChangeTicketNo}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='aadhar'>Aadhar card no:</label>
                <input className="employee-inputs" id="aadhar" type="text"  onChange={onChangeAadharNo}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='pan'>Pan Number</label>
                <input className="employee-inputs" id="pan" type="text"  onChange={onChangePanNo}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='joining_date'>Joining Date</label>
                <input className="employee-inputs" id="joining_date" type="date"  onChange={onChangeJoinDate}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='designation'>Designation</label>
                <input className="employee-inputs" id="designation" type="text"  onChange={onChangeDesignation}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='department'>Department</label>
                <input className="employee-inputs" id="department" type="text"  onChange={onChangeDepartment}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='address'>Address</label>
                <input className="employee-inputs" id="address" type="text" onChange={onChangeAddress}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='city'>City</label>
                <select className="employee-inputs" id="city"  onChange={onChangeCity} >
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
                <input className="employee-inputs" id="birthdate" type="date"  onChange={onChangeBirthDate}/>
              </div>

              <div className='upload-img-container'>
                <label className="employee-label-text" htmlFor='img'>Photo:</label>
                
                <input  id="img" type="file" onChange={onChangeImage}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='fitness_certificate'>Fitness Certificate Date</label>
                <input className="employee-inputs" id="fitness_certificate" type="date"  onChange={onChangeFitCertificateDate}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='previous_certificate'>Previous Certificate No</label>
                <input className="employee-inputs" id="previous_certificate" type="input"  onChange={onChangePrevCertificateDate}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='collection_date'>Collection Date</label>
                <input className="employee-inputs" id="collection_date" type="date"  onChange={onChangeCollectionDate}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='test_date'>Test Date*</label>
                <input className="employee-inputs" id="test_date" type="date"  onChange={onChangeTestDate}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='test_type'>Test Type:*</label>
                <select className="employee-inputs" id="test_type"  onChange={onChangeTestType}>
                  <option value="Select Test Type">Select Test Type</option>
                  <option value="Pre">Pre</option>
                  <option value="Periodical">Periodical</option>
                </select>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='status'>Status:*</label>
                <select className="employee-inputs" id="status" value="Approved"  onChange={onChangeStatus}>
                  <option value="Please Select Status">Please Select Status</option>
                  <option value="Approved">Approved</option>
                  <option value="Pending">Pending</option>
                </select>
                
              </div>
                <button type="submit" className='employee-add-button'>Submit</button>
            </form>
                    </div>
                    )
                }}
            </SmhriContext.Consumer>
           
        )
    }
}
*/
export default EditEmployee