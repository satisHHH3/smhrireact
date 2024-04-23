import { useState,useEffect } from "react"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Cookies from 'js-cookie';

import 'bootstrap/dist/css/bootstrap.min.css';

const Sprotein = () => {
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
          <div>
            <br />
            <div className="div_res">
              <table cellSpacing="0px" cellPadding="0px" width="100%" style={{ fontSize: '14px' }}>
                <tbody>
                  <tr>
                    <th width="20%">Emp No</th>
                    <th width="50%">:&nbsp;*</th>
                    <th width="1%">Date</th>
                    <th width="30%">:&nbsp;19/04/2023</th>
                  </tr>
                  <tr>
                    <th width="20%">Patient's Name</th>
                    <th width="50%">:&nbsp;RABINARAYAN MAHARANA</th>
                    <th width="1%">BirthDate</th>
                    <th width="30%">:&nbsp;05/02/1997</th>
                  </tr>
                  <tr></tr>
                  <tr>
                    <th width="20%">Company Name</th>
                    <th width="40%">:&nbsp;SAINT GOBAIN INDIA PVT.LTD.C/O GYPROC BUSINESS</th>
                    <th width="20%">Age</th>
                    <th width="40%">:&nbsp;27 Year</th>
                  </tr>
                  <tr>
                    <th width="1%">Ticket Number</th>
                    <th width="30%">:&nbsp;SM-88</th>
                    <th width="20%">Sex</th>
                    <th width="40%">:&nbsp;Male</th>
                  </tr>
                </tbody>
              </table>
              <hr style={{ borderWidth: 'thin', borderColor: '#333' }} border="1" />
              <div align="center">
                <h3><u>BIOCHEMISTRY REPORT</u></h3>
              </div>
              <center>
                <table cellSpacing="0px" cellPadding="0px" width="100%" style={{ marginTop: '30px' }}>
                  <tbody>
                    <tr>
                      <th width="15%"><u>BLOOD TEST</u></th>
                      <th width="25%" style={{ textAlign: 'left' }}></th>
                      <th width="20%" style={{ textAlign: 'left' }}><u>RESULT</u></th>
                      <th width="20%" style={{ textAlign: 'left' }}><u>NORMAL RANGE</u></th>
                      <th width="20%"><u>UNIT</u></th>
                    </tr>
                  </tbody>
                </table>
                <table cellSpacing="0px" cellPadding="0px" width="100%" style={{ marginTop: '30px' }}>
                  <tbody>
                    <tr style={{ fontSize: '14px' }}>
                      <td width="15%" align="left">S.Protien</td>
                      <td width="25%" align="left">-Total(Biuret)</td>
                      <td width="20%" align="left" className="pink">&nbsp;1.0</td>
                      <td width="20%" align="left">&nbsp;6.0-8.0</td>
                      <td width="20%" align="left">&nbsp;mg/dl</td>
                    </tr>
                    <tr style={{ fontSize: '14px' }}>
                      <td width="15%" align="left"></td>
                      <td width="25%" align="left">-S. Albumin (BCG)</td>
                      <td width="20%" align="left" className="pink">&nbsp;1.0&nbsp;</td>
                      <td width="20%" align="left">&nbsp;3.5-4.8</td>
                      <td width="20%" align="left">&nbsp;mg/dl</td>
                    </tr>
                    <tr style={{ fontSize: '14px' }}>
                      <td width="15%" align="left"></td>
                      <td width="25%" align="left">-S. Globulin</td>
                      <td width="20%" align="left" className="pink">&nbsp;1.0&nbsp;</td>
                      <td width="20%" align="left">&nbsp;2.3-3.5</td>
                      <td width="20%" align="left">&nbsp;mg/dl</td>
                    </tr>
                    <tr style={{ fontSize: '14px' }}>
                      <td width="15%" align="left"></td>
                      <td width="25%" align="left">-A/G Ratio</td>
                      <td width="20%" align="left">&nbsp;1.0</td>
                      <td width="20%" align="left">&nbsp;1.0-2.3</td>
                      <td width="20%" align="left">&nbsp;</td>
                    </tr>
                  </tbody>
                </table>
              </center>
              <br /><br />
              <hr style={{ borderWidth: 'thin', borderColor: '#333' }} />
              <table width="100%">
                <tbody>
                  <tr>
                    <td align="center">
                      <font style={{ fontSize: '13px' }}><b></b></font>
                    </td>
                  </tr>
                </tbody>
              </table>
              <br /><br />
              <div style={{ textAlign: 'center' }}>
                <b><i><u>End of The Report</u></i></b>
              </div>
              <br />
              <div>
                <i>Note: This report is not for legal implication and purpose,
                  confidential report only for company use.</i>
              </div>
              <br /><br /><br /><br />
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
                      {/* Dr. Mahesh R Kakadiya */}<br />{/* M.D (PATHOLOGY), */}<br />{/* Reg.No:- G - 23663 */}
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
)
}
export default Sprotein