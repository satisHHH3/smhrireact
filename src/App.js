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

import SmhriContext from './context/SmhriContext'; 

import './App.css';

class App extends Component {
  state = {showSidebar:true,showEmployeeDrop: false,showReportsDrop:false,activeTab:"dashboard",}

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
    const {showSidebar,showEmployeeDrop,activeTab,showReportsDrop} = this.state

    return (
    <SmhriContext.Provider value={{showSidebar,activeTab,showEmployeeDrop,showReportsDrop,changeSidebar:this.clickMenu,
    changeEmployeeDrop:this.changeEmployeeDrop,changeReportDrop:this.changeReportDrop,changeActiveTab: this.changeActiveTab }}>
      <BrowserRouter>
      <Switch>
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
