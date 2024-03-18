import {Component} from "react"
import {Redirect} from "react-router-dom"
import React from 'react';
import Popup from 'reactjs-popup';
import Cookies from "js-cookie"
import {TailSpin} from 'react-loader-spinner'


/*import DataTable from 'react-data-table-component';*/
import DataTable from  '../DataTable'
import { IoMdClose } from "react-icons/io";

import Sidebar from '../Sidebar';
import Header from '../Header';

import "./index.css"

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
  }




const testObj = [
    {id: "ATD",
     test: "AudiometerThresholdDecimats"
},
{id: "BLOOD_TEST",
test: "bloodtest"
},
{id: "COMPLAINTS",
test: "Complaints"
},
{id: "HEMATOLOGY",
test: "Hematology"
},
{id: "LUNG_FUNCTION_TEST",
test: "LungFunctionTest"
},
{id: "MICROSCOPIC_EXAMINATION",
test: "MicroscopicExamination"
},
{id: "OTHER_TESTS",
test: "OtherTests"
},
{id: "PHYSIOLOGICAL_TEST",
test: "PhysiologicalTest"
},
{id: "SYSTEMATIC_EXAMINATION",
test: "SystematicExamination"
},
{id: "VISUAL_TEST",
test: "VisualTest"
},
{id: "URINE_EXAMINATION",
test: "Urine_Examination"
},

]



class Company extends Component{
    state = {apiStatus:apiStatusConstants.initial,activeId:testObj[0].id,companyData:[],name:"",email:"",phone:"",pincode:"",address:"",country:"",test:"",certificate:null}

    

    getEmployeeData = async () => {
        this.setState({apiStatus:apiStatusConstants.inProgress})
        const url = "https://cloudconnectcampaign.com/smhri/api/company_master/" 
        const jwt = Cookies.get("jwt_token")
        console.log(jwt)

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
                    address: each.address,companyRegistrationCertificate:each.company_registration_certificate,
                    country:each.country,email:each.email,id:each.id,name:each.name,phone:each.phone,pincode:each.pincode,test:each.test

                }
            })

            this.setState({companyData:updateData,apiStatus:apiStatusConstants.Success})
            
        }
        else{
            console.log("hi")
        }
        
    }

    onChangeOption = (event) => {
        console.log(event.target.value)
        this.setState({activeId:event.target.value})

    }

    componentDidMount(){
        this.getEmployeeData()
    }

    onChangeName = (event) => {
        this.setState({name:event.target.value})
            
    }

    onChangePhone = (event) => {
        this.setState({phone:event.target.value})
            
    }

    onChangeEmail = (event) => {
        this.setState({email:event.target.value})
            
    }

    onChangePincode = (event) => {
        this.setState({pincode:event.target.value})
            
    }

    onChangeAddress = (event) => {
        this.setState({address:event.target.value})
            
    }

    onChangePhone = (event) => {
        this.setState({phone:event.target.value})
            
    }

    onChangeCountry = (event) => {
        this.setState({country:event.target.value})
            
    }

    onSubmitDetails = async (event) => {
        event.preventDefault()
        const {activeId,name,phone,email,pincode,address,country,certificate} = this.state 
        const url = "https://cloudconnectcampaign.com/smhri/api/company_master/"
        const jwt = Cookies.get("jwt_token")

        const getTest = testObj.find((each) => each.id === activeId)
        
      const  userData = {
            name,
        email,
        phone,
        pincode,
        company_registration_certificate: certificate,
        address,
        country,
        test: getTest.test
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

        console.log(JSON.stringify(userData))

        const request = await fetch(url,options)

        if(request.ok){
            this.setState({activeId:testObj[0].id,name:"",phone:"",email:"",pincode:"",address:"",country:"",certificate},this.getEmployeeData)
        }
        console.log(request)
        const data = await request.json()

        
    }
 

    renderButtonAndPopContainer = () => {
        const {activeId,name,phone,email,pincode,address,country,certificate} = this.state
        console.log(name)
        
        return(
        <div className="company-top-text-container">
        <h1 className="company-heading">List Of Companies</h1>
        <div>
            <Popup trigger={<button type="button" className="add-buttons">Import</button>} modal>
                {close => (
                    <div className="import-popup-container">
                         <div className="head-close-container">
                            <h1 className="pop-heading">Import Employees</h1>
                            <button type="button" className="close-button" onClick={() => close()}>
                                <IoMdClose size={25}/>
                            </button>
                        </div>
                        <hr/>
                        
                        <p className="import-text">Upload Menu(File type: .xls or .xlsx only & Max File size: 6 MB.)</p>
                        <hr/> 
                        <input id="register" type="file" className="import-input-file"/>
                        <p className="import-text-description">or you can download this sample</p>
                        <button type="button" className="download-button">Download Sample</button>
                        <hr/>
                        <div className="form-button-container">
                        <button type="button" className="pop-close-button" onClick={() => close()}>Close</button>
                        <button type="button" className="pop-add-button">Save Changes</button>
                        </div>
                    </div>
                )} 
            </Popup>
            
            <Popup trigger={<button type="button" className="add-buttons">Export</button>} modal >
                {close => (
                    <div className="export-popup">
                        <div className="sat">
                        <button onClick={() => close()}>
                            close
                        </button>
                        </div>
                    </div>
                )}
                </Popup>
            <Popup trigger={<button type="button" className="add-buttons">Add New</button>} modal
            
           >
                {close => (
                    <div className="popup-content">
                        <div className="model-container">
                        <div className="head-close-container">
                            <h1 className="pop-heading">Add New Company</h1>
                            <button type="button" className="close-button" onClick={() => close()}>
                                <IoMdClose size={25}/>
                            </button>
                        </div>
                        <hr/>
                        <form className="pop-form-container" onSubmit={this.onSubmitDetails}>
                            <div className="input-container">
                                <label htmlFor="name" className="label-text">Company Name*</label>
                                <input id="name" value={name} type="text" className="pop-inputs" onChange={this.onChangeName}/>
                            </div>

                            <div className="input-container">
                                <label htmlFor="email" className="label-text">Company Email*</label>
                                <input id="email" value={email} type="text" className="pop-inputs" onChange={this.onChangeEmail}/>
                            </div>

                            <div className="input-container">
                                <label htmlFor="phone" className="label-text">Company Phone</label>
                                <input id="phone" value={phone} type="text" className="pop-inputs" onChange={this.onChangePhone}/>
                            </div>

                            <div className="input-container">
                                <label htmlFor="register" className="label-text">Company Registered Certificate:</label>
                                <input id="register" value={certificate} type="file" className="input-file" onChange={this.onChangeCertificate}/>
                            </div>

                            <div className="text-area-container">
                                <label htmlFor="address" className="label-text">Company Address:</label>
                                <textarea id="address" value={address} rows='8' cols='40' className="pop-textarea" onChange={this.onChangeAddress}/>
                            </div>


                            <div className="input-container">
                                <label htmlFor="pincode" className="label-text">Pincode</label>
                                <input id="pincode" value={pincode} type="text" className="pop-inputs" onChange={this.onChangePincode}/>
                            </div>

                            <div className="input-container">
                                <label htmlFor="country" className="label-text">Country</label>
                                <input id="country" value={country} type="text" className="pop-inputs" onChange={this.onChangeCountry}/>
                            </div>

                            <div className="input-container">
                                <label htmlFor="test" className="label-text">Company Test*</label>
                                <select id="test" value={activeId} onChange={this.onChangeOption} type="text" className="pop-inputs">
                                        {testObj.map((each) => (
                                            <option key={each.id} value={each.id}>{each.test}</option>
                                        ))}
                               </select>
                            </div>
                            <div className="form-button-container">
                                <button type="button" className="pop-close-button" onClick={() => close()}>Close</button>
                                <button type="submit" className="pop-add-button">Submit</button>
                            </div>
                        </form>
                        </div>
                        </div>
                )}
            </Popup>
            
        </div>
    </div>
    )}

    onClickDeleterow = async (id) => {
        const jwt = Cookies.get("jwt_token")
        const url = `https://cloudconnectcampaign.com/smhri/api/company_master/${id}/`
        const options = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        }

        const request = await fetch(url,options)
       this.getEmployeeData()
        
    }

    renderLoadingView = () => (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
      <TailSpin
        type="ThreeDots"
        color="#00BFFF"
        height={50}
        width={50}
      />
    </div>
      )

      rendertableView = () => {
        const {companyData} = this.state
       
        return(
            <>
            <DataTable data={companyData} onClickDeleterow={this.onClickDeleterow}/></>
        )
      }
    

    renderCompanyView = () => {
        const {apiStatus} = this.state
        switch(apiStatus){
            case apiStatusConstants.inProgress:
                return this.renderLoadingView()
            case apiStatusConstants.Success:
                return this.rendertableView()
        }
    }

    render(){
        const {companyData} = this.state
       

        return(
            <>
            <Header/>
            <div className="company-container">
            <Sidebar/>
            <div className="company-bg-container">
            {this.renderButtonAndPopContainer()}
                    <hr/> 
               {this.renderCompanyView()}   
            </div>
            </div>
            </>
        )
    }
}

export default Company

/*   <div className="company-card-container">
                   {this.renderButtonAndPopContainer()}
                    <hr/> 
                  <DataTable
                    customStyles={headStyles}
			            columns={columns}
			            data={companyData}
                        pagination 
                        fixedHeader 
                        selectableRowsHighlight 
                        highlightOnHover 
                        
                        subHeader 
                        subHeaderComponent={
                            <input type="search"/>
                        }
		/>   
        </div>    */