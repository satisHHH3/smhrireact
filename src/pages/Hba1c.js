import { useState,useEffect } from "react"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Cookies from 'js-cookie';

import 'bootstrap/dist/css/bootstrap.min.css';

const Hba1c = () => {
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
        <div className="container">
        <div className="row">
          <div className="col">
            <div className="report_header_form">
              <input type="button" value="Print Report" className="btn btn-primary" onClick={() => window.print()} id="create_print" />
            </div>
            <div className="div_res">
              <table cellSpacing="0px" cellPadding="0px" width="100%" style={{ fontSize: '14px' }}>
                <tbody>
                  <tr>
                    <th width="20%">Emp No</th>
                    <th width="50%">:&nbsp; {values.employeeNo}</th>
                    <th width="1%">Date</th>
                    <th width="30%">:&nbsp;{values.testDate}</th>
                  </tr>
                  <tr>
                    <th width="20%">Patient's Name</th>
                    <th width="50%">:&nbsp;{values.name}</th>
                    <th width="1%">BirthDate</th>
                    <th width="30%">:&nbsp;{values.birthdate}</th>
                  </tr>
                  <tr>
                    <th width="20%">Company Name</th>
                    <th width="40%">:&nbsp;{values.listCompany}</th>
                    <th width="20%">Age</th>
                    <th width="40%">:&nbsp; {values.age} Year</th>
                  </tr>
                  <tr>
                    <th width="1%">Ticket Number</th>
                    <th width="30%">:&nbsp; {values.ticketNo}</th>
                    <th width="20%">Sex</th>
                    <th width="40%">:&nbsp; {values.sex}</th>
                  </tr>
                </tbody>
              </table>
              <hr />
              <div align="center">
                <h3><u>HBA1C REPORT</u></h3>
              </div>
              <table cellSpacing="0px" cellPadding="0px" width="100%" style={{ marginTop: '30px' }}>
                <tbody>
                  <tr>
                    <th width="30%"><u>TEST</u></th>
                    <th width="25%" style={{ textAlign: 'left' }}><u>RESULT</u></th>
                    <th width="20%"><u>Reference RANGE</u></th>
                  </tr>
                  <tr style={{ fontSize: '14px' }}>
                    <td width="30%">HbA1C</td>
                    <td style={{ textAlign: 'left' }} width="25%" className="pink">:&nbsp;1.0&nbsp;%</td>
                    <td style={{ textAlign: 'left' }} width="20%">Non Diabetic: 4.3-6.3%</td>
                  </tr>
                  <tr style={{ fontSize: '14px' }}>
                    <td width="30%"></td>
                    <td style={{ textAlign: 'left' }} width="30%"></td>
                    <td style={{ textAlign: 'left' }} width="20%">Good Control: 6.4-7.5%</td>
                  </tr>
                  <tr style={{ fontSize: '14px' }}>
                    <td width="30%"></td>
                    <td style={{ textAlign: 'left' }} width="30%"></td>
                    <td style={{ textAlign: 'left' }} width="20%">Moderate Control: 7.5-9.0%</td>
                  </tr>
                  <tr style={{ fontSize: '14px' }}>
                    <td width="30%"></td>
                    <td style={{ textAlign: 'left' }} width="30%"></td>
                    <td style={{ textAlign: 'left' }} width="20%">Poor Control: 9.0% & Above</td>
                  </tr>
                  <tr style={{ fontSize: '14px' }}>
                    <td width="30%">Avg. Blood Glucose Level</td>
                    <td style={{ textAlign: 'left' }} width="30%">:&nbsp;1.0 mg/dl</td>
                    <td style={{ textAlign: 'left' }} width="20%"></td>
                  </tr>
                </tbody>
              </table>
              <br /><br />
              <hr />
              <table width="100%">
                <tbody>
                  <tr>
                    <td align="center">
                      <font style={{ fontSize: '13px' }}><b></b></font>
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
              <div style={{ textAlign: 'center' }}>
                <b><i><u>End of The Report</u></i></b>
              </div>
              <br />
              <div>
                <i>Note: This report is not for legal implication and purpose, confidential report only for company use.</i>
              </div>
              <table cellSpacing="0px" cellPadding="0px" width="100%" style={{ marginTop: '30px', fontSize: '20px' }}>
                <tbody>
                  <tr>
                    <th width="70%" align="center">
                      <img src="https://quantum-techs.com/smhri/assets/uploads/images/signatures/rpl5.jpeg" width="150px" alt="signature" />
                    </th>
                    <th width="70%" align="center">
                      {/* <img src="https://quantum-techs.com/smhri/assets/uploads/images/signatures/mrk.png" width="150px;" /> */}
                    </th>
                  </tr>
                  <tr>
                    <th width="70%">
                      DR.R.I.PARMAR<br />(M.D.C.I.H)<br />Reg. No:- G - 8096
                    </th>
                    <th>
                      {/* Dr. Mahesh R Kakadiya --><br /><!-- M.D (PATHOLOGY), --><br /><!-- Reg.No:- G - 23663 */}
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
)
}
export default Hba1c