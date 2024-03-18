import React from 'react';
import {Component} from "react"

import Header from '../Header'
import Sidebar from '../Sidebar'

import "./index.css"

class AddEmployee extends Component{
  render(){
    return(
      <>
      <Header/>
      <div className='container'>
        <Sidebar/>
        <div className='employee-bg-container'>
          <div className='employee-card-container'>
            <h1 className='employee-heading'>Add New Employee</h1>
            <hr/>
            <form className='employee-form-container'>
              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='name'>Company Name:*</label>
                <input className="employee-inputs" id="name" type="text"/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='prefix'>Name Prefix:</label>
                <input className="employee-inputs" id="prefix" type="text"/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='company_name'>Company Name:*</label>
                <input className="employee-inputs" id="company_name" type="text"/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='first_name'>First Name*</label>
                <input className="employee-inputs" id="first_name" type="text"/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='middle_name'>Middle Name:*</label>
                <input className="employee-inputs" id="middle_name" type="text"/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='last_name'>Last Name:*</label>
                <input className="employee-inputs" id="last_name" type="text"/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='gender'>Gender:*</label>
                <input className="employee-inputs" id="gender" type="text"/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='employees_no'>Employees No</label>
                <input className="employee-inputs" id="employees_no" type="text"/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='ticket_no'>Ticket No *</label>
                <input className="employee-inputs" id="ticket_no" type="text"/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='aadhar'>Aadhar card no:</label>
                <input className="employee-inputs" id="aadhar" type="text"/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='pan'>Pan Number</label>
                <input className="employee-inputs" id="pan" type="text"/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='joining_date'>Joining Date</label>
                <input className="employee-inputs" id="joining_date" type="date"/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='designation'>Designation</label>
                <input className="employee-inputs" id="designation" type="text"/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='address'>Address</label>
                <input className="employee-inputs" id="address" type="text"/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='city'>City</label>
                <input className="employee-inputs" id="city" type="text"/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='birthdate'>Birthdate</label>
                <input className="employee-inputs" id="birthdate" type="date"/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='fitness_certificate'>Fitness Certificate Date</label>
                <input className="employee-inputs" id="fitness_certificate" type="date"/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='previous_certificate'>Previous Certificate No</label>
                <input className="employee-inputs" id="previous_certificate" type="input"/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='collection_date'>Collection Date</label>
                <input className="employee-inputs" id="collection_date" type="date"/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='test_date'>Test Date*</label>
                <input className="employee-inputs" id="test_date" type="date"/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='test_type'>Test Type:*</label>
                <input className="employee-inputs" id="test_type" type="input"/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='status'>Status:*</label>
                <input className="employee-inputs" id="status" type="input"/>
              </div>
                <button type="submit" className='employee-add-button'>Submit</button>
            </form>
          </div>
        </div>
      </div>
      </>
    )
  }
}


export default AddEmployee;
