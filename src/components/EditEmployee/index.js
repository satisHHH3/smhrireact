import {Component} from 'react'

import SmhriContext from '../../context/SmhriContext';

import "./index.css"

class EditEmployee extends Component{
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
                        <form className='edit-employee-form' onSubmit={this.onSubmitFormDetails}>
              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='name'>Company Name:*</label>
                <select className="employee-inputs" id="name"  onChange={this.onChangeCompanyName}>
                      {companyData.map((each) => (
                        <option  key={each.id} value={each.id}>{each.name}</option>
                      ))}
                </select >
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='prefix'>Name Prefix:</label>
                <select className="employee-inputs" value="Mrs."  id="prefix" onChange={this.onChangePrefix}>
                  <option >Mr.</option>
                  <option >Mrs.</option>
                </select>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='first_name'>First Name*</label>
                <input className="employee-inputs"  id="first_name" type="text" onChange={this.onChangeName} value='ssd'/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='middle_name'>Middle Name:*</label>
                <input className="employee-inputs" id="middle_name"  type="text" onChange={this.onChangeMiddleName}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='last_name' >Last Name:*</label>
                <input className="employee-inputs" id="last_name"  type="text" onChange={this.onChangeLastName}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text"  htmlFor='gender'>Gender:*</label>
                <select className="employee-inputs" id="gender" onChange={this.onChangeGender}>
                    <option>Please Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                </select>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='selectCompany'>Select Company</label>
                <select className="employee-inputs" id="selectCompany"  onChange={this.onChangeSelectCompany}>
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
                <input className="employee-inputs" id="employees_no" type="text"  onChange={this.onChangeEmployeeNo}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='ticket_no'>Ticket No *</label>
                <input className="employee-inputs" id="ticket_no" type="text"  onChange={this.onChangeTicketNo}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='aadhar'>Aadhar card no:</label>
                <input className="employee-inputs" id="aadhar" type="text"  onChange={this.onChangeAadharNo}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='pan'>Pan Number</label>
                <input className="employee-inputs" id="pan" type="text"  onChange={this.onChangePanNo}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='joining_date'>Joining Date</label>
                <input className="employee-inputs" id="joining_date" type="date"  onChange={this.onChangeJoinDate}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='designation'>Designation</label>
                <input className="employee-inputs" id="designation" type="text"  onChange={this.onChangeDesignation}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='department'>Department</label>
                <input className="employee-inputs" id="department" type="text"  onChange={this.onChangeDepartment}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='address'>Address</label>
                <input className="employee-inputs" id="address" type="text" onChange={this.onChangeAddress}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='city'>City</label>
                <select className="employee-inputs" id="city"  onChange={this.onChangeCity} >
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
                <input className="employee-inputs" id="birthdate" type="date"  onChange={this.onChangeBirthDate}/>
              </div>

              <div className='upload-img-container'>
                <label className="employee-label-text" htmlFor='img'>Photo:</label>
                
                <input  id="img" type="file" onChange={this.onChangeImage}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='fitness_certificate'>Fitness Certificate Date</label>
                <input className="employee-inputs" id="fitness_certificate" type="date"  onChange={this.onChangeFitCertificateDate}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='previous_certificate'>Previous Certificate No</label>
                <input className="employee-inputs" id="previous_certificate" type="input"  onChange={this.onChangePrevCertificateDate}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='collection_date'>Collection Date</label>
                <input className="employee-inputs" id="collection_date" type="date"  onChange={this.onChangeCollectionDate}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='test_date'>Test Date*</label>
                <input className="employee-inputs" id="test_date" type="date"  onChange={this.onChangeTestDate}/>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='test_type'>Test Type:*</label>
                <select className="employee-inputs" id="test_type"  onChange={this.onChangeTestType}>
                  <option value="Select Test Type">Select Test Type</option>
                  <option value="Pre">Pre</option>
                  <option value="Periodical">Periodical</option>
                </select>
              </div>

              <div className='employee-input-container'>
                <label className="employee-label-text" htmlFor='status'>Status:*</label>
                <select className="employee-inputs" id="status"  onChange={this.onChangeStatus}>
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

export default EditEmployee