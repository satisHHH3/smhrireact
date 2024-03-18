import {Component} from 'react'
import {Link} from "react-router-dom"

import Sidebar from '../Sidebar';
import Header from '../Header';
import SmhriContext from "../../context/SmhriContext"


import "./index.css"

class Dashboard extends Component{
    render(){
        return(
            <SmhriContext.Consumer>
                {value => {
                    const {changeActiveTab} = value 

                    const onClickctiveTab = (id) => {
                        changeActiveTab(id)
                    }
                

                    return(
                        <>
                        <Header/>
                        <div className='container'>
                        <Sidebar/>
                        <div className='bg-dash-container'>
                        
                        <div className=' dashboard-container'>
                            <Link to="/company" className="link" onClick={() => onClickctiveTab("company")}>
                        <div className='dash-cards'>
                            <div>
                                <p className='dash-card-name'>List of Companies</p>
                                <h1 className='dash-card-heading'>Companies</h1>
                            </div>
                            <svg className='waves' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#faac1b" fill-opacity="1" d="M0,288L18.5,245.3C36.9,203,74,117,111,106.7C147.7,96,185,160,222,170.7C258.5,181,295,139,332,122.7C369.2,107,406,117,443,149.3C480,181,517,235,554,224C590.8,213,628,139,665,133.3C701.5,128,738,192,775,202.7C812.3,213,849,171,886,133.3C923.1,96,960,64,997,64C1033.8,64,1071,96,1108,122.7C1144.6,149,1182,171,1218,202.7C1255.4,235,1292,277,1329,272C1366.2,267,1403,213,1422,186.7L1440,160L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path></svg>
                        </div>
                        </Link>
            
                        <Link to="/view-employees" className="link" onClick={() => onClickctiveTab("employee")}>
                        <div className='dash-cards'>
                            <div>
                                <p className='dash-card-name'>List of Employees</p>
                                <h1 className='dash-card-heading'>Employees</h1>
                            </div>
                            <svg className='waves' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1ea5e8" fill-opacity="1" d="M0,288L17.1,288C34.3,288,69,288,103,277.3C137.1,267,171,245,206,208C240,171,274,117,309,80C342.9,43,377,21,411,16C445.7,11,480,21,514,48C548.6,75,583,117,617,112C651.4,107,686,53,720,48C754.3,43,789,85,823,90.7C857.1,96,891,64,926,90.7C960,117,994,203,1029,224C1062.9,245,1097,203,1131,154.7C1165.7,107,1200,53,1234,69.3C1268.6,85,1303,171,1337,218.7C1371.4,267,1406,277,1423,282.7L1440,288L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"></path></svg></div>
                            </Link>
            
                            <Link to="/tests" className="link" onClick={() => onClickctiveTab("tests")}>
                        <div className='dash-cards'>
                            <div>
                                <p className='dash-card-name'>List of Tests</p>
                                <h1 className='dash-card-heading'>Tests</h1>
                            </div>
                            <svg className='waves' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0a5a82" fill-opacity="1" d="M0,0L20,21.3C40,43,80,85,120,106.7C160,128,200,128,240,144C280,160,320,192,360,170.7C400,149,440,75,480,85.3C520,96,560,192,600,192C640,192,680,96,720,96C760,96,800,192,840,245.3C880,299,920,309,960,282.7C1000,256,1040,192,1080,170.7C1120,149,1160,171,1200,170.7C1240,171,1280,149,1320,138.7C1360,128,1400,128,1420,128L1440,128L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>
                        </div>
                        </Link>
                        
                        <Link to="/employee-reports" className="link" onClick={() => onClickctiveTab("reports")}>
                        <div className='dash-cards'>
                            <div>
                                <p className='dash-card-name'>List of Reports</p>
                                <h1 className='dash-card-heading'>Reports</h1>
                            </div>
                            <svg className='waves' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a112c4" fill-opacity="1" d="M0,64L24,101.3C48,139,96,213,144,240C192,267,240,245,288,197.3C336,149,384,75,432,53.3C480,32,528,64,576,85.3C624,107,672,117,720,101.3C768,85,816,43,864,21.3C912,0,960,0,1008,32C1056,64,1104,128,1152,154.7C1200,181,1248,171,1296,165.3C1344,160,1392,160,1416,160L1440,160L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
                        </div>
                        </Link>
                    </div>
                    </div>
                    </div>
                    </>
                    )
                }}
            </SmhriContext.Consumer>
         
        )
    }
}

export default Dashboard