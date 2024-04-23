import { useState,useEffect } from "react"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Cookies from 'js-cookie';

import 'bootstrap/dist/css/bootstrap.min.css';

const Medical = () => {
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
        <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="report_header_form">
              <input type="button" value="Print Report" className="btn btn-primary" onClick={() => window.print()} id="create_print" />
            </div>
            <div className="div_res" style={{ border: 'solid 1px', padding: '10px', marginLeft: '50px', marginRight: '50px' }}>
              <div align="center">
                <h3>FORM - 33</h3>
                <h4>Prescribed under 68-T and 102</h4>
                CERTIFICATE OF FITNESS OF EMPLOYEMENT IN HAZARDOUS PROCESS AND
                OPERATION <br />TO BE ISSUED BY THE FACTORY MEDICAL OFFICER
              </div>
              <br />
              <div className="report_content">
                <table className="firstt" style={{
                  width: '90%',
                  fontSize: '14px',
                  tableLayout: 'fixed',
                }}>
                  <colgroup>
                    <col width="150" />
                    <col width="200" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <td>Ticket No.</td>
                      <td>: {values.ticketNo}</td>
                    </tr>
                    <tr>
                      <td>Employee Code No.</td>
                      <td>:  {values.employeeNo}</td>
                    </tr>
                    <tr></tr>
                    <tr>
                      <td>Name of the person examination</td>
                      <td>:  {values.name} </td>
                    </tr>
                    <tr></tr>
                    <tr></tr>
                    <tr>
                      <td>Sex</td>
                      <td>:  {values.sex} / {values.age} Years</td>
                    </tr>
                    <tr>
                      <td>Date of birth if available</td>
                      <td>:  {values.birthdate}</td>
                    </tr>
                    <tr>
                      <td>
                        Name &amp; Address of the factory The worker is <br />
                        employed / proposed
                      </td>
                      <td>:  {values.listCompany}</td>
                    </tr>
                    <tr>
                      <td>A. Hazardous</td>
                      <td>:</td>
                    </tr>
                    <tr>
                      <td>B. Dangerous operation</td>
                      <td>:</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              <div style={{ textAlign: 'justify', fontSize: '10px' }}>
                I certify that I have Personally examined the above named person
                whose identification marks are <u>&nbsp;MOLE ON CHEEK<b>&nbsp;&nbsp;&nbsp;&nbsp;</b></u><u></u> and who is desirous of being employed in above mentioned
                process / operation and his/her, age as nearly as can be
                ascertained from my examination is <b><u>27</u></b> years.
              </div>
              <div style={{ textAlign: 'justify' }}>
                In my opinion he/she is fit for employment in the said
                manufacturing process/operation. <br />
                In my opinion he/she is fit for employment in the said
                manufacturing process/operation for the reason
                _____________________________________________________________ is
                referred for further examination to the certifying Surgeon.
                <br />
                The Serial Number of the previous Certificate is
                __________________________________________
              </div>
              <div style={{ width: '100%' }}>
                <br />
                <br />
                <br />
                <br /><br /><br />
                <div style={{ width: '50%', float: 'left' }}>
                  Signature / Left hand Thumb<br />
                  Impression of building workers<br /><br />
                </div>
                <div style={{ width: '50%', float: 'right', textAlign: 'right' }}>
                  Signature with seal<br />
                  Medical Inspector / C.M.O.
                </div>
              </div>
              <div className="report_bottom" style={{ textAlign: 'center', clear: 'both' }}>
                Stamp of Factory Medical officer With Name of The Factory
              </div>
              <div>
                <table style={{
                  width: '100%',
                  fontSize: '14px',
                  tableLayout: 'fixed',
                  textAlign: 'center',
                }} border="1">
                  <tbody>
                    <tr>
                      <td>
                        | Certify that |<br />
                        examined the person<br />
                        above on(date of examination)
                      </td>
                      <td>
                        I extend this certificate until
                        (if certificate is not extended the
                        period for which the worker is
                        considered until for work is to be
                        mentioned)
                      </td>
                      <td>
                        Signs and symptoms observed
                        during examination
                      </td>
                      <td>
                        Signature of
                        the factory medical officer
                        with date
                      </td>
                    </tr>
                    <tr>
                      <td>2023-04-19</td>
                      <td></td>
                      <td>
                        B.P.: 140/95  <br />
                        Pulse: 77
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div style={{ fontSize: '12px' }}>
                <b style={{ fontSize: '12px' }}>Note.
                  <ol>
                    <li style={{ fontSize: '12px' }}>
                      If declared only performance should be made immediately to
                      the certifying surgeon.
                    </li>
                    <li style={{ fontSize: '12px' }}>
                      Certifying surgeon should communicate his finding to the
                      occupier within 30 days of the receipt of this reference.
                    </li>
                  </ol>
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
)
}
export default Medical