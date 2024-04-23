import { useState,useEffect } from "react"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Cookies from 'js-cookie';

import 'bootstrap/dist/css/bootstrap.min.css';

const HealthCard = () => {
    const { id } = useParams();
    const [values, setValues] = useState({
        name: '',
        employeeNo: '',
        ticketNo: '',
        testDate: '',
        sex: '',
        listCompany: '',
        birthdate: '',  
        age: '*'
    });


    useEffect(() => {
        const employeeData = async () => {
            const jwt = Cookies.get('jwt_token');
            const url = `https://cloudconnectcampaign.com/smhri/api/employee_master/${id}/`;
    
            const options = {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            };
    
            const request = await fetch(url, options);
    
            if (request.ok) {
                const data = await request.json();
                
        const today = new Date();
        const birthDate = new Date(data.birthdate);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        console.log(age)
                
                setValues({
                    name: data.first_name,
                    employeeNo: data.employee_no,
                    ticketNo: data.ticket_no,
                    testDate: data.test_date,
                    sex: data.sex,
                    listCompany: data.list_company,
                    birthdate: data.birthdate,
                    age: age
                });
            }
        };
    
        employeeData();
    }, []);
    

    return(
      <div className="container" style={{ margin: '50px' }}>
      <div className="row">
        <div className="col">
          <div className="report_header_form">
            <input type="button" value="Print Report" className="btn btn-primary" onClick={() => window.print()} id="create_print" />
          </div>
          <table className="div_res" style={{ margin: 'auto' }}>
            <tbody>
              <tr>
                <td>
                  <div style={{ width: '9cm', height: '6.3cm', border: '1px solid #666' }}>
                    <table style={{ borderBottom: '0.2px solid' }} width="100%">
                      <tbody>
                        <tr>
                          <td>
                            <span style={{ fontSize: '13px' }}><b>SAINT GOBAIN INDIA PVT.LTD.C/O GYPROC BUSINESS</b></span>
                            <br /><span style={{ fontSize: '8px' }}></span>
                          </td>
                          <td>
                            <span style={{ fontSize: '13px' }}><b>PME Card</b></span>
                            <br /><span style={{ fontSize: '8px' }}></span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table width="100%">
                      <tbody>
                        <tr>
                          <td style={{ fontSize: '10px', paddingLeft: '2px' }}>
                            Ticket No. : SM-88
                          </td>
                          <td style={{ fontSize: '10px' }}>Date : 19/04/2023</td>
                          <td style={{ fontSize: '10px' }}>Age : 27 Yrs.</td>
                        </tr>
                      </tbody>
                    </table>
                    <table width="100%">
                      <tbody>
                        <tr>
                          <td style={{ color: '#ff0000', fontSize: '12px', paddingLeft: '2px' }} colSpan="2">
                            <b>RABINARAYAN MAHARANA</b>
                          </td>
                          <td rowSpan="7" align="center">
                            <img src="/media/%20" width="75" height="75" />
                          </td>
                        </tr>
                        <tr>
                          <td style={{ fontSize: '10px', paddingLeft: '2px' }}>
                            Des : JR.ENGINEER PRODUCTION
                          </td>
                        </tr>
                        <tr>
                          <td style={{ fontSize: '10px', paddingLeft: '2px' }}></td>
                          <td style={{ fontSize: '10px' }}></td>
                          <td style={{ fontSize: '10px' }}></td>
                        </tr>
                        <tr>
                          <td style={{ fontSize: '10px' }}>
                            Dept : OPERATIONS
                          </td>
                        </tr>
                        <tr style={{ borderBottom: '0.2px solid' }}></tr>
                      </tbody>
                    </table>
                    <table width="100%">
                      <tbody>
                        <tr>
                          <td style={{ fontSize: '10px', paddingLeft: '2px' }}>
                            HT : 167 Cm.
                          </td>
                          <td style={{ fontSize: '10px' }} className="">
                            BMI : 29
                          </td>
                        </tr>
                        <tr>
                          <td style={{ fontSize: '10px' }}>
                            WT : 80 Kg.
                          </td>
                          <td style={{ fontSize: '10px' }}>
                            B.P : 140/95
                          </td>
                        </tr>
                        <tr style={{ borderTop: '0.2px solid' }}>
                          <td style={{ fontSize: '10px', paddingLeft: '2px' }}>
                            <b>VISION NORMAL VISION</b>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ fontSize: '8px' }} align="center"></td>
                          <td style={{ fontSize: '8px' }} align="center">
                            <b>WTG-LE</b>
                          </td>
                          <td style={{ fontSize: '8px' }} align="center">
                            <b>WTG-RE</b>
                          </td>
                          <td style={{ fontSize: '8px' }} align="center">
                            <b>WG-LE</b>
                          </td>
                          <td style={{ fontSize: '8px' }} align="center">
                            <b>WG-RE</b>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ fontSize: '9px', paddingLeft: '2px' }}>
                            Near
                          </td>
                          <td style={{ fontSize: '9px' }} align="center">N/6</td>
                          <td style={{ fontSize: '9px' }} align="center">N/6</td>
                          <td style={{ fontSize: '9px' }} align="center">--</td>
                          <td style={{ fontSize: '9px' }} align="center">--</td>
                        </tr>
                        <tr>
                          <td style={{ fontSize: '9px', paddingLeft: '2px' }}>
                            Distance
                          </td>
                          <td style={{ fontSize: '9px' }} align="center">6/6</td>
                          <td style={{ fontSize: '9px' }} align="center">6/6</td>
                          <td style={{ fontSize: '9px' }} align="center">--</td>
                          <td style={{ fontSize: '9px' }} align="center">--</td>
                        </tr>
                        <tr>
                          <td colSpan="5" style={{ fontSize: '10px', paddingLeft: '2px' }}>
                            COLOUR VISION : ACCEPTABLE
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
                <td>
                  <div style={{ width: '9cm', height: '6.3cm', border: '1px solid #666' }}>
                    <table style={{ borderBottom: '0.2px solid' }} width="100%">
                      <tbody>
                        <tr>
                          <td>
                            <span style={{ fontSize: '10px', color: '#000080' }}><b>SMHRI OCCUPATIONAL HEALTH SERVICE PVT LTD</b></span>
                            <span style={{ fontSize: '10px', color: '#000080' }}>&nbsp;&nbsp;&nbsp;<b>(M)9898027111</b></span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table style={{ borderBottom: '0.2px solid' }} width="100%">
                      <tbody>
                        <tr>
                          <td style={{ fontSize: '12px', paddingLeft: '2px' }}>
                            <b>PATHOLOGY REPORT :</b>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ fontSize: '10px', paddingLeft: '2px' }}>
                            Random Glucose : 84.8 mg/dl
                          </td>
                          <td style={{ fontSize: '10px' }}>Hemoglobin : 14.1</td>
                        </tr>
                        <tr>
                          <td style={{ fontSize: '10px', paddingLeft: '2px' }}>
                            WBC : 7300
                          </td>
                          <td style={{ fontSize: '10px' }}>ESR : 10mm</td>
                        </tr>
                        <tr>
                          <td style={{ fontSize: '10px', paddingLeft: '2px' }}>
                            S.Cholestrol : 158mg/dl
                          </td>
                          <td style={{ fontSize: '10px' }}>
                            Platelet : 246000
                          </td>
                        </tr>
                        <tr>
                          <td style={{ fontSize: '10px', paddingLeft: '2px' }}>
                            Triglycerides : 145mg/dl
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table width="100%">
                      <tbody>
                        <tr>
                          <td style={{ fontSize: '10px', paddingLeft: '2px' }}>
                            Urine Test : 
                          </td>
                          <td style={{ fontSize: '10px' }}>
                            Albumin : ABSENT
                          </td>
                          <td style={{ fontSize: '10px' }}>Sugar : NIL</td>
                        </tr>
                      </tbody>
                    </table>
                    <table width="100%">
                      <tbody>
                        <tr>
                          <td style={{ fontSize: '10px', paddingLeft: '2px' }}>
                            AUDIOMETRY : NORMAL 
                          </td>
                          <td style={{ fontSize: '10px' }}>
                            ECG : NORMAL 
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
)
}
export default HealthCard