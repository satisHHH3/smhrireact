import { useState,useEffect } from "react"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Cookies from 'js-cookie';

import 'bootstrap/dist/css/bootstrap.min.css';

const Form_O = () => {
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
        <div className="row" style={{marginLeft: '30px', marginRight: '30px'}}>
          <div className="col">
            <div className="report_header_form">
              <input type="button" value="Print Report" className="btn btn-primary" onClick={() => window.print()} id="create_print" />
            </div>
            <div className="div_res" style={{marginTop: '50px'}}>
              <div align="center">
                <h3>FORM - 'O'</h3>
                <h4>[See Rule 29 (2) and 29 L]</h4>
                <h4>Report of medical examination under rule 29 B</h4>
                (To be issued in Triplicate)
              </div>
              <br />
              <div>
                Certificate No: <strong>{values.employeeNo}</strong><br /><br />
                Certificate that Shri/sm
                <span style={{borderBottom: '1px dotted black'}}> {values.name} &nbsp;</span>
                employed as
                <span style={{borderBottom: '1px dotted black'}}>&nbsp;&nbsp;</span>
                In
                <span style={{borderBottom: '1px dotted black'}}>&nbsp;{values.listCompany}&nbsp;</span>
                (Mine Act) Form () has been examined for an initial / periodical
                examination. He / She appears to be
                <span style={{borderBottom: '1px dotted black'}}>&nbsp;2023 &nbsp;</span> {values.age}
                 years of age. The findings of the examining authority are given in
                attached sheet. It is considered that Shri / Shrimati.
              </div>
              <br />
              <div className="report_content">
                <ol type="1">
                  <li>Is medically fit for any employment in mines.</li>
                  <li>
                    Is suffering from ..................... and is medically unfit for.
                    <ol type="i">
                      <li>&nbsp;&nbsp;any employment in mine or</li>
                      <li>&nbsp;&nbsp;any employment below ground or</li>
                      <li>&nbsp;&nbsp;any employment or work</li>
                    </ol>
                  </li>
                  <li>
                    Is suffering from...................and should get this
                    disability* cured/ controlled and should be again examined
                    within a period of ........ months. He/ She will appear for
                    re-examination with the result of test of .............. and
                    the opinion of ............... specialist permitted to carry
                    on his duties during the period.
                  </li>
                </ol>
              </div>
              <br /><br />
              <div>
                <table style={{width: '100%', tableLayout: 'fixed', textAlign: 'left', marginLeft: '30px'}} cellspacing="20px">
                  <tbody>
                    <tr>
                      <td className="squre">
                        {/*<img src="https://quantum-techs.com/smhri/assets/uploads/images/signatures/rpl5.jpeg" width="145" />*/}
                      </td>
                      <td align="center">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp; Signature of the Examining Authority<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp; Dr.R.I.PARAMAR<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp; M.D.C.I.H<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp; Shri Manishanandji Wealth &amp;
                        Research<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp; Intitute Bharuch(Gujarat) INDIA<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp; Registration No.:G-8096
                      </td>
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
export default Form_O