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
    this.setState((prevState) => ({showEmployeeDrop: !prevState.showEmployeeDrop}))
}

changeReportDrop = () => {
    this.setState((prevState) => ({showReportsDrop: !prevState.showReportsDrop}))
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
