import { Component } from 'react';

import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Company from './components/Company'; 
import AddEmployee from './components/AddEmployee';
import ViewEmployees from './components/ViewEmployees';
import ProtectedRoute from './components/ProtectedRoute';
import Tests from './components/Tests';
import EmployeeReports from './components/EmployeeReports'; 
import SummaryReports from './components/SummaryReports'; 
import Profile from './components/Profile'; 
import FinalReport from "./components/FinalReport"
import BioChemistryReport from './components/BioChemistryReport';
import AudioMetryTest from './components/AudioMetryTest';
import PsaReport from './pages/PsaReport'
import G6pd from './pages/G6pd'
import Cholinesterase from './pages/Cholinesterase'
import Form32 from './pages/Form32'
import Form33 from './pages/Form33'
import Form31 from './pages/Form31'
import FormNew from './pages/FormNew'
import Form_O from './pages/Form_O'
import FormXI from './pages/FormXI'
import UricAcid from './pages/UricAcid'
import Hba1c from './pages/Hba1c'
import Hbsag from './pages/Hbsag'
import Hcv from './pages/Hcv'
import HealthCard from './pages/HealthCard'
import Hiv from './pages/Hiv'
import Medical from './pages/Medical'
import MedicalCert from './pages/MedicalCert'
import Sprotein from './pages/Sprotein'
import Sputam from './pages/Sputam'
import Stool from './pages/Stool'
import Thyroid from './pages/Thyroid'
import Vdrl from './pages/Vdrl'
import VitaminB12 from './pages/VitaminB12'
import VitaminD3 from './pages/VitaminD3'
import XrayReport from './pages/XrayReport'
/*

import MedicalCert from './pages/MedicalCert'

import Stool from './pages/Stool'



import VitaminD3 from './pages/VitaminD3'


*/

import SmhriContext from './context/SmhriContext'; 

import './App.css';

const companyNames = [					
 

  {
    id: 9,
    name: 'SMHRI'
  },

  {
    id: 10,
    name: 'SAINT GOBAIN INDIA PVT.LTD.C/O GYPROC BUSINESS'
  },

  {
    id: 11,
    name: 'LUNA CHEMICALS INDUSTRIES PVT. LTD. ASNAD OLPAD'
  },

  {
    id: 12,
    name: 	'SHREE SWAMINARAYAN TRAVELS'
  },

  {
    id: 13,
    name: 'LUNA CHEMICALS INDUSTRIES PVT. LTD. SAYAKHA'
  },

  {
    id: 14,
    name: 'LUNA CHEMICALS INDUSTRIES PVT. LTD. DAHEJ'
															
  },

  {
    id:15,
    name: 'GUJARAT DYESTUFF INDUSTRIES-SEZ' 
  },

  {
    id: 16,
    name: 'Hindustan Urvarak &amp; Rasayan Limited'
  },

  {
    id: 17,
    name: 'TATA CONSULTANCY SERVICES'
  },

  {
    id: 18,
    name: 'AVI TRAVELS'
  },

  {
    id: 19,
    name: 'PAUSHAK LIMITED' 
  },

  {
    id: 20,
    name: 'GSECL-KADANA HYDRO ELECTRIC PROJECT.'
  },

  {
    id: 21,
    name: 'NIRMA LIMITED'
  },

  {
    id: 22,
    name: 'Colourtex Industries Private Limited'
  },

  {
    id: 23,
    name: 'PERFECT POWER' 
  },


  {
    id: 24,
    name: 'PRUTHVI TRAVELS C/O H P SALES INDIA'
  },

  {
    id: 25,
    name: 'TIRUPATI ORGANICS PVT. LTD. ANKLESHWAR'
  },

  {
    id: 26,
    name: 'LUNA CHEMICALS INDUSTRIES PVT. LTD. PANOLI'
  },

  {
    id: 27,
    name: 'GUJARAT DYESTUFF INDUSTRIES-SEZ' 
  },

  {
    id: 28,
    name: 'LUNA CHEMICALS INDUSTRIES PVT. LTD. DAHEJ'
  },

  {
    id: 29,
    name: 'Gujarat Gas' 
  },

  {
    id: 30,
    name: 'HOLTEC ASIA PVT. LTD.'
  },

  {
    id: 31,
    name: 'GBS SECURITY SERVICES PVT. LTD.'
  },

  {
    id: 32,
    name: 'NITIN SPINNERS LTD BHILWARA ' 
  },

  {
    id: 33,
    name: 'KILBURN CHEMICALS LTD.' 
  },

  {
    id: 34,
    name: 'GEETHA CATERERS C/O CLP INDIA PVT LTD.' 
  },

  {
    id: 35,
    name: 'Stonex India Pvt Ltd. (Mukesh Cont)' 
  },

  {
    id: 36,
    name: 'Stonex India Pvt Ltd.(Cont Raj Kumar )' 
  },

  {
    id: 37,
    name: 'Stonex India Pvt Ltd.(NADEEM)'
  
   
  },

  {
    id: 38,
    name: ' VEDANTA LIMITED' 
  },

  {
    id: 39,
    name: 'Stonex India Pvt Ltd.(VINOD PAINTER)' 
  },

  {
    id: 40,
    name: 'SHIVA CATERERS' 
  },

  {
    id: 41,
    name: 'BHASKAR RESOURCES PVT.LTD' 
  },

  {
    id: 42,
    name: 'Stonex India Pvt Ltd.(KAMAL &amp; COMPANY)' 
  },

  {
    id: 43,
    name: 'Stonex India Pvt Ltd.(G4S SECURE SOLUTION INDIA(P)LTD)' 
  },

  {
    id: 44,
    name: 'Stonex India Pvt Ltd.(CSR ACTIVITY)' 
  },

  {
    id: 45,
    name: ' Stonex India Pvt Ltd.(ANGEL MANPOWER SERVICES)' 
  },

  {
    id: 46,
    name: 'Stonex India Pvt Ltd.(BVG INDIA LTD)' 
  },

  {
    id: 47,
    name: 'Stonex India Pvt Ltd.(BOSA HASDA &amp; COMPANY)' 
  },

  {
    id: 48,
    name: 'Stonex India Pvt Ltd.(BHUSAN SAHNI &amp; COMPANY)' 
  },

  {
    id: 49,
    name: 'Stonex India Pvt Ltd.' 
  },

  {
    id: 50,
    name: 'ASHWINI CATERERS' 
  },

  {
    id: 51,
    name: 'BAPCO' 
  },

  {
    id: 52,
    name: 'MAN POWER GROUP SERVICES INDIA PRIVATE LIMITED.(SIEMENS)' 
  },

  {
    id: 53,
    name: 'self' 
  },

  {
    id: 54,
    name: ' HOBBY TRAVELS' 
  },

  {
    id: 55,
    name: 'HINDAALCO BIRLA COPPER' 
  },

  {
    id: 56,
    name: 'HLEGLASS COAT' 
  },

  {
    id: 57,
    name: 'Alembic  Pharmaceuticals Ltd.' 
  },

  {
    id: 58,
    name: 'RSWM Limited. (Rishabhdev)' 
  },

  {
    id: 59,
    name: 'AVDHOOT CORPORATION' 
  },

  {
    id: 60,
    name: 'willowood industries pvt ltd.' 
  },

  {
    id: 61,
    name: 'DEE-EM SYSTEMS' 
  },

  {
    id: 62,
    name: 'BSL-BHILWARA' 
  },

  {
    id: 63,
    name: 'RSWM LIMITED UNIT-1' 
  },

  {
    id: 64,
    name: 'RSWM LIMITED UNIT-2' 
  },

  {
    id: 65,
    name: 'SAINT GOBAIN INDIA PRIVATE LIMITED - GYPROC' 
  },

  {
    id: 66,
    name: 'SUDIVA SPINNERS PVT.LTD.' 
  },

  {
    id: 67,
    name: 'SOMBANSI' 
  },

  {
    id: 68,
    name: 'ACG CELLULOSE LIMITED' 
  },

  {
    id: 69,
    name: 'QATAR ENGINEERING &amp; CONSTRUCTION COMPANY W.I.L' 
  },

  {
    id: 70,
    name: 'TECHNO ENGINEERS' 
  },

  {
    id: 71,
    name: 'MEGHMANI ORGANICS LTD' 
  },

  {
    id: 72,
    name: 'KALINDI ENGINEERING SERVICES' 
  },

  {
    id: 73,
    name: 'AMAL SPECIALITY CHEMICALS LIMITED' 
  },

  {
    id: 74,
    name: 'Raj Mistry Corporation' 
  },

  {
    id: 75,
    name: 'SHIVA PERFORMANCE MATERIALS PVT.LTD.' 
  },

  {
    id: 76,
    name: 'GLOBELA INDUSTRIES PVT.LTD.' 
  },

  {
    id: 77,
    name: 'POWER MECH C/O CLP INDIA PVT LTD' 
  },

  {
    id: 78,
    name: 'M/S QUESS CORP LTD' 
  },
																			
  {
    id: 79,
    name: 'ALEMBIC PHARMACEUTICALS LTD. ' 
  },

  {
    id: 80,
    name: 'KP HOUSE' 
  },

  {
    id: 81,
    name: 'MAHINDRA ACCELO' 
  },

  {
    id: 82,
    name: 'PIONEER HYDROJETTING SERVICES ' 
  },

  {
    id: 83,
    name: 'GLENMARK PHARMACEUTICALS LIMITED ' 
  },

  {
    id: 84,
    name: 'QATAR ENGINEERING &amp; CONSTRUCTION COMPANY W.I.L' 
  },

  {
    id: 85,
    name: 'RUZUL PEST CONTROL SERVICES' 
  },

  {
    id: 86,
    name: 'SELF-WALKING ' 
  },

  {
    id: 87,
    name: 'NAVIN BHAI PATANWADIYA' 
  },

  {
    id: 88,
    name: 'MANSURI MAHAMMED ARIF ' 
  },

  {
    id: 89,
    name: 'GUJARAT SATATE PETRONET LIMITED' 
  },

  {
    id: 90,
    name: 'SANGAM INDIA LIMITED -BALIYA' 
  },

  {
    id: 91,
    name: 'SANGAM INDIA LIMITED UNIT-BALIYA' 
  },
						
  {
    id: 92,
    name: 'JITENDRA SAHU ' 
  },

  {
    id: 93,
    name: 'SANGAM INDIA LIMITED -SONIYA' 
  },

  {
    id: 94,
    name: 'Krishak Bharati Cooperative Limited' 
  },

  {
    id: 95,
    name: 'OPAL' 
  },

  {
    id: 96,
    name: 'M.R.F  LIMITED' 
  },

  {
    id: 97,
    name: 'SURIL PHARMA' 
  },

  {
    id: 98,
    name: 'DHL SUPPLY CHAIN INDIA PVT LTD' 
  },

  {
    id: 99,
    name: 'PERFECT POWER TRANSMISSION PVT LTD' 
  },

  {
    id: 100,
    name: 'RELIANCE INDUSTRIES LIMITED' 
  },

  {
    id: 101,
    name: 'GBS SECURITY SERVICES PVT LTD' 
  },

  {
    id: 102,
    name: 'SHREE Swaminarayan Travels' 
  },

  {
    id: 103,
    name: 'RSWM LTD, UNIT-MANDPAM, BHILWARA (RAJ.)' 
  },

  {
    id: 104,
    name: 'DEEPAK PHENOLICS LIMITED' 
  },

  {
    id: 105,
    name: 'GUJARAT DYESTUFF INDUSTRIES-SEZ' 
  },

  {
    id: 106,
    name: 'COLOURTEX INDUSTRIES PRIVATE LIMITED' 
  },

  {
    id: 107,
    name: 'ONGC-Oil and Natural Gas Corporation' 
  },

  {
    id: 108,
    name: 'zzz' 
  },

  {
    id: 109,
    name: 'SANGAM INDIA LIMITED UNIT-DENIM' 
  },

  {
    id: 110,
    name: 'SANGAM VENTURES LTD' 
  },

  {
    id: 111,
    name: 'SANGAM (INDIA) LIMITED -DENIM , BHILWARA (RAJ.)' 
  },

]

class App extends Component {
  state = {showSidebar:true,showEmployeeDrop: false,showReportsDrop:false,activeTab:"dashboard",companyData: companyNames}

 

  clickMenu = () => {
    this.setState((prevState) => ({showSidebar: !prevState.showSidebar,showEmployeeDrop:false,showReportsDrop:false,}))
  }

  changeEmployeeDrop = () => {
    this.setState((prevState) => ({showEmployeeDrop: !prevState.showEmployeeDrop,showReportsDrop: false}))
    
}

changeReportDrop = () => {
    this.setState((prevState) => ({showReportsDrop: !prevState.showReportsDrop,showEmployeeDrop: false}))
}

changeActiveTab = (id) => {
  this.setState({activeTab:id})
}
 
  render(){
    const {showSidebar,showEmployeeDrop,activeTab,companyData,showReportsDrop} = this.state
    
    return (
    <SmhriContext.Provider value={{showSidebar,activeTab,companyData,showEmployeeDrop,showReportsDrop,changeSidebar:this.clickMenu,
    changeEmployeeDrop:this.changeEmployeeDrop,changeReportDrop:this.changeReportDrop,changeActiveTab: this.changeActiveTab }}>
      
      <BrowserRouter>
           <Switch>
           <ProtectedRoute exact path="/x_ray_report/:id" component={XrayReport} />
           <ProtectedRoute exact path="/vitamin_d3/:id" component={VitaminD3} />
           <ProtectedRoute exact path="/vitamin_b12/:id" component={VitaminB12} />
           <ProtectedRoute exact path="/s_protein/:id" component={Sprotein} />
           <ProtectedRoute exact path="/vdrl/:id" component={Vdrl} />
           <ProtectedRoute exact path="/thyroid/:id" component={Thyroid} />
           <ProtectedRoute exact path="/stool/:id" component={Stool} />
           <ProtectedRoute exact path="/sputam/:id" component={Sputam} />
           <ProtectedRoute exact path="/form_32/:id" component={Form32} />
           <ProtectedRoute exact path="/form_31/:id" component={Form31} />
           <ProtectedRoute exact path="/medical_cert/:id" component={MedicalCert} />
           <ProtectedRoute exact path="/medical/:id" component={Medical} />
           <ProtectedRoute exact path="/hiv/:id" component={Hiv} />
           <ProtectedRoute exact path="/health_card/:id" component={HealthCard} />
           <ProtectedRoute exact path="/hcv/:id" component={Hcv} />
           <ProtectedRoute exact path="/hbsag/:id" component={Hbsag} />
           <ProtectedRoute exact path="/hba1c/:id" component={Hba1c} />
           <ProtectedRoute exact path="/uric_acid/:id" component={UricAcid} />
           <ProtectedRoute exact path="/form_11/:id" component={FormXI} />
           <ProtectedRoute exact path="/form_new_o/:id" component={FormNew} />
           <ProtectedRoute exact path="/form_o/:id" component={Form_O} />
           <ProtectedRoute exact path="/form_33/:id" component={Form33} />
           <ProtectedRoute exact path="/cholinesterase/:id" component={Cholinesterase} />
           <ProtectedRoute exact path="/g6pd/:id" component={G6pd} />
            <ProtectedRoute exact path="/psa/:id" component={PsaReport} />
           <ProtectedRoute exact path="/bio_chemistry_report/:id" component={BioChemistryReport} />
           <ProtectedRoute exact path="/audiometry" component={AudioMetryTest} />
           <ProtectedRoute exact path="/final-reports" component={FinalReport} />
           <ProtectedRoute exact path="/profile/:id" component={Profile} />
           <ProtectedRoute exact path="/view-employees" component={ViewEmployees} />
           <ProtectedRoute exact path="/company" component={Company} />
           <ProtectedRoute exact path="/add-employees" component={AddEmployee} />
           <ProtectedRoute exact path="/employee-reports" component={EmployeeReports} />
          <ProtectedRoute exact path="/" component={Dashboard} />
          <ProtectedRoute exact path="/tests" component={Tests} />
          <ProtectedRoute exact path="/summary-reports" component={SummaryReports} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
      </BrowserRouter>
   
      </SmhriContext.Provider>
  );

  }
 
}

export default App;
