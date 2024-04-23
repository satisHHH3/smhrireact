import { useState,useEffect } from "react"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Cookies from 'js-cookie';

import 'bootstrap/dist/css/bootstrap.min.css';

const FormNew = () => {
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
    
    const generatePdf = () => {
        const jsPdf = new window.jspdf.jsPDF('p', 'pt', 'a4');
        const htmlElement = document.getElementsByClassName('div_res')[0];
        const opt = {
          callback: function (jsPdf) {
            jsPdf.save("Test.pdf");
          },
          margin: 0,
          autoPaging: 'text'
        };
        jsPdf.html(htmlElement, opt);
      };

    return(
        <div className="container-fluid">
        <div className="row" style={{ marginLeft: '30px', marginRight: '30px' }}>
          <div className="col">
            <div className="report_header_form">
              <input type="button" value="Print Report" className="btn btn-primary" onClick={generatePdf} id="create_print" />
            </div>
            <div className="div_res" style={{ padding: '10px' }}>
              <div align="center">
                <h3>SECOND SCHEDULE</h3>
                <h4>Report of medical examination</h4>
              </div>
              <br />
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I do hereby
                certify that I have examined
                <span style={{ borderBottom: '1px dotted black' }}>: {values.name} &nbsp;&nbsp;</span>
                {values.employeeNo}
                <span style={{ borderBottom: '1px dotted black' }}>&nbsp; SM-88 &nbsp;</span>
                He / she appear to be<span style={{ borderBottom: '1px dotted black' }}>&nbsp;2023&nbsp;</span>
                {values.age} years of age.<br /><br />
              </div>
              <br />
              <div className="report_content">
                <div style={{ display: 'flex' }}>
                  <div>
                    The identification marks of the Candidate.
                    <ol type="1">
                      <br />
                      <li>(a) ____________________________________.</li>
                      <br />
                      <br />
                      <li>(b) ____________________________________.</li>
                    </ol>
                  </div>
                  <div style={{ margin: 'auto' }}>
                    <table cellSpacing="20px" style={{ margin: 'auto' }}>
                      <tbody>
                        <tr>
                          <td className="squre">
                            Paste recent Colour passport size Photograph of
                            Candidate: Front side of the photograph should be
                            signed with seal by the examining authority.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <br /><br />
              <div>
                <table style={{ width: '100%', tableLayout: 'fixed', marginLeft: '30px' }} cellSpacing="20px">
                  <tbody>
                    <tr>
                      <td>
                        <u>Signature/Left thumb impression of the Candidate : </u><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </td>
                      <td className="squre-horizontal">
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br /><br />
              <div>
                The findings of the Examining Authority in respect the health of
                the candidate are as follows:-<br /><br /><br />
                {/* The rest of the content goes here */}
              </div>
              <br /><br />
              <div>
                <strong>
                  <h5 align="right">
                    <b>Signature of Examining Authority with date</b>
                  </h5>
                </strong>
              </div>
              <br /><br />
              <div>
                <h5 align="right">
                  <b>Name (in Block Letter):&nbsp;&nbsp; Dr. Rajit I Parmar (Mo, CIH)</b>
                </h5>
                <h5 align="right">
                  <b>Designation: &nbsp;&nbsp; Occupational Health Physician</b>
                </h5>
                <h5 align="right">
                  <b>Registration no. &nbsp;&nbsp;G - 8096</b>
                </h5>
                <h5 align="right"><b>(Seal) &nbsp;&nbsp;</b></h5>
              </div>
              <div>
                Place: _________________________________
                <br />Date: _________________________________
              </div>
            </div>
          </div>
        </div>
      </div>
)
}
export default FormNew