import { useState,useEffect } from "react"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Cookies from 'js-cookie';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';


const Form32 = () => {
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
                <h3>FORM NO.32</h3>
                <h4>(Prescribed under Rule 68-T and 102,Gujarat Factories Rules-1963)</h4>
                Certificate of Medical Examination
              </div>
              <br />
              <div className="report_content">
                <ul type="none">
                  <li>
                    <b><span className="mainc">Employee Company Name&nbsp;&nbsp;</span>: {values.listCompany}</b>
                  </li>
                  <li>
                    <b><span className="mainc">Ticket No </span>: {values.ticketNo}</b>
                  </li>
                </ul>
                <ol type="1">
                  <li><span className="mainup">Serial Number in the Register of Adult Worker :</span> {values.employeeNo}</li>
                  <li><span className="mainup">Name of Worker</span> : {values.name} </li>
                  <li><span className="mainup">sex </span> : {values.sex} / {values.age} Year</li>
                  <li><span className="mainup">Date of Birth</span> : {values.birthdate}</li>
                </ol>
                <br />
                <center>
                  <table border="1" width="100%" style={{ fontSize: '15px' }}>
                    <colgroup>
                      <col width="1" />
                      <col width="450" />
                      <col width="450" />
                    </colgroup>
                    <tbody>
                      <tr>
                        <td id="srno">1</td>
                        <td>Department Works</td>
                        <td>{values.departmentWorks}</td>
                      </tr>
                      <tr>
                        <td id="srno">2</td>
                        <td>Name of Hazardous Processes</td>
                        <td>{values.hazardousProcesses}</td>
                      </tr>
                      <tr>
                        <td id="srno">3</td>
                        <td>Dangerous process / operation</td>
                        <td>{values.dangerousProcess}</td>
                      </tr>
                      <tr>
                        <td id="srno">4</td>
                        <td>Nature of job or Occupation</td>
                        <td>{values.jobNature}</td>
                      </tr>
                      <tr>
                        <td id="srno">5</td>
                        <td>Raw materials, product or byproducts Likely to be exposed to</td>
                        <td>{values.exposedMaterials}</td>
                      </tr>
                      <tr>
                        <td id="srno">6</td>
                        <td>Date of Posting or Joining</td>
                        <td>{values.dateOfPosting}</td>
                      </tr>
                      <tr>
                        <td id="srno">7</td>
                        <td>Date of Leaving / transfer to or transfer for</td>
                        <td>{values.dateOfLeaving}</td>
                      </tr>
                      <tr>
                        <td id="srno">8</td>
                        <td>Reason for discharge/leaving or transfer for</td>
                        <td>{values.reasonForDischarge}</td>
                      </tr>
                      <tr>
                        <td id="srno">9</td>
                        <td>Date</td>
                        <td>{values.date}</td>
                      </tr>
                      <tr>
                        <td id="srno">10</td>
                        <td>Signs and symptoms observed during examinations</td>
                        <td>{values.symptoms}</td>
                      </tr>
                      <tr>
                        <td id="srno">11</td>
                        <td>Nature of tests & results thereof</td>
                        <td>{values.tests}</td>
                      </tr>
                      <tr>
                        <td id="srno">12</td>
                        <td>Result Fit / Unfit</td>
                        <td>{values.fitResult}</td>
                      </tr>
                      <tr>
                        <td id="srno">13</td>
                        <td>Period of temporary withdrawal from that work</td>
                        <td>{values.withdrawalPeriod}</td>
                      </tr>
                      <tr>
                        <td id="srno">14</td>
                        <td>Reason for such withdrawal</td>
                        <td>{values.withdrawalReason}</td>
                      </tr>
                      <tr>
                        <td id="srno">15</td>
                        <td>Date of declaring him unfit for that work</td>
                        <td>{values.unfitDate}</td>
                      </tr>
                      <tr>
                        <td id="srno">16</td>
                        <td>Date of issuing fitness certificate</td>
                        <td>{values.fitnessCertificateDate}</td>
                      </tr>
                      <tr>
                        <td id="srno">17</td>
                        <td>Signature with date of the Factory Medical Officer / the Certify Surgeon</td>
                        <td style={{ textAlign: 'center' }}>
                          <br/><br/>
                          <b>{values.medicalOfficerName}</b> <br />
                          ({values.medicalOfficerTitle}) <br />
                          {values.medicalOfficerLocation} <br />
                          Reg.No. {values.medicalOfficerRegNo}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
)
}
export default Form32