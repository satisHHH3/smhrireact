import { useState,useEffect } from "react"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Cookies from 'js-cookie';

import 'bootstrap/dist/css/bootstrap.min.css';

const Hiv = () => {
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
              <table cellspacing="0px" cellpadding="0px" width="100%" style={{ fontSize: '14px' }}>
                <tbody>
                  <tr>
                    <th width="20%">Emp No</th>
                    <th width="50%">:&nbsp; {values.employeeNo}</th>
                    <th width="1%">Date</th>
                    <th width="30%">:&nbsp; {values.testDate}</th>
                  </tr>
                  <tr>
                    <th width="20%">Patient's Name</th>
                    <th width="50%">:&nbsp;{values.name}</th>
                    <th width="1%">BirthDate</th>
                    <th width="30%">:&nbsp; {values.birthdate}</th>
                  </tr>
                  <tr></tr>
                  <tr>
                    <th width="20%">Company Name</th>
                    <th width="40%">:&nbsp; {values.listCompany}</th>
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
              <hr style={{ borderWidth: 'thin', borderColor: '#333' }} border="1" />
              <div align="center">
                <h3><u>EXAMINATION OF BLOOD FOR HIV</u></h3>
              </div>
              <center>
                <table cellspacing="0px" cellpadding="0px" width="100%">
                  <tbody>
                    <tr>
                      <th width="40%"><u>TEST</u></th>
                      <th width="60%" style={{ textAlign: 'left' }}><u>RESULT</u></th>
                    </tr>
                  </tbody>
                </table>
                <table cellspacing="0px" cellpadding="0px" width="100%">
                  <tbody>
                    <tr style={{ fontSize: '14px', lineHeight: '40px' }}>
                      <td width="40%">Result</td>
                      <td style={{ textAlign: 'left' }} width="60%">&nbsp;:&nbsp;1</td>
                    </tr>
                    <tr style={{ fontSize: '14px', lineHeight: '40px' }}>
                      <td width="40%">Method</td>
                      <td style={{ textAlign: 'left' }} width="60%">&nbsp;:&nbsp;1</td>
                    </tr>
                    <tr style={{ fontSize: '14px', lineHeight: '40px' }}>
                      <td width="40%">Remark</td>
                      <td style={{ textAlign: 'left' }} width="60%">&nbsp;:&nbsp;1</td>
                    </tr>
                  </tbody>
                </table>
              </center>
              <br />
              <hr style={{ borderWidth: 'thin', borderColor: '#333' }} />
              <div style={{ fontFamily: 'Times New Roman' }}>
                <p style={{ paddingLeft: '5%', fontSize: '14px' }}><u>LEGEND:</u></p>
                <ol>
                  <li>
                    Positive initial screening test for HIV antibody should be reconfirmed by ELISA test from another sample of the same patient collected after an interval of few days using ELISA test kit from another manufacturer
                  </li>
                  <li>
                    Final confirmation should be done by performing western blot test
                  </li>
                  <li>
                    A negative test does not exclude the possibility of prior exposure especially a recent one
                  </li>
                  <li>
                    Final diagnosis of HIV infection must be based on clinical correlation with laboratory test result
                  </li>
                </ol>
              </div>
              <hr style={{ borderWidth: 'thin', borderColor: '#333' }} />
              <div style={{ textAlign: 'center' }}>
                <b><i><u>End of The Report</u></i></b>
              </div>
              <table cellspacing="0px" cellpadding="0px" width="100%" style={{ fontSize: '20px' }}>
                <tbody>
                  <tr>
                    <th width="70%" align="center">
                      <img src="https://quantum-techs.com/smhri/assets/uploads/images/signatures/rpl5.jpeg" width="150px" alt="Signature" />
                    </th>
                    <th width="70%" align="center"></th>
                  </tr>
                  <tr>
                    <th width="70%">
                      DR.R.I.PARMAR<br />(M.D.C.I.H)<br />Reg. No:- G - 8096
                    </th>
                    <th></th>
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
export default Hiv