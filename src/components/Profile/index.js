import {Component} from "react"
import Cookies from "js-cookie"

import Header from "../Header"
import Sidebar from "../Sidebar"
import EditEmployee from "../EditEmployee"

import "./index.css"



class Profile extends Component{
    state = {activeProfileTab:"about",activeTestTab: "editEmployee",profileData:[]}

    getProfileData = async () => {
        const {match} = this.props
        const {params} = match
        const {id} = params
        const jwt = Cookies.get("jwt_token")
        console.log(id)

        const url = `https://cloudconnectcampaign.com/smhri/api/employee_master/${id}/`

        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        }

        const request = await fetch(url,options)

        if(request.ok){
            const data = await request.json()
            const updateData = {
                id: data.id,
                collectionDate: data.collection_date,
                company: data.company,
                name: data.first_name,
                employeeNo: data.employee_no,
                ticketNo: data.ticket_no,
                department: data.department,
                status: data.status,
                testType: data.test_type,
                testDate: data.test_date
            }
            this.setState({profileData:updateData})
            console.log(updateData)
        }
        
    }

    componentDidMount(){
        this.getProfileData()
    }

    showProfilePersonalContainer = () => {
        const {profileData} = this.state 
        const {name,company,employeeNo,collectionDate,testDate,testType,status} = profileData
        const collDate = new Date(collectionDate).toLocaleString('en-us',{month:'short', day:'numeric', year:'numeric'})
        const tstDate = new Date(testDate).toLocaleString('en-us',{month:'short', day:'numeric', year:'numeric'})
        
        console.log(collDate)
        return(
        <div className="profile-personal-container">
                        <h1>Personal Information</h1>
                        <div>
                            <p>Name:</p>
                            <span>{name}</span>
                        </div>

                        <div>
                            <p>Company:</p>
                            <span>{company}</span>
                        </div>

                        <div>
                            <p>Employees No:</p>
                            <span>{employeeNo}</span>
                        </div>

                        <div>
                            <p>Collection Date:</p>
                            <span>{collDate}</span>
                        </div>

                        <div>
                            <p>Test Date:</p>
                            <span>{tstDate}</span>
                        </div>

                        <div>
                            <p>Test-Type:</p>
                            <span>{testType}</span>
                        </div>

                        <div>
                            <p>Status:</p>
                            <span>{status}</span>
                        </div>
                    </div>
    )
}

    showPhysiologicalContainer = () => (
        <form>
        <h1>Edit Physiological Test</h1>
            <label htmlFor="height">Height :</label>
            <input id="height" type="text"/>

            <label htmlFor="weight">Weight :</label>
            <input id="weight" type="text"/>

            <label htmlFor="pulse">Pulse :</label>
            <input id="pulse" type="text"/>

            <label htmlFor="bp">Blood pressure :</label>
            <input id="bp" type="text"/>

            <label htmlFor="coe">Chest on expiration :</label>
            <input id="coe" type="text"/>

            <label htmlFor="waist">Waist :</label>
            <input id="waist" type="text"/>

            <label htmlFor="hips">Hips :</label>
            <input id="hips" type="text"/>

            <label htmlFor="whr">Waist hip ratio :</label>
            <input id="whr" type="text"/>

            <label htmlFor="raa">Remarks and Advice :</label>
            <input id="raa" type="text"/>
            <button type="button">Update</button>
        </form>
    )

    showSystematicExaminationData = () => (
        <form>
        <h1>Edit Systematic Examination Test</h1>
        <label htmlFor="skin">Skin :</label>
        <input id="skin" type="text"/>

        <label htmlFor="ress">Respiratory System :</label>
        <input id="ress" type="text"/>

        <label htmlFor="cards">Cardiovascular system :</label>
        <input id="cards" type="text"/>

        <label htmlFor="gus">Genito urinary system :</label>
        <input id="gus" type="text"/>

        <label htmlFor="ss">Skeletal system :</label>
        <input id="ss" type="text"/>

        <label htmlFor="cns">Cns :</label>
        <input id="cns" type="text"/>

        <label htmlFor="bs">Breath sound :</label>
        <input id="bs" type="text"/>

        <label htmlFor="abd">Abdomen :</label>
        <input id="abd" type="text"/>

        <label htmlFor="of">Other Finding :</label>
        <input id="of" type="text"/>

        <label htmlFor="er">Ecg Report :</label>
        <input id="er" type="text"/>
        <button type="button">Update</button>
    </form>
    )

    renderVisionTestView = () => (
        <table>
        <thead>
            <tr>
                <th className="th-1">Vision</th>
                <th className="th-2">Right</th>
                <th className="th-3">Left</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Near</td>
                <td><input type='text'/></td>
                <td><input type='text'/></td>
                <td>Without Glasses</td>
            </tr>
            <tr>
                <td>Far</td>
                <td><input type='text'/></td>
                <td><input type='text'/></td>
                <td>Without Glasses</td>
            </tr>
            <tr className="kk">
                <td colSpan='4' >
                   
                </td>
            </tr>
        </tbody>
        <hr/>
    </table>

    
    )

    onClickEditEmployeeTab = () => {
        this.setState({activeTestTab: 'editEmployee'})
    }

    onClickDataTab = () => {
        this.setState({activeTestTab: 'physiologicalData'})
    }

    onClickExamTab = () => {
        this.setState({activeTestTab: 'systematicExamination'})
    }

    onClickVisionTab = () => {
        this.setState({activeTestTab: 'visionTest'})
    }


    renderTestReportContainer = () => {
        const {activeTestTab} = this.state
        return(
        <div className="profile-test-report-container">
        <div className="test-reports-tab-container">
            <button type='button' className={activeTestTab === "editEmployee" ? "test-reports-tab-active" : "test-reports-tab"} onClick={this.onClickEditEmployeeTab}>Edit Employee</button>
            <button type='button' className={activeTestTab === "physiologicalData" ? "test-reports-tab-active" : "test-reports-tab"} onClick={this.onClickDataTab}>Physiological Data</button>
            <button type='button' className={activeTestTab === "systematicExamination" ? "test-reports-tab-active" : "test-reports-tab"} onClick={this.onClickExamTab}>Systematic Examination</button>
            <button type='button' className={activeTestTab === "visionTest" ? "test-reports-tab-active" : "test-reports-tab"} onClick={this.onClickVisionTab}>Vision Test</button>
        </div>

        {this.renderTestReportsDataView()}
        
    </div>
    )}

    onClickAbout = () => {
        this.setState({activeProfileTab:"about"})
    }

    onClickTestReports = () => {
        this.setState({activeProfileTab:"testReports"})
    }

    onClickFormReport = () => {
        this.setState({activeProfileTab:"formReports"})
    }

    renderProfileView = () => {
        const {activeProfileTab} = this.state

        switch(activeProfileTab){
            case ("about"):
                return this.showProfilePersonalContainer()
                
            case ("testReports"):
                return this.renderTestReportContainer()
                
            default:
                return null

        }
    }

    renderEditEmployeeView = () => (
        <div>
            <h1>hi</h1>
        </div>
    )

    renderTestReportsDataView = () => {
        const {activeTestTab} = this.state

        switch(activeTestTab){
            case "editEmployee":
                return <EditEmployee/>
               
            case "physiologicalData":
                return this.showPhysiologicalContainer()
                
            case "systematicExamination":
                return this.showSystematicExaminationData()
                
            case "visionTest":
                return this.renderVisionTestView()
                
            default:
                return null
        }
    }

    render(){
        const {activeProfileTab} = this.state 

        return(
           <>
           <Header/>
           <div className="profile-bg-container">
             <Sidebar/>
             <div className="profile-card-container">
                <div className="profile-head-container">
                  <div>
                    <h1>Hi, welcome back!</h1>
                    <p>Your Profile With all the Tests.</p>
                  </div>
                  <button type="button">Back To Employee</button>
                </div>

                <div className="profile-reports-container">
                    <div className="profile-tab-container">
                        <button type='button' onClick={this.onClickAbout} className={activeProfileTab === "about" ? "active-pro-tab" : "profile-tab"}>About</button>
                        <button type='button' onClick={this.onClickTestReports} className={activeProfileTab === "testReports" ? "active-pro-tab" : "profile-tab"}>Test Reports</button>
                        <button type='button' onClick={this.onClickFormReport} className={activeProfileTab === "formReports" ? "active-pro-tab" : "profile-tab"}>Form Report</button>
                    </div>
                    {this.renderProfileView()}
                   
                </div>
             </div>
           </div>
           </>
        )
    }
}

export default Profile