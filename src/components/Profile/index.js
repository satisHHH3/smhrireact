import {Component} from "react"
import Cookies from "js-cookie"
import {Link} from 'react-router-dom'
import Header from "../Header"
import Sidebar from "../Sidebar"
import EditEmployee from "../EditEmployee"
import PhsysiologicalData from "../PhsysiologicalData"
import Complaints from "../Complaints"
import SystematicExamination from "../SystematicExamination"
import BioChemistryTest from "../BioChemistryTest"
import HematologyTest from "../HematologyTest"
import UrineTest from "../UrineTest"
import AudioMetryTest from "../AudioMetryTest"
import VisionTest from "../VisionTest"
import BloodTest from "../BloodTest"
import LungFunctionTest from "../LungFunctionTest"

import { FaDownload } from "react-icons/fa";

import "./index.css"


const reportsObj = [
    {
       name: "AUDIOMETERY",
       link: "audio-metry-report"
     },
    {
        name: "BIOCHEMISTRY",
        link: "bio_chemistry_report"
    },
    {
        name: "CHOLINESTERASE",
        link: "cholinesterase"
    }, 
    {
        name: "FORM_32",
        link: "form_32"
    },
    {
        name: "FORM_33",
        link: "form_33"
    },
     {  
        name: "FORM_NEW_O",
        link: "form_new_o"
     },
     {  
        name: "FORM_O",
        link: "form_o"
     },  
     { 
        name: "FORM_XI",
        link: "form_11"
      }, 
      { 
        name: "URIC ACID",
        link: "uric_acid"
    },  
    { 
        name: "G6PD",
        link: "g6pd"
     },  
     { 
        name: "HBA1C",
        link: "hba1c"
    } ,  
    { 
        name: "HBSAG",
        link: "hbsag"
     },  
     {
         name: "HCV",
         link: "hcv"
    } ,
    { 
        name: "HEALTH_CARD",
        link: "health_card"
    } ,
      {
         name: "HIV",
         link: "hiv"
    },   
    { 
        name: "MEDICAL",
        link: "medical"
    },  
    { 
        name: "MEDICAL_CERT",
        link: "medical_cert"
    },
      { 
         name: "FORM_31",
         link: "form_31"
     }, 
     { 
        name: "PSA",
        link: "psa"
     },
    { 
        name: "S_PROTIEN",
        link: "s_protein"
     } ,
      { 
        name: "SPUTAM",
        link: "sputam"
     } ,
      { 
        name: "STOOL",
        link: "stool"
    } ,
    { 
        name: "THYROID",
        link: "thyroid"
     } , 
     { 
        name: "VDRL",
        link: "vdrl"
     },
    {
         name: "VITAMIN_B12",
         link: "vitamin_b12"
    } ,
    { 
        name: "VITAMIN_D3",
        link: "vitamin_d3"
    } ,
    { 
        name: "X_RAY_REPORT",
        link: "x_ray_report"
    }
]


class Profile extends Component{
    state = {activeProfileTab:"about",activeTestTab: "editEmployee",profileData:[]}

    

    getProfileData = async () => {
        const {match} = this.props
        const {params} = match
        const {id} = params
        const jwt = Cookies.get("jwt_token")
       

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
                name: data.first_name,
                employeeNo: data.employee_no,
                ticketNo: data.ticket_no,
                department: data.department,
                status: data.status,
                testType: data.test_type,
                testDate: data.test_date,
                sex: data.sex,
                previousCertificateNumber: data.previous_certificate_number,
                panNumber: data.pan_number,
                namePref: data.name_pref,
                middleName: data.middle_name,
                listCompany: data.list_company,
                lastName: data.last_name,
                fitnessCertificateDate: data.fitness_certificate_date,
                designation: data.designation,
                dateJoining: data.date_joining,
                company: data.company,
                city: data.city,
                birthdate: data.birthdate,
                address: data.address,
                aadharCardNo: data.aadhar_card_no
            }
            this.setState({profileData:updateData})
             
        }
        
    }

    createBloodTestData = async (employeeId) => {
        const jwt = Cookies.get("jwt_token")
        const url = 'https://cloudconnectcampaign.com/smhri/api/blood_test/'

        const userData = {
            "blood_group": null,
            "blood_cholestrol": null,
            "creatinine": null,
            "blood_urea": null,
            "fasting_blood_glucose": null,
            "random_blood_glucose": null,
            "post_prandial_blood_glucose": null,
            "total_bilirubin": null,
            "direct_bilirubin": null,
            "indirect_bilirubin": null,
            "sgpt": null,
            "sgot": null,
            "alkaline_phosphatase": null,
            "ggt": null,
            "total_cholesterol": null,
            "triglycerides": null,
            "direct_hdl": null,
            "vldl": null,
            "ldl": null,
            "ch_ratio": null,
            "lh_ratio": null,
            "rdw_sd": null,
            "plcc": null,
            "plcr": null,
            "vitaminb12": null,
            "vitamind3": null,
            "hcv": null,
            "psa": null,
            "bun": null,
            "btest_employee": employeeId
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

        const request = await fetch(url,options)
        console.log(request)
        
    }

    uploadAudioMetryTest = async (employeeId) => {
        const jwt = Cookies.get("jwt_token")
        const url = "https://cloudconnectcampaign.com/smhri/api/audiometer_threshold_decimats/"

        const userData = {
            "right_ac_500": null,
            "right_bc_500": null,
            "right_ac_1000": null,
            "right_bc_1000": null,
            "right_ac_2000": null,
            "right_bc_2000": null,
            "right_ac_4000": null,
            "right_bc_4000": null,
            "right_ac_5000": null,
            "right_bc_5000": null,
            "left_ac_500": null,
            "left_bc_500": null,
            "left_ac_1000": null,
            "left_bc_1000": null,
            "left_ac_2000": null,
            "left_bc_2000": null,
            "left_ac_4000": null,
            "left_bc_4000": null,
            "left_ac_5000": null,
            "left_bc_5000": null,
            "for_right_ear": null,
            "for_left_ear": null,
            "audiometery": null,
            "xray_report": null,
            "ultra_sonographic": null,
            "audio_employee": employeeId
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

        const request = await fetch(url,options)
        console.log(request)
    }

    uploadPhysiologicalTest = async (employeeId) => {
        const jwt = Cookies.get("jwt_token")
        const url = "https://cloudconnectcampaign.com/smhri/api/physiological_test/"

        const userData = {
            "height": null,
            "weight": null,
            "blood_pressure": null,
            "pulse": null,
            "heart_sound": null,
            "chest_on_expiration": null,
            "chest_on_inspiration": null,
            "waist": null,
            "hips": null,
            "waist_hip_ratio": null,
            "remarks_and_advice": null,
            "phy_employee": employeeId
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

        const request = await fetch(url,options)
        console.log(request)
    }

    uploadComplaintsTest = async (employeeId) => {
        const jwt = Cookies.get("jwt_token")
        const url = "https://cloudconnectcampaign.com/smhri/api/complaints/"
      

        const userData = {
            "id": 1,
            "present_complaints": null,
            "occupational_complaints": null,
            "personal_health_history": null,
            "past_history": null,
            "allergic_to": null,
            "id_mark_scar": null,
            "id_mark_mole": null,
            "complaints_employee": employeeId,
            "family_health_history": []
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

        const request = await fetch(url,options)
        console.log(request)
    }

    uploadsystematicExamTest = async (employeeId) => {
        const jwt = Cookies.get("jwt_token")
        const url = "https://cloudconnectcampaign.com/smhri/api/systematic_examination/"
      
      

        const userData = {
            "skin": null,
            "respiratory_system": null,
            "cardiovascular_system": null,
            "genito_urinary_system": null,
            "skeletal_system": null,
            "cns": null,
            "breath_sound": null,
            "abdomen": null,
            "other_finding": null,
            "ecg_report": null,
            "sys_employee": employeeId
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

        const request = await fetch(url,options)
        console.log(request)
    }

    uploadHematologyTest = async (employeeId) => {
        const jwt = Cookies.get("jwt_token")
        const url = 'https://cloudconnectcampaign.com/smhri/api/hematology/'
      
      

        const userData = {
            "blood_group": null,
            "hemoglobin": null,
            "total_wbc_count": null,
            "polymorphs": null,
            "lymphocytes": null,
             "eosinophils": null,
            "monocytes": null,
            "basophils": null,
            "leucocytes_count": null,
            "platelet_count": null,
            "esr": null,
            "hct": null,
            "rdw_cv": null,
            "pdw": null,
            "mpv": null,
            "mch": null,
            "mchc": null,
            "pct": null,
            "mcv": null,
            "peripheral_smear": null,
            "hlogy_employee": employeeId   
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

        const request = await fetch(url,options)
        console.log(request)
    }

    uploadUrineTest = async (employeeId) => {
        const jwt = Cookies.get("jwt_token")
        const url = "https://cloudconnectcampaign.com/smhri/api/urine_examination/"
      
      

        const userData = {
            "volume": null,
            "transparency": null,
            "deposit": null,
            "colour": null,
            "sp_gravity": null,
            "ph_reaction": null,
            "pus_cells": null,
            "rbc": null,
            "epi_cells": null,
            "casts": null,
            "crystals": null,
            "bacteria": null,
            "yeast_cells": null,
            "trichomonas": null,
            "amorphous_deposit": null,
            "albumin": null,
            "sugar": null,
            "acetone": null,
            "bile_pigments": null,
            "bile_salts": null,
            "urobilinogen": null,
            "red_blood_cells": null,
            "epithelial_cells": null,
            "urine_report": null,
            "crystais": null,
            "material": null,
            "urine_employee": employeeId
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

        const request = await fetch(url,options)
        console.log(request)
    }

    
    uploadVisualTest = async (employeeId) => {
        const jwt = Cookies.get("jwt_token")
        const url = "https://cloudconnectcampaign.com/smhri/api/visual_test/"
      
        const userData = {
           
            "nearvision_without_glass": null,
            "distance_vision_without_glass": null,
            "nearvision_with_glass": null,
            "distance_vision_with_glass": null,
            "nearvision_without_glass_right": null,
            "distance_vision_without_glass_right": null,
            "nearvision_with_glass_right": null,
            "distance_vision_with_glass_right": null,
            "vision_remark": null,
            "visual_employee": employeeId
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

        const request = await fetch(url,options)
        console.log(request)
    }

    
    uploadOtherTests = async (employeeId) => {
        const jwt = Cookies.get("jwt_token")
        const url = 'https://cloudconnectcampaign.com/smhri/api/other_tests/'
        
        const userData =  {
            "uric_acid": null,
            "serum_cholinesterase": null,
            "hs_crp": null,
            "gppd": null,
            "hba1c": null,
            "avg_blood_glucose_level": null,
            "hbsag": null,
            "hiv_result": null,
            "hiv_method": null,
            "hiv_remark": null,
            "s_protein_total": null,
            "s_albumin_bcg": null,
            "s_globulin": null,
            "ag_ratio": null,
            "acid_fast_bacilli": null,
            "stool_color": null,
            "stool_blood": null,
            "stool_mucus": null,
            "stool_adults_warm": null,
            "stool_parasites": null,
            "stool_pus": null,
            "stool_ph": null,
            "stool_occult_blood": null,
            "stool_reducing_substances": null,
            "stool_rbcs": null,
            "stool_puscells": null,
            "stool_fat_globules": null,
            "stool_macrophages": null,
            "stool_epithelial_cell": null,
            "stool_muscle_fibers": null,
            "stool_vegetable_cell": null,
            "stool_bacteria": null,
            "stool_cyst": null,
            "stool_ova": null,
            "stool_trophozoites": null,
            "stool_larva": null,
            "stool_yeast_cells": null,
            "stool_starch_granules": null,
            "thyroid_tsh": null,
            "thyroid_t3": null,
            "thyroid_t4": null,
            "vdrl": null,
            "othertest_employee": employeeId
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

        const request = await fetch(url,options)
        console.log(request)
    }

    
  
     uploadLungsTests = async (employeeId) => {
        const jwt = Cookies.get("jwt_token")
        const url = "https://cloudconnectcampaign.com/smhri/api/lung_function_test/"
    
        const userData =  {
            "fvc": null,
            "fev1": null,
            "fev1_fvc": null,
            "peak_exp_flow": null,
            "fef50": null,
            "fvc_predicted": null,
            "fev1_predicted": null,
            "fev1_fvc_predicted": null,
            "pefr_predicted": null,
            "fef50_predicted": null,
            "fvc_per_predicted": null,
            "fev1_per_predicted": null,
            "fev1_fvc_per_predicted": null,
            "pefr_per_predicted": null,
            "fef50_per_predicted": null,
            "spirometry": null,
            "lung_employee": employeeId
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

        const request = await fetch(url,options)
        console.log(request)
    }

   

    /* upload tests */

    uploadTests = async () => {
        const {match} = this.props
        const {params} = match
        const {id} = params
        const jwt = Cookies.get("jwt_token")
        const url = 'https://cloudconnectcampaign.com/smhri/api/blood_test/'
        const audioMetryUrl = "https://cloudconnectcampaign.com/smhri/api/audiometer_threshold_decimats/"
        const physiologicalUrl = "https://cloudconnectcampaign.com/smhri/api/physiological_test/"
        const complaintsUrl = "https://cloudconnectcampaign.com/smhri/api/complaints/"
        const systematicExaminationUrl = "https://cloudconnectcampaign.com/smhri/api/systematic_examination/"
        const hematologyUrl = "https://cloudconnectcampaign.com/smhri/api/hematology/"
        const urineTestUrl = "https://cloudconnectcampaign.com/smhri/api/urine_examination/"
        const visualTestUrl = 'https://cloudconnectcampaign.com/smhri/api/visual_test/'
        const otherBloodTestUrl = "https://cloudconnectcampaign.com/smhri/api/other_tests/"
        const lungFunctionUrl = "https://cloudconnectcampaign.com/smhri/api/lung_function_test/"

        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${jwt}`
            },
           
        }

        /*blood test request*/

        const request = await fetch(url,options)
        if(request.ok){
            const data = await request.json()
            const isEmployeTest = data.find((each) => parseInt(each.btest_employee) === parseInt(id))
            if(isEmployeTest === undefined){
                this.createBloodTestData(id)
                console.log("bt")
            }
           
        }
        
        /*Audio test request*/

        const audioMetryRequest = await fetch(audioMetryUrl,options)

        if(audioMetryRequest.ok){
            const data = await audioMetryRequest.json()
            const isEmployeTest = data.find((each) => parseInt(each.audio_employee) === parseInt(id))
            if(isEmployeTest === undefined){
                this.uploadAudioMetryTest(id)
                console.log("at")
            }
           
        }

        /*Phosylogical test request*/
        
        const physiologicalRequest = await fetch(physiologicalUrl,options)

        if(physiologicalRequest.ok){
            const data = await physiologicalRequest.json()
            const isEmployeTest = data.find((each) => parseInt(each.phy_employee) === parseInt(id))
            if(isEmployeTest === undefined){
                this.uploadPhysiologicalTest(id)
                console.log("pt")
            }
           
        }
        
        /*complaints test request*/

        const complaintsRequest = await fetch(complaintsUrl,options)

        if(complaintsRequest.ok){
            const data = await complaintsRequest.json()
            const isEmployeTest = data.find((each) => parseInt(each.complaints_employee) === parseInt(id))
            if(isEmployeTest === undefined){
                this.uploadComplaintsTest(id)
                console.log("cr")
            }
           
        }

        /*systematicExam test request*/

        const systematicExamRequest = await fetch(systematicExaminationUrl,options)

        if(systematicExamRequest.ok){
            const data = await systematicExamRequest.json()
            const isEmployeTest = data.find((each) => parseInt(each.sys_employee) === parseInt(id))
            if(isEmployeTest === undefined){
                this.uploadsystematicExamTest(id)
                console.log("ser")
            }
           
        }

         /*hematology test request*/
             
         
        const hematogyRequest = await fetch(hematologyUrl,options)

        if(hematogyRequest.ok){
            const data = await hematogyRequest.json()
            const isEmployeTest = data.find((each) => parseInt(each.hlogy_employee) === parseInt(id))
            if(isEmployeTest === undefined){
                this.uploadHematologyTest(id)
                console.log("hr")
            }
           
        }
         
      /*urine test request*/

        const urineExamRequest = await fetch(urineTestUrl,options)

        if(urineExamRequest.ok){
            const data = await urineExamRequest.json()
            const isEmployeTest = data.find((each) => parseInt(each.urine_employee) === parseInt(id))
            if(isEmployeTest === undefined){
                this.uploadUrineTest(id)
                console.log("ur")
            }
           
        }

        /* vision test */

          const visionRequest = await fetch(visualTestUrl,options)

        if(visionRequest.ok){
            const data = await visionRequest.json()
            const isEmployeTest = data.find((each) => parseInt(each.visual_employee) === parseInt(id))
            if(isEmployeTest === undefined){
                this.uploadVisualTest(id)
                console.log("vt")
            }
           
        }

      /* other tests */

       const otherTestRequest = await fetch(otherBloodTestUrl,options)

        if(otherTestRequest.ok){
            const data = await otherTestRequest.json()
            const isEmployeTest = data.find((each) => parseInt(each.othertest_employee) === parseInt(id))
            if(isEmployeTest === undefined){
                this.uploadOtherTests(id)
                console.log("ot")
            }
           
        }

        /* other tests */
      
       
        const lungsTestRequest = await fetch(lungFunctionUrl,options)

        if(lungsTestRequest.ok){
            const data = await lungsTestRequest.json()
            const isEmployeTest = data.find((each) => parseInt(each.lung_employee) === parseInt(id))
            if(isEmployeTest === undefined){
                this.uploadLungsTests(id)
                console.log("lt")
            }
           
        }
        
    }

    updateEmployee = () => {
        this.getProfileData()
    }

    componentDidMount(){
        this.getProfileData()
        this.uploadTests()
    }

    showProfilePersonalContainer = () => {
        const {profileData} = this.state 
        const {name,company,employeeNo,collectionDate,testDate,testType,status} = profileData
        const collDate = new Date(collectionDate).toLocaleString('en-us',{month:'short', day:'numeric', year:'numeric'})
        const tstDate = new Date(testDate).toLocaleString('en-us',{month:'short', day:'numeric', year:'numeric'})
        
        
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

    showFormReportContainer = () => {
        const {match} = this.props
        const {params} = match
        const {id} = params
        return(
        <div className="form-report-container">
            <h1>Form Report</h1>
            <ul>
                {reportsObj.map((each,i) => (
                    
                    <li key={i}><Link to={`/${each.link}/${id}`} target="_blank" className="report-link"><button type="button"><FaDownload size={"22"} color="#040d36"/> {each.name}</button></Link></li>
                ))}
            </ul>
        </div>
    )}
    
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

    onClickComplaintsTab = () => {
        this.setState({activeTestTab: 'complaints'})
    }

    onClickBiochemistryTab = () => {
        this.setState({activeTestTab: 'bioChemistry'})
    }

    
    onClickHematologyTab = () => {
        this.setState({activeTestTab: 'hematology'})
    }

    onClickLungFunctionTab = () => {
        this.setState({activeTestTab: 'lungFunction'})
    }

    onClickBloodTestTab = () => {
        this.setState({activeTestTab: 'bloodTest'})
    }

    onClickAudiometryTab = () => {
        this.setState({activeTestTab: 'audioMetry'})
    }

    onClickUrineTestTab = () => {
        this.setState({activeTestTab: 'urineTest'})
    }


    renderTestReportContainer = () => {
        const {activeTestTab} = this.state
        return(
        <div className="profile-test-report-container">
        <div className="test-reports-tab-container">
            <button type='button' className={activeTestTab === "editEmployee" ? "test-reports-tab-active" : "test-reports-tab"} onClick={this.onClickEditEmployeeTab}>Edit Employee</button>
            <button type='button' className={activeTestTab === "physiologicalData" ? "test-reports-tab-active" : "test-reports-tab"} onClick={this.onClickDataTab}>Physiological Data</button>
            <button type='button' className={activeTestTab === "systematicExamination" ? "test-reports-tab-active" : "test-reports-tab"} onClick={this.onClickExamTab}>Systematic Examination</button>
            <button type='button' className={activeTestTab === "complaints" ? "test-reports-tab-active" : "test-reports-tab"} onClick={this.onClickComplaintsTab}>Complaints</button>
            <button type='button' className={activeTestTab === "bioChemistry" ? "test-reports-tab-active" : "test-reports-tab"} onClick={this.onClickBiochemistryTab}>Biochemistry Test</button>
            <button type='button' className={activeTestTab === "hematology" ? "test-reports-tab-active" : "test-reports-tab"} onClick={this.onClickHematologyTab}>Hematology</button>
            <button type='button' className={activeTestTab === "urineTest" ? "test-reports-tab-active" : "test-reports-tab"} onClick={this.onClickUrineTestTab}>Urine R/M Test</button>
            <button type='button' className={activeTestTab === "audioMetry" ? "test-reports-tab-active" : "test-reports-tab"} onClick={this.onClickAudiometryTab}>Audiometry</button>
            <button type='button' className={activeTestTab === "visionTest" ? "test-reports-tab-active" : "test-reports-tab"} onClick={this.onClickVisionTab}>Vision Test</button>
            <button type='button' className={activeTestTab === "bloodTest" ? "test-reports-tab-active" : "test-reports-tab"} onClick={this.onClickBloodTestTab}>Other Blood Test</button>
            <button type='button' className={activeTestTab === "lungFunction" ? "test-reports-tab-active" : "test-reports-tab"} onClick={this.onClickLungFunctionTab}>Lung Function Test</button>
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
            case ("formReports"):
                return this.showFormReportContainer()
                    
            default:
                return null

        }
    }

   

    renderTestReportsDataView = () => {
        const {activeTestTab,profileData} = this.state

        switch(activeTestTab){
            case "editEmployee":
                return <EditEmployee employeeData={profileData} updateEmployee={this.updateEmployee}/>
               
            case "physiologicalData":
                return <PhsysiologicalData/>
                
            case "systematicExamination":
                return <SystematicExamination/>
                
            case "visionTest":
                return <VisionTest/>

            case "complaints":
                return <Complaints/>
            case "bioChemistry":
                return <BioChemistryTest/>
            case "hematology":
                return <HematologyTest/>
            case "lungFunction":
                return <LungFunctionTest/>
            case "bloodTest":
                    return <BloodTest/>
            case "audioMetry":
                return <AudioMetryTest/>
            case "urineTest":
                return <UrineTest/>
                                                           
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